// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  age = $("#age-input").val().trim();
  comment = $("#comment-input").val().trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    email: email,
    age: age,
    comment: comment,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});
