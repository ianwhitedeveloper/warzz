const express = require("express") ;
// const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded( {extended:true} ))
app.use(bodyParser.json());

// app.use("/api", apiRoutes);
// app.use(app.router);
// apiRoutes.initialize(app);

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));

// });

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

app.listen(PORT, function () { 
    console.log(`Listening on PORT ${PORT}`)
});