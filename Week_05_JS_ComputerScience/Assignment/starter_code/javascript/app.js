//wait for the DOM elements to load before executing
jQuery(document).ready(function() {
	//prevent the submit button from refreshing the page
  jQuery('#submit-btn').click(function(){
    event.preventDefault();
	    //get the value of the #city-type input and correct for capitalization
	    var city = jQuery('#city-type').val();
	    jQuery('#city-type').val('');
	    city = city.toLowerCase().trim();
	    // if user types New York City, New York, NYC then change the CSS class to 'nyc'
	    if (city == 'new york city' || city == 'new york' || city == 'nyc') {
  			jQuery('body').attr('class','nyc');
  		}
  		// if user types San Francisco, San Fran, Bay Area, SF then change the Css class to 'sf'
 		else if (city == 'san francisco' || city== 'san fran' || city == 'bay area' || city == 'sf') {
			jQuery('body').attr('class','sf');
		}
		// if user types LA, Los Angeles, LAX then change the CSS class to 'la'
		else if (city == 'la' || city == 'lax' || city == 'los angeles') {
			jQuery('body').attr('class','la');
		}
		//if user types Austin, ATX then change CSS class to 'austin'
		else if (city == 'austin' || city == 'atx') {
			jQuery('body').attr('class','austin');
		}
		// if user types Sydney or Syd then change the CSS class to 'sydney'
		else if (city == 'sydney' || city == 'syd')
			jQuery('body').attr('class','syd');
		}
		else if {
			jQuery('body').attr('citipix_skyline');
		}
	});
});