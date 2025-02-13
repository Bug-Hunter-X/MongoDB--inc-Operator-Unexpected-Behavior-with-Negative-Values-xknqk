```javascript
//Correct usage of $inc and $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $inc:{count:-1},
  $setOnInsert:{count:0}
});
```