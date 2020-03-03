const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("./users-model.js");

const Stories = require("../stories/stories-model.js");

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

router.put("/:id", (req, res) => {
  const changes = req.body;
  const {id} = req.params;
  if(changes.password){
    const hash = bcrypt.hashSync(changes.password, 12)
    changes.password = hash;
  }
  Users.update(id, changes)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({error: "Unable to update user information"})
  })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to remove the User" });
    });
});

//story related routes;
router.get("/:id/stories", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      if (user) {
        Stories.findByUserId(id)
          .then(stories => res.status(200).json(stories))
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Unable to obtain stories" });
          });
      } else {
        res.status(400).json({ error: "The user doesn't exist" });
      }
    })
    .catch(err => res.status(500).json({ error: "Unable to find the user" }));
});
router.post("/:id/stories", (req, res) => {
  const story = req.body;
  story.user_id = req.params.id;
  console.log(story);
  Stories.add(story)
    .then(story => res.status(201).json(story))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unable to create a story" });
    });
});

module.exports = router;
