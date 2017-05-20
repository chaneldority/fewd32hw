jQuery(document).ready(function(){

	// Change the background color
	jQuery(".box").css("background-color", "purple");
	
	//Add some text to the boxes
	function addText () {
		jQuery(".box").html("Here is some text");
	}

		jQuery(".box").click(addText);

	//Clicking on either box changes that PARTICULAR box's height and width each to 500px
	function changeSize() {
		jQuery(this).css({"hieght": "500px", "width": "500px"});

	}
		jQuery(".box").click(changeSize);	


});



