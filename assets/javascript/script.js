$(document).ready(function () {
  var saveButtonEl = $(".saveBtn");

saveButtonEl.on("click",function(){
  var value = saveButtonEl.siblings(".description").val()
  console.log(value);
  var time = $(this).parent().attr("class");
  console.log(time);
})

console.log("this is just a test");
var todayDate = moment(); /* created a var to hold present moment */
/* slecting id of current */
var storage = localStorage.getItem("savedEvent");

$("#currentDay").text(todayDate.format("MMM Do, YYYY"));



/* function storeEvent(event){
 Local storage code to be inserted here. 
console.log(event.target.id);
};

saveButtonEl.click(storeEvent); */





})

/* var container = $(".container")[0];
console.log(container);  */

/* $(document).ready(function () {
  for (var hour = 9; hour <= 17; hour++) {
    $(`.container`).append(
      `<section>
    <span class="wrapper">
    <div>
     ${hour}:00
    </div>

    <div>
      <input type="text" class="form-input" name="event-name" placeholder="Enter event name" />
    </div>

    <div class="saveBtn"> 
    
      <button id="saveButton">Click me</button>

    </div>
  </span>
  </section>`
    );
  }

  var saveButton = $("#saveButton");

  function saveEvent() {
  }
  saveButton.click(saveEvent);
}); */
