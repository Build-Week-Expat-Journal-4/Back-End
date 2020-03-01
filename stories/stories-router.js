const Stories = require("./stories-model.js")
const router = require('express').Router();

//find all stories
router.get("/", (req, res) => {
    
    Stories.find()
        .then(stories => res.status(200).json(stories))
        .catch(err => res.status(500).json({error: "Unable to get stories"}))
})

//find a specific story

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Stories.findById(id)
        .then(story => res.status(200).json(story))
        .catch(err => res.status(500).json({error: "Unable to obtain the story"}))
})

router.put("/:id", (req, res) => {
    const story = req.body;
    Stories.findById(id)
        .then(story => {
            if (story) {
                Stories.update(story,story.id)
                    .then (story => res.status(201).json(story) )
                    .catch(err => res.status(500).json({error: "Unable to update the story"}))
            } 
        })
        .catch(err => res.status(400).json({error: "The story doesn't exist"}))
    
    
      
  })

//remove a story

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Stories.findById
        .then(story => {
            if (story) {
                Stories.remove(story.id)
                .then(id => res.status(200).json({removed: id}))
                .catch(err => res.status(500).json({error: "Unable to delete the story"}))
            
            }
        })
        .catch(err => res.status(400).json({error: "The story doesn't exist"}))


        
}) 


module.exports = router;


