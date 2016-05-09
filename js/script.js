// script.js
// contact card assignment

// person Class
var contacts = []; 

function person () {
	this.first = "";
	this.last = "";
	this.description = "";
	this.showFlag = 0;

	this.anyEmpty = function () {
		if (this.first == "") {
			return true;
		}
		else if	(this.last == "") {
			return true;
		}
		else if (this.description == "") {
			return true;
		}
		else {
			return false;
		}
	}

	this.myname = function () {
		return this.first + " " + this.last;
	}
}

// Add User to person object

var addUser = function () {
	var person2 = new person();
	person2.first = $('#firstnameIn').val();
	person2.last = $('#lastnameIn').val();
	person2.description = $('#descriptionIn').val();
	return person2;
}

// Reset form input

var clearForm = function () {
	$('#firstnameIn').val("");
	$('#lastnameIn').val("");
	$('#descriptionIn').val("");
}

// Create HTML for card and add to page.

var addPerson2Page = function (index3) {
	var name1 = contacts[index3].myname();
	var html1 = '<div class="ContactDIV" alt-data="' + index3 + '">';
	html1 += '<button class="closeBtn">x</button>';
	html1 += '<h3>' + name1 + "</h3><h5>Click For description!</h5></div>";
	$('.DisplaySide').append(html1);
	clearForm();
}

// Future Implementation
var sortArray = function () {}



// Main Body

$(document).ready(function () {
	

	$('form').submit(function () {
		return false;
	})

	$('#AddBtn').click(function (){
		var person1 = new person();
		person1 = addUser();
		var ispersonempty = person1.anyEmpty();
		if (ispersonempty == false) {
			
			contacts.push(person1);
			addPerson2Page(contacts.length - 1);
			$('.errorMSG').hide();
		}
		else {
			console.log("person empty!")
			$('.errorMSG').show();
		}


	})
	$('#ClrBtn').click(function (){
		clearForm();
	})
	$('#DltBtn').click(function (){
		console.log("Delete User");
	})
	$('#SrtDBBtn').click(function (){
		console.log("Sort User DB");
	})
	$('#RstDBBtn').click(function (){
		console.log("Reset User DB");
		$('.ContactDIV').remove();
		contacts = [];
	})


	$(document).on("click", ".ContactDIV", function (){
		var index4 = $(this).attr("alt-data");
		var showFlag1 = contacts[index4].showFlag;
		console.log("clicked " + index4 + "    showFlag" + showFlag1);
		if (showFlag1 === 0) {
			var description1 = contacts[index4].description;
			var html2 = '<button class="closeBtn">x</button>' + "<h4>" + description1 + "</h4><h5>Click to go back.</h5>";
			$(this).html(html2);
			contacts[index4].showFlag = 1;
		}
		else if (showFlag1 === 1) {
			var name1 = contacts[index4].myname();
			var html1 = '<button class="closeBtn">x</button>' + "<h3>" + name1 + "</h3><h5>Click For description!</h5>";
			$(this).html(html1);
			contacts[index4].showFlag = 0;
		}
	})

	$(document).on("click", ".closeBtn", function(event) {
		event.stopPropagation();
		$(this).parent('.ContactDIV').hide();
	})

});