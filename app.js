var express     = require("express"),
    app         = express(),
    projectDB    = require("./seed"),
    bodyParser  = require("body-parser");

app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("home", {projects: projectDB});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Up");
});