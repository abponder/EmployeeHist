$(document).ready(function(){
  //  var employeeArray=[], name, role, startDate, monthlyRate, monthsWorked, totalBilled, dateAdded;

///////////////////////////////////////////////////////////////////////////

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtTemp8qRtH3nHP_BuI-mh1VKQEkJxbsQc",
    authDomain: "project1-9f0e7.firebaseapp.com",
    databaseURL: "https://project1-9f0e7.firebaseio.com",
    projectId: "project1-9f0e7",
    storageBucket: "project1-9f0e7.appspot.com",
    messagingSenderId: "754382216001"
  };
  firebase.initializeApp(config);


  // Create a variable to reference the database.
  var database = firebase.database();

  $(document).on("click", ".submitButton", function(){
        event.preventDefault();
        //read the fields
        var name = $('#nameInput').val().trim();
        var role = $('#roleInput').val().trim();
        var startDate = $('#startDateInput').val().trim();
        var monthlyRate = $('#monthlyRateInput').val().trim();
        //var now = new date();
        //calculate totalBilled
        var monthsWorked = 60; //now - startDate;
        var totalBilled = monthsWorked * monthlyRate;

        //submit to database
        // Code for handling the push
        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            monthsWorked: monthsWorked,
            totalBilled: totalBilled,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

      });







//////////////////////////////////////////////////////////////////////////
//*************************************************************************/

 // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
 database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    // storing the snapshot.val() in a variable for convenience
//    database.ref().on("value", function(snapshot) {
    var emp = snapshot.val();

//console.log("the Emp: " + emp.val());

    // Console.loging the last user's data
    console.log("Name: " + emp.name);
    console.log("Role: " + emp.role);
    console.log("Salary: " + emp.monthlyRate);
    console.log("totalBilled: " + emp.totalBilled);
    console.log("Did it add to DB: " + dateAdded);

    // Change the HTML to reflect
    var content = "<tr> <td>" + emp.name + "</td><td>" + emp.role + "</td><td>" + emp.startDate + "</td><td>" + emp.monthsWorked + "</td><td>" + emp.monthlyRate + "</td><td>" + "</td><td>" + totalBilled + "</td> </tr>";

console.log("var content is: " + content);

    $("#employeeTable").html(content);
    


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });







///////// END OF DOCUMENT /////////////////
});