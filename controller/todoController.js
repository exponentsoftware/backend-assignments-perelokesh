const db = require('../model');
const TODO =db.todo;

exports.newTODO = (req, res) => {
    const newTODO = new TODO({
        username: req.body.username,
        title: req.body.title;
        status: "Active",
        category: req.body.category
    });
    newTODO.save((error,data){
        if (error) {
            res.status(200).send({message:"error found", error: error});

        }
        else{
            res.status(200).send({message:"TODO created."});

        }
    });

};

exports.getTODO
