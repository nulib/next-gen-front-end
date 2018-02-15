// library search
$(function() {

    // opens search menu
    $("#library-search-button").click(function(e) {
        $("#library-search-dropdown").slideToggle("medium");
    	e.preventDefault();
	});

	var search_val = '';
	// bind pageshow to preserve form values on history state change (in most browsers)
	$(window).bind("pageshow", function(event) {
		init_type = $("#multi-search").val();
		search_val = $('#'+init_type).find('.searchbox').val();
		switchSearch(init_type, true);
	});

	$('#multi-search').change(function(e) {
		switchSearch($(this).val(), false);
	});

	$('.field').change(function(e) {
		var type = $('#multi-search').val();
		var search_container = $('#'+type);
		var search_field = search_container.find('.searchbox');
		switch ($(this).val()) {
			case "title":
				search_field.attr('placeholder','Ex: War and Peace');
				break;
			case "creator":
				search_field.attr('placeholder','Ex: Virginia Woolf');
				break;
			case "sub":
				search_field.attr('placeholder','Ex: Economics');
				break;
			default:
				search_field.attr('placeholder','Ex: Cleopatra');
		}
	});

	$('.searchbox').focusout(function(e) {
		search_val = $(this).val();
	});

	function switchSearch(type, init) {
		$('.multi-search-form').hide();
		var search_container = $('#'+type);
		var search_field = search_container.find('.searchbox');
		search_container.show();
		if (!init) {
			// if not first load of page, set focus to first form field
			search_container.find('select[name="field"], .searchbox').filter(':first').focus();
		}
		if (search_val != '') {
	   		// retain populated query value
			// first, clear field to ensure consistent cursor position
			search_field.val('');
			if ((type == 'worldcat') && (
					search_val.lastIndexOf('kw:', 0) === 0 ||
					search_val.lastIndexOf('ti:', 0) === 0 ||
					search_val.lastIndexOf('au:', 0) === 0 ||
					search_val.lastIndexOf('su:', 0) === 0)) {
				// if type is Worldcat and there's a prefix, remove it
				search_field.val(search_val.substring(3));
			} else if (search_val.lastIndexOf('any,contains,', 0) === 0 ||
					search_val.lastIndexOf('title,contains,', 0) === 0 ||
					search_val.lastIndexOf('creator,contains,', 0) === 0 ||
					search_val.lastIndexOf('sub,contains,', 0) === 0) {
				// if there are Primo parameters, remove them
				var first_comma = search_val.indexOf(',');
				search_field.val(search_val.substring(first_comma + 10).replace(/[,]/g, " "));
			} else {
				search_field.val(search_val);
			}
		}
	}

	$(document).trigger("pageshow"); // for IE

});
