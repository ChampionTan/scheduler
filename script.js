// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function timeColor() {
  var saveButton = $('.saveBtn');
  var currentHour = dayjs().hour();

  $('.description').each(function() {
   
    
    var classTime = parseInt($(this).parent().attr('id').replace('hour-',""));
    if (classTime < currentHour){
      $(this).addClass('past');
    }else if(classTime == currentHour){
      $(this).addClass('present');
    }else{
      $(this).addClass('future');
    }

    var currDate = $('#currentDay');
      currDate.text(new Date());
    })
  

  $(saveButton).click(function() {
    var textInput = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(textInput, time);
  })
  
})
