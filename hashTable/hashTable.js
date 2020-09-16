/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    // TODO: implement `insert()`
    // 9a4fd58fnh573u56h - an exmaple of a hash
    // find which bucket to store info
    var index = getIndexBelowMaxForKey(str, storageLimit);
    // store it in storage
    // if nothing there, just put empty array for now (main purpose!)
    // if there's something then dont touch it
    storage[index] = storage[index] || [];
    // assign the bucket to pairs variable
    var pairs = storage[index];
    var pair;
    // go thru bucket
    for (var i = 0; i < pairs.length; i++) {
      // pair is an object
      pair = pairs[i];
      // see if the key matches
      if (pair[0] === key) {
        // update the second element of array.
        pair[1] = value;
        return;
      }
    }
    // if key not found, push in a new pair
    pairs.push([key, value]);
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        pairs.splice(i, 1);
        return value;
      }
    }
    return result;
  };

  return result;
};
