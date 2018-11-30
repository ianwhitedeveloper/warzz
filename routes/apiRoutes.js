const axios = require("axios");
const router = require("express").Router();

router.get("/results", (req, res) => {
  axios
    .get("https://swapi.co/api/people/?search=r2", { params: req.query })
    .then(function(response){
      console.log(response)
    })
    // .then(({ data: { results } }) => res.json(results))
    // .catch(err => res.status(422).json(err));
});

module.exports = router;