const Tags = require('../model/tags');

module.exports.addTag = (req, res) => {
    // validate request
    if(!re.body.text){
        res.status(400).send({ message: "tags can be empty" });
        return;
    }
    // create a comment 
    const tag = {
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
        category: req.body.category,
    };
    // save the comment
    Tags.create(tag)
    .then( data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: 
            err.message || "Error creating tag"
        });
    });
};
module.exports.updateTag = (req, res) => {
    const id = req.params.id;
    Tags.update(req.body, { 
        where: { id: id}
    })
    .then( text =>{
     if( text == text ){
         res.send({ 
             message: "tag updated successfully"
        
        });
     }else{
         res.send({ 
             message: "Error updating tags"
         });
     }
    })
    .catch(err => {
        res.status(500).send({
             message: "Error updating tags with id =" + id
        });
    });

};
module.exports.deleteTag = (req, res) => {
    const id = req.params.id;
    Tags.destroy({ 
        where: { id: id}
    })
    .then( text =>{
     if( text == text ){
         res.send({ 
             message: "Tag  delete successfully"
        
        });
     }else{
         res.send({ 
             message: "Error deleting tag"
         });
     }
    })
    .catch(err => {
        res.status(500).send({
             message: "Error deleting tags with id =" + id
        });
    });

};