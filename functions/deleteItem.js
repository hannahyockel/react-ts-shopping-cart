exports = function(id){
    let collection = context.services.get("mongodb-atlas").db("reactCartDB").collection("reactCartCol");
    
    let deleteItem = collection.deleteOne({_id: BSON.ObjectId(id)})
    
    return deleteItem;
};