const Comments = require('../model/comment');

module.exports.addComment = (req, res) => {
    // validate request
    if(!re.body.text){
        res.status(400).send({ message: "cooment can be empty" });
        return;
    }
    // create a comment 
    const comment = {
        text: req.body.text,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
    };
    // save the comment
    Comments.create(comment)
    .then( data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: 
            err.message || "Error creating"
        });
    });
};
module.exports.updateComment = (req, res) => {
    const id = req.params.id;
    Comments.update(req.body, { 
        where: { id: id}
    })
    .then( text =>{
     if( text == text ){
         res.send({ 
             message: "Comment updated successfully"
        
        });
     }else{
         res.send({ 
             message: "Error updating"
         });
     }
    })
    .catch(err => {
        res.status(500).send({
             message: "Error updating comments with id =" + id
        });
    });

};
module.exports.deleteComment = (req, res) => {
    const id = req.params.id;
    Comments.destroy({ 
        where: { id: id}
    })
    .then( text =>{
     if( text == text ){
         res.send({ 
             message: "Comment  delete successfully"
        
        });
     }else{
         res.send({ 
             message: "Error deleting"
         });
     }
    })
    .catch(err => {
        res.status(500).send({
             message: "Error deleting comments with id =" + id
        });
    });

};
module.exports.findComment = (req, res) =>{
    const id = req.params.id;
    Comment.findById(id)
    .then(data => {
        if(data){
            res.send(data);
        }else{
            res.status(404).send({
                message: `Comment not found with id= ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error deleting comments with id =" + id
        });
    });
};