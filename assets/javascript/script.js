console.log("this is just a test");
var todayDate = moment(); /* created a var to hold present moment */
/* slecting id of current */
var storage = localStorage.getItem("savedEvent");

$("#currentDay").text(todayDate.format("MMM Do, YYYY"));

var saveButtonEl = $(".saveBtn");

function storeEvent(){
/* Local storage code to be inserted here. */
};

saveButtonEl.click(storeEvent);







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
