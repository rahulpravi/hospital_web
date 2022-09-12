$("#select1").change(function() {
  if ($(this).data('options') === undefined) {
    $(this).data('options', $('#select2 option').clone());
  }
  var id = $(this).val();
  var options = $(this).data('options').filter('[value=' + id + ']');
  $('#select2').html(options);
});

function buttonFunction() {
  document.getElementById("demo").innerHTML = "Booking Success";
}