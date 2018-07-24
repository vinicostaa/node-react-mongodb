const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", 
  passport.authenticate("google"),
  (req, res) => {
    res.redirect('/surveys');
  }
);

  app.get("/api/logout", async (req, res) => {
    req.logout(); // delete Cookie
    res.redirect('/');
  });

  app.get("/api/current_user", async (req, res) => {
    console.log(process.env.PORT);
    res.send(req.user);
  });
};
