$(document).ready(function() {

	// replace global search placeholder
	
	var search = $('.search #search-form');
	var searchValue = $('.search #search-form').value;

	if(searchValue == null) {
		search.addClass('placeholder');
		search.val('Search WT Records');
	}

	search.click(function() {
		if (this.value == 'Search WT Records') {
			this.value = '';
			$(this).removeClass('placeholder');
		}
	});

	search.blur(function() {
		if (this.value == '') {
			this.value = 'Search WT Records';
			$(this).addClass('placeholder');
		}
	});
});
