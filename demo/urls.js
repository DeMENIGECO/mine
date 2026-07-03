module.exports = [
  {
    path: "/",
    method: "get",
    handler: (req, res) => {
      res.send("🏠 Home del progetto demo");
    }
  },

  {
    path: "/hello",
    method: "get",
    handler: (req, res) => {
      res.json({ message: "Ciao da Mine demo!" });
    }
  },

  {
    path: "/time",
    method: "get",
    handler: (req, res) => {
      res.json({
        now: new Date().toISOString()
      });
    }
  }
];
