
module.exports = function(Sequelize,sequelize,Model){
    class Users extends Model{

    }
    
   return Users.init({
    id : {
        type : Sequelize.BIGINT,
        primaryKey : true,
        allowNull : false
    },
    username : {
        type : Sequelize.STRING,
        required : true
    },
    role : {
        type : Sequelize.ENUM,
        values : ['user','admin','disabled']
    },
    created_at : {
        type : Sequelize.DATE,
        allowNull : false
    },
    updated_at : {
        type : Sequelize.DATE,
    },
    deleted_at : Sequelize.DATE
    },{
    sequelize,
    modelName : "users"
    })
    
}