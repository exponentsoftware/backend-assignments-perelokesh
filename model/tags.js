const sequelize = require('../config/sql');
const Sequelize = require('sequelize');

const Tags = sequelize.define('tags',
{ 
    created_at:{ 
        type: Sequelize.DATE
    },
    updated_at:{ 
        type: Sequelize.DATE
    },
    
    category:{
        type: Sequelize.STRING,
        enum: ["active", "completed","in-progress","deleted"]
    }  
    
}
);
Tags.sync();

module.exports = Tags;
