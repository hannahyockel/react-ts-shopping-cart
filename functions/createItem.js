exports = function(name, price, imgUrl){
    let collection = context.services.get("mongodb-atlas").db("reactCartDB").collection("reactCartCol");
    
    let newItem = collection.insertOne({"name": name, "price": price, "imgUrl": imgUrl})

    return newItem;
};