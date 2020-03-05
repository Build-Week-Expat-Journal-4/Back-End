
exports.seed = function(knex) {
  const stories = [
    {
      title: "Paris",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      date_pic_taken: "11-11-2011",
      location: "Paris,France",
      user_id: 3
    },
    {
      title: "Bengaluru",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80",
      date_pic_taken: "11-11-2011",
      location: "Bengaluru, India",
      user_id: 3
    },
    {
      title: "London",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date_pic_taken: "11-11-2011",
      location: "London,England",
      user_id: 3
    },
    {
      title: "Paris",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      date_pic_taken: "11-11-2011",
      location: "Paris,France",
      user_id: 1
    },
    {
      title: "Bengaluru",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80",
      date_pic_taken: "11-11-2011",
      location: "Bengaluru, India",
      user_id: 1
    },
    {
      title: "London",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date_pic_taken: "11-11-2011",
      location: "London,England",
      user_id: 1
    },
    {
      title: "Paris",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      date_pic_taken: "11-11-2011",
      location: "Paris,France",
      user_id: 2
    },
    {
      title: "Bengaluru",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80",
      date_pic_taken: "11-11-2011",
      location: "Bengaluru, India",
      user_id: 2
    },
    {
      title: "London",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
      img_link:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date_pic_taken: "11-11-2011",
      location: "London,England",
      user_id: 2
    }
  ];
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert(stories);
    });
};
