exports = function(id, name, price, imgUrl){
    let collection = context.services.get("mongodb-atlas").db("reactCartDB").collection("reactCartCol");
    let updated = collection.findOneAndUpdate(
        {_id: BSON.ObjectId(id)},
        { $set: { "name": name, "price": price, "imgUrl": imgUrl } },
        { returnNewDocument: true }
      )
      
    return updated;
};