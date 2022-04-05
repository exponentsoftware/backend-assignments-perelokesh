const sequelize = require('../config/sql');
const Sequelize = require('sequelize');

const Comments = sequelize.define('comments',
{ 
    text:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    created_at:{ 
        type: Sequelize.DATE
    },
    updated_at:{ 
        type: Sequelize.DATE
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    
}
);
Comments.sync();

module.exports = Comments;