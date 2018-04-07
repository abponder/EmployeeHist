$(document).ready(function(){
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

 // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
 database.ref().orderByChild("dateAdded").limitToLast(20).on("child_added", function(snapshot) {

  
    //Create a variable for snapshot.val()
    var emp = snapshot.val();

    //create table's <tobody>, adding class to <tobody>, constructing the table's <tr> and <td>
    var tabod = $('<tbody>');
    tabod.addClass('employeeTable');
    tabod.append($("<tr>").html("<td>" + emp.name + "</td><td>" + emp.role + "</td><td>" + emp.startDate + "</td><td>" + emp.monthsWorked + "</td><td>" + emp.monthlyRate + "</td><td>" + emp.totalBilled + "</td></tr>"));

    //append the <tbody> to the table
    $('.table').append(tabod);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
///////// END OF DOCUMENT /////////////////
});