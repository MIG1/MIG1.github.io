function askQuestions() {

	var firstName = prompt('what is your first name');
	var lastName = prompt('what is your lastName');

	var fullName = firstName + '' + lastName;

	$('h2').text('hello ' + fullName);

	var age = prompt('how old are you');
	age = parseInt(age);

	if (age >=18) {
		console.log('welcome, adult!');
	}else if (age >= 13) {
		console.log('come back in a few years');
	} else {
		console.log('go away child!');
	}


	/*
	if the users first name is 'General' and  and the last name is not 'Assembly' then greet the general using console.log.
	*/

	// if (firstName


}

// when the page has loaded

$(function() {

	//hide all the content
	$('h3').next().hide();

	$('img').on('click', askQuestions);


	// when the user clicks an h3
	$('h3').on('click', function() {


	// hide the next element and toggle it
	$(this).next().slideToggle(5000);

	});



});