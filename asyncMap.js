/*
Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.
*/

var asyncMap = function(tasks, callback){
  var results = [];
  var count = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      tasks[i](function (val) {
        results[i] = val;
        count += 1;
        if (count === tasks.length) {
          callback(results);
        }
      });
    })(i);
  }
};