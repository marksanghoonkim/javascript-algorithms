var Range = function(start, end, step) {
  // check if start is undefined
  if (!start) {
    return null;
  }
  
  this.start = start;
  this.end = end;
  this.step = step;
};

Range.prototype.size = function () {
  var start = this.start;
  var step = this.step;
  var end = this.end;

  // if end and step are undefined
  if (end === undefined && step === undefined) {
    return 1;
  }
  
  // if start < end, means it will be ascending
  if (start < end) {
    if (step) {
      // need to include the start point in the size and round down
      return Math.floor((end - start + step) / step);    
    } else {
      return end - start + 1;
    }
  }
  if (start > end) {
    if (step) {
      return Math.floor((start - end + step) / step);    
    } else {
      return start - this.end + 1;
    }
  }
};

Range.prototype.each = function (callback) {
  var start = this.start;
  var step = this.step;
  var end = this.end;

  if (end === undefined && step === undefined) {
    callback(start);
  }
  
  if (start < end) {
    if (step) {
      for (var i=start; i<=end; i+=step) {
        callback(i);
      }
    } else {
      for (var i=start; i<=end; i++) {
        callback(i);
      }
    }
  }
  if (start > end) {
    if (step) {
      for (var i=start; i>=end; i+=step) {
        callback(i);
      }  
    } else {
      for (var i=start; i>=end; i--) {
        callback(i);
      }
    }
  }
};

Range.prototype.includes = function (val) {
  var start = this.start;
  var step = this.step;
  var end = this.end;

  if (end === undefined && step === undefined) {
    return val === 1;
  }
  
  if (start < end) {
    if (step) {
      return (val <= end && val >= start) && (val % step === start % step);
    } else {
      return val <= end && val >= start;
    }
  }
  if (start > end) {
    if (step) {
      return val >= end && val <= start && (val % step === start % step);
    } else {
      return val >= end && val <= start;
    }
  }
};
