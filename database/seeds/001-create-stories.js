
exports.seed = function(knex) {
  const stories = [
    {
      "title": "Paris",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id": 3
   
    },
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id": 3 

    } ,
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
     "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id": 3
    },
    {
      "title": "Paris",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":1
   
    },
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":1,

    } ,
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
     "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":1
    },
    {
      "title": "Paris",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":2
   
    },
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":2,

    } ,
    {
      "title": "Bengaluru",
      "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
     "img_link":"https://unsplash.com/photos/Sw57gA_fojQ",
      "date_pic_taken":"11-11-2011",
      "location":"Paris,France",
      "user_id":2
    }
    ] 
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert(stories);
    });
};
