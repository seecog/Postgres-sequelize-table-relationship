module.exports = function(Sequelize,sequelize,Model){
    class Posts extends Model{

    }
    
   return Posts.init({
    id : {
        type : Sequelize.BIGINT,
        primaryKey : true,
        allowNull : false
    },
    user_id : {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    content : {
        type : Sequelize.TEXT,
        required : true
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
        modelName : "posts"
    })
}