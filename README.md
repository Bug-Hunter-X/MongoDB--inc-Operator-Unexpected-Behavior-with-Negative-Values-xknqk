# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB $inc operator when used with negative values and the absence of the target field. The issue arises when attempting to decrement a counter that does not yet exist, leading to an unexpected outcome rather than gracefully handling the case. The solution introduces a check for the existence of the field before applying the increment operation.

## Problem
The `updateOne` method with `$inc` to decrement a counter may fail if the field doesn't already exist. This example shows how incorrect use can create problems:

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{count:-1}});
```

## Solution
The solution uses the `$setOnInsert` operator along with `$inc` to ensure that the field is created with a default value if it's missing and then increments accordingly. This way, the operation is always successful, and the data consistency remains intact. This also avoids the creation of unexpected errors.

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $inc:{count:-1},
  $setOnInsert:{count:0}
});
```