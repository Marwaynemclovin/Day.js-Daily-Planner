// Current Date Displayer
  var currentDate = dayjs().format('dddd D/MMMM/YYYY');
  var currentHour = JSON.parse(dayjs().format('H'));
  $('#currentDay').text(currentDate);
  
  // Main code for "past", "present", and "future" to be chhanged.
  $('.description').each(function(){
    var descriptionTime = $(this).parent().attr('id');
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

// Save button
  $(".saveBtn").click(function(){
    var time = $(this).parent().attr('id');
    var description = $(this).parent().children('textarea').val();

    localStorage.setItem(time, description);
  })

  // Keeping stored information loaded
  $(document).ready(function() {
    $('.description').each(function() {
      var time = $(this).parent().attr('id');
      var description = localStorage.getItem(time);
      $(this).text(description);
    });
  });
