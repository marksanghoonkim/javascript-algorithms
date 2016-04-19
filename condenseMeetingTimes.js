/*
Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.

var example = [
  {startTime: 7, endTime: 9},
  {startTime: 1, endTime: 4},
  {startTime: 3, endTime: 5},
  {startTime: 2, endTime: 6},
]

result: [
  {startTime: 1, endTime: 6},
  {startTime: 7, endTime: 9}
]

*/

function condenseMeetingTimes(meetings) {
  // sort meetings by starting time
  var sortedMeetings = meetings.sort(function(a, b) {
    return a.startTime - b.startTime;
  });

  var mergedMeetings = [sortedMeetings[0]];
  
  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentMeeting = sortedMeetings[i];
    var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // if the current and last meetings overlap, use the latest end time
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

    // add the current meeting since it doesn't overlap
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}