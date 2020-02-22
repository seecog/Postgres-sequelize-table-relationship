module.exports = function(Sequelize,sequelize,Model){

class Comments extends Model{

}

return Comments.init({
id : {
    type : Sequelize.BIGINT,
    primaryKey : true,
    allowNull : false
},
post_id : {
    type : Sequelize.BIGINT,
    allowNull : false
},
content : {
    type : Sequelize.TEXT,
    required : true
},
commenter_username : {
    type : Sequelize.STRING,
    required : true
},
commenter_email : {
    type : Sequelize.STRING,
    required : true
},
status : {
    type : Sequelize.ENUM,
    values : ["approved","rejected","in review"]
},
created_at : {
    type : Sequelize.DATE,
    allowNull : false
},
updated_at : {
    type : Sequelize.DATE
},
deleted_at : {
    type : Sequelize.DATE
}
},{
    sequelize,
    modelName : "comments"
})
}