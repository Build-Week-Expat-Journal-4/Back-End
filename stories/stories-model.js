const db = require("../database/dbConfig.js");

module.exports = {
    find,
    findById,
    findByUserId,
    add,
    update,
    remove,
    
}

//get all stories
function find(){
    return db('stories as s')
        .join('users as u','s.user_id','u.id')
        .select('s.id','s.title','s.story','s.img-link','s.date-pic-taken','s.location','u.first_name','u.last_name','s.created_at','s.updated_at')
}
//get a single stories
function findById(id){
    return db('stories as s')
        .join('users as u','s.user_id','u.id')
        .where('s.id',Number(id))
        .select('s.id','s.title','s.story','s.img-link','s.date-pic-taken','s.location','u.first_name','u.last_name','s.created_at','s.updated_at')
}

//get a all stories for a specific user

function findByUserId(userId){
    return db('stories as s')
        .join('users as u','s.user_id','u.id')
        .where('s.user_id',Number(userId))
        .select('s.id','s.title','s.story','s.img-link','s.date-pic-taken','s.location','u.first_name','u.last_name','s.created_at','s.updated_at')
}

//post - Create  a story

function add(story){
    return db(stories).insert(story,'id')
        .then(ids => {
            const [id] = ids;
            findById(id)
        } )

}

//Update a story
function update(changes,id){
    return db('stories')
            .update(changes)
            .where({id}).then(count => findById(id))
    

}
//Delete a story

function remove(id){
    return db(stories).where({id}).del().then(count => {deleted: id})
}



