const Stories = require("./stories-model.js");
const router = require("express").Router();

//find all stories
router.get("/", (req, res) => {
  Stories.find()
    .then(stories => res.status(200).json(stories))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unable to get stories" });
    });
});

//find a specific story

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Stories.findById(id)
    .then(story => {
      if (story) {
        res.status(200).json(story);
      } else {
        res.status(400).json({ error: "This story doesn't exist" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "Unable to obtain the story" })
    );
});

router.put("/:id", findStory, (req, res) => {
  const { title, location, story } = req.body;
  const newStory = { title, location, story };
  const id = req.params.id;
  Stories.update(newStory, id)
    .then(story => res.status(200).json(story))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unable to update the story" });
    });
});

//remove a story

router.delete("/:id", findStory, (req, res) => {
  const id = req.params.id;

  Stories.remove(id)
    .then(count => res.status(200).json({ removed: id }))
    .catch(err => res.status(500).json({ error: "Unable to delete" }));
});

function findStory(req, res, next) {
  const id = req.params.id;
  Stories.findById(id)
    .then(found => {
      if (found) {
        next();
      } else {
        res.status(400).json({ error: "This story doesn't exist" });
      }
    })
    .catch(err => res.status(400).json({ error: "Unable to find the story" }));
}

module.exports = router;
