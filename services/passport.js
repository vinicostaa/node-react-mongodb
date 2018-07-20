const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) {
    done(null, user);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClienteID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (acessToken, refreshToken, profile, done) => {
      const ExistentUser = await User.findOne({ googleId: profile.id });

      if (ExistentUser) {
        return done(null, user);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
