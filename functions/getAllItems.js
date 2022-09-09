exports = function(arg){
    let collection = context.services.get("mongodb-atlas").db("reactCartDB").collection("reactCartCol");

    return collection.find({});
};