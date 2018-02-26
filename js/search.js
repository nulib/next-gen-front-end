// library search
$(function() {
  var $libSearchDropdown = $('#library-search-dropdown');

  // desktop: toggle search menu
  $('#library-search-button').click(function(e) {
    $libSearchDropdown.slideToggle('medium');
    e.preventDefault();
  });

  // Mobile search is located in /js/scripts.js

});
