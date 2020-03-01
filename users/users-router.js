const router = require("express").Router();

const Users = require("./users-model.js");

const Stories = require("../stories/stories-model.js")


router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to return users" });
    });
});

//story related routes;
router.post("/:id/stories", (req, res) => {
  const story = req.body;
  story.user_id = req.params.id;

  Stories.add(story)
    .then (story => res.status(201).json(story) )
    .catch(err => res.status(500).json({error: "Unable to create a story"}))
    
})



module.exports = router;
