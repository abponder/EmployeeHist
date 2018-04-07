// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#nameInput").val().trim();                  //nameInput
  role = $("#roleInput").val().trim();                  //roleInput
  startDate = $("#startDateInput").val().trim();       //startDateInput
  monthlyRate = $("#monthlyRateInput").val().trim();   //monthlyRateInput

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});




