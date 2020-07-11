/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 75% of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 25%.
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
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, val) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage.get(index);  // declare bucket
    if (!bucket) {  // if no bucket at current index
      bucket = []; // make a bucket
    }
    var found = false;  //keep track of whether key exist already
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        found = true;
        tuple[1] = val;
        break;
      }
    }
    if (!found) {
      bucket.push(key, val);
      size++;
      if (size > storageLimit * 0.75) {
        storageLimit *= 2;
      }
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage.get(index);
      // if no bucket at index return null
      if (!bucket) {return undefined;}
      // loop through bucket at the indxex
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        // return index 1 where val is in the tuple
        if (tuple[0] === key) {
          return tuple[1];
          break;
        }
      }
      return undefined;
  };

  result.remove = function(key) {
    // decrease storage size by 1
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage.get(index);
      if (!bucket) {return undefined;}
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        bucket = bucket.splice(i, 1);
        size--;
        if (size < storageLimit * 0.25) {
          storageLimit = storageLimit / 2;
        }
      }
    }
  };

  // result.resize = function(newStorageLimit) {
  //   // have to reinsertt everything again so call insert function
  //   // save old strage to iterate over
  //   var oldStorage = storage;
  //   storageLimit = 0;
  //   size = 0
  // }

};
