
jQuery(document).ready(function(){

// Compare function
function compareValues () { 

	// Get values of inputs
	var a = jQuery("#a").val();
	var b = jQuery("#b").val();
	var displayValue;

	// Turn inputs into numbers
	a = parseFloat(a) ;
	b = parseFloat(b) ;
		

	// If inputs ARE numbers
		
		// If A > B, display ">"
		if(a > b) {
			displayValue =">";
		// If A < B, display "<"
		}else if (b > a){
			displayValue = "<";
		// If A = B, display "=="
		}else if (b == a){
			displayValue = "==";
		}
		else {
		// Else, display "n/a"	
			displayValue - "N/A";
		}


		

		//Else, display "n/a"

	// Put display to ouput span
	jQuery("#comparison").text(displayValue);


}

// Submit click
jQuery("#submit").click(compareValues);
});