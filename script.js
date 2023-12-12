$(function () {
    $(".saveBtn").on("click", function () {
      
      var timeBlockId = $(this).closest(".time-block").attr("id");
      var userInput = $(this).siblings("textarea").val();
      localStorage.setItem(timeBlockId, userInput);
    });
  
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var currentHour = dayjs().hour();
  
      if (parseInt(timeBlockId.split("-")[1]) < currentHour) {
        $(this).addClass("past");
      } else if (parseInt(timeBlockId.split("-")[1]) === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedUserInput = localStorage.getItem(timeBlockId);
      $(this).find("textarea").val(savedUserInput);
    });
  
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });