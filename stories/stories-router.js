const Stories = require("./stories-model.js")
const router = require('express').Router();

//find all stories
router.get("/", (req, res) => {
    
    Stories.find()
        .then(stories => res.status(200).json(stories))
        .catch(err => res.status(500).json({error: "unable to get stories"}))
})

//find a specific story

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Stories.findById(id)
        .then(story => res.status(200).json(story))
        .catch(err => res.status(500).json({error: "unable to obtain the story"}))
})

//remove a story

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Stories.remove(id)
        .then(id => res.status(200).json({removed: id}))
}) 


module.exports = router;


