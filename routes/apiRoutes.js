module.exports = function(app) {
    app.post("/contactInfo", function(req, res) {
        let data = req.body.data;
        console.log(data.name);
        console.log("Name: " + data.name + ". Email: " + data.email + ". Message: " + data.message + ".");
        console.log("backend reached!");
        //console.log(req.query.hello);
        res.send("success response from server");
    });
  
    //The 404 Route (ALWAYS Keep this as the last route)
    app.get("*", function(req, res) {
      res.send("404");
    });
  };
  