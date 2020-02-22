var Sequelize = require('sequelize');
var Model = Sequelize.Model;
var sequelize = new Sequelize("company","postgres","123456",{
    host : "localhost",
    dialect : "postgres"
})
sequelize.authenticate().then(function(resStt){
console.log("Connection established")
})
.catch(function(err){
    console.log('The error is ',err);
})

//start
var UsersModel = require('./models/users.model');
var PostsModel = require('./models/posts.model');
var CommentsModel = require('./models/comments.model');

var Users = UsersModel(Sequelize,sequelize,Model);
var Posts = PostsModel(Sequelize,sequelize,Model);
var Comments = CommentsModel(Sequelize,sequelize,Model);

//relation start
Users.hasMany(Posts);
Posts.belongsTo(Users,{foreignKey : "user_id"});

Posts.hasMany(Comments)
Comments.belongsTo(Posts,{foreignKey : "post_id"})

//relation ends


sequelize.sync({force : true}).then(function(){
console.log("all tables created !")
})
.catch(function(err){
    console.log('The error is ',err);
})