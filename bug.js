```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{count:-1}});
```