// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd D/MMMM/YYYY');
  var currentHour = JSON.parse(dayjs().format('H'));
  
  $('.description').each(function(){
    var descriptionTime = $(this).parent().attr('id');
    // Reloading local storage
    descriptionTime = JSON.parse(descriptionTime.split('hour-')[1]);
    console.log('current time is', descriptionTime)

    if (currentHour === descriptionTime){
      $(this).parent().addClass('present');
    }

    else if (currentHour > descriptionTime){
      $(this).parent().addClass('past');
    }

    else if (currentHour < descriptionTime){
      $(this).parent().addClass('future');
    }
   
  })

  $('#currentDay').text(currentDate);


  $(".saveBtn").click(function(){
    var time = $(this).parent().attr('id');
    var description = $(this).parent().children('textarea').val();

    localStorage.setItem(time, description);
  })

$('.time-block').each(function(){
  
})

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
