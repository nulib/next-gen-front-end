$(document).ready(function() {

  // Initialize timeline
  $('#item-timeline').timeliny({
    boundaries: 0
  });

  // Click on item details more buttons
  $('#item-more-details').on('click', function() {
    $('#tab1').trigger('click');
    $('html, body').animate({
        scrollTop: $("#tab-panel1").offset().top - 60
    }, 1000);
  });
  $('#item-cite').on('click', function() {
    $('#tab2').trigger('click');
    $('html, body').animate({
        scrollTop: $("#tab-panel2").offset().top - 60
    }, 1000);
  });

});
