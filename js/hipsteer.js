// alert("is this working?")

// Aim:to smooth scroll our website depending on which
// link has been clicked on


// Add an event listener to our nav a's
// when a nav a is clicked on run this code
// find the link we've just clicked on
// select its attributes
// the attribute we want is the href
// store this in variable href
// using that variable href (that contains our changing sections
// depending on what has been clicked )
// find how far from the top of our page our section is store
// this in sectionHeight inside of our animate function
// We calculate the distance from the top that our scroll bar
// currently is using scrollTop
// and animate to the value stored in sectionHeight


// STEP 1- add click event listener to our nav a's

// $("selector").action{}

$("nav a").on("click", function(){


	// STEP 5- find the link that has been clicked 
	// store the href of the link that has been clicked
	 var href=$(this).attr("href");
	 // alert(href);

	// STEP 2- store how many pixels from the top our section is.
	// The .offset().top method allows us to retrieve the current
	// position of an element relative to the document
	var sectionHeight= $(href).offset().top;
	// console.log(sectionHeight);
	// or even nicer to look at preventing entering inspecter and looking 
	// at console we can do the following instead

	// alert(sectionHeight);
	// dont forget this will only work if we click on something inside of nav a

	// STEP 3- animate the page to that position
	// first select all of our html
	// animate allows us to create animation
	// we then use scrollTop and the position of our element stored in the 
	// variable sectionHeight to scroll to the right place 
	// over a set duration, in milliseconds

	$("body,html").animate({scrollTop:sectionHeight},1000);
	// scrollTop finds the vertical position of our scrollbar 
	// we then use the value stored in sectionHeight to give the position of our #products section
	// .animate then runs this and animates from one point to the other


	// STEP 4- stops our links jumping to the section before the scroll happens
	return false;

	


});