console.log("this is just a test");
var todayDate = moment(); /* created a var to hold present moment */
/* slecting id of current */
$("#currentDay").text(todayDate.format("MMM Do, YYYY"));
