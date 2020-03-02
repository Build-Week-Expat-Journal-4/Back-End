# Back-End


## End points for Stories.
**Pre-requisite**
Need to pass the `token` value as the `Authorization` variable in the header
### Stories - GET
**GET api/stories/**
- Provides a list of all stories from all users.
- *Sample response:*
```
[
    {
        "id": 1,
        "title": "my visit to Bengaluru",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link": "https://unsplash.com/photos/B4qmgZdSQp0",
        "date-pic-taken": "12-01-2019",
        "location": "Bengaluru, India",
        "first_name": "test-first",
        "last_name": "test_last",
        "created_at": "2020-03-01 19:09:03",
        "updated_at": "2020-03-01 19:09:03"
    },
    {
        "id": 2,
        "title": "New York, New York, New York",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link": "https://unsplash.com/photos/Sw57gA_fojQ",
        "date-pic-taken": "01-01-2019",
        "location": "New York, United States",
        "first_name": "test-first",
        "last_name": "test_last",
        "created_at": "2020-03-01 19:13:41",
        "updated_at": "2020-03-01 19:13:41"
    }
]
```

**GET api/stories/:id**

- :id of the story
- Provides of a specific story
- *Sample response:*
```
{
    "id": 1,
    "title": "my visit to Bengaluru",
    "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
    "img-link": "https://unsplash.com/photos/B4qmgZdSQp0",
    "date-pic-taken": "12-01-2019",
    "location": "Bengaluru, India",
    "first_name": "test-first",
    "last_name": "test_last",
    "created_at": "2020-03-01 19:09:03",
    "updated_at": "2020-03-01 19:09:03"
}
```

**GET api/users/:id/stories**
- Provides a list of all stories from all users.
- :id is the id of the user.
- *Sample response:*
```
[
    {
        "id": 1,
        "title": "my visit to Bengaluru",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link": "https://unsplash.com/photos/B4qmgZdSQp0",
        "date-pic-taken": "12-01-2019",
        "location": "Bengaluru, India",
        "first_name": "test-first",
        "last_name": "test_last",
        "created_at": "2020-03-01 19:09:03",
        "updated_at": "2020-03-01 19:09:03"
    },
    {
        "id": 2,
        "title": "New York, New York, New York",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link": "https://unsplash.com/photos/Sw57gA_fojQ",
        "date-pic-taken": "01-01-2019",
        "location": "New York, United States",
        "first_name": "test-first",
        "last_name": "test_last",
        "created_at": "2020-03-01 19:13:41",
        "updated_at": "2020-03-01 19:13:41"
    }
]
```

### Stories - Update
**POST api/users/:id/stories/
- :id - id of the user posting the story
data that needs to be passed.
- Data to be passed ( example)
```
    {
        "title": "Paris",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link":"https://unsplash.com/photos/Sw57gA_fojQ",
        "date-pic-taken":"11-11-2011",
        "location":"Paris,France",
        "user_id": 3,
       
    }
```

- *Sample response:*
```
{
    "id": 5,
    "title": "Paris",
    "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
    "img-link": "https://unsplash.com/photos/Sw57gA_fojQ",
    "date-pic-taken": "01-03-2017",
    "location": "Paris,France",
    "first_name": "test-first",
    "last_name": "test_last",
    "created_at": "2020-03-02 04:29:05",
    "updated_at": "2020-03-02 04:29:05"
}
```


### Stories-Delete
**DELETE api/stories/:id**
- :id - id of the story
- Deletes a story witd id = :id
- *Sample response:*
```
{
    removed: id //where id is the id of
}
```

### Stories - Update
**PUT api/stories/:id**
- :id - id of the story
- Updates a specific story..
data that needs to be passed.
- Data to be passed ( example)
```
    {
        "title": "Paris",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "img-link":"https://unsplash.com/photos/Sw57gA_fojQ",
        "date-pic-taken":"11-11-2011",
        "location":"Paris,France",
        "user_id": 3,
        "updated_at":"02-10-2020"
    }
```

- *Sample response:*
```
{
    "id": 5,
    "title": "Paris",
    "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Nisi lacus sed viverra tellus in hac habitasse platea dictumst",
    "img-link": "https://unsplash.com/photos/Sw57gA_fojQ",
    "date-pic-taken": "01-03-2017",
    "location": "Paris,France",
    "first_name": "test-first",
    "last_name": "test_last",
    "created_at": "2020-03-02 04:29:05",
    "updated_at": "2020-03-02 04:29:05"
}
```