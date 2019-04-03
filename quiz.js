var score=0;//set score to 0
var total=5;//Total number of questions
var point=1;//points per correct answer
var highest=total*point;

//Initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','b');
	sessionStorage.setItem('a5','b');
}







$(document).ready(function(){
	//Hide all questions
	$('.questionform').hide();

	//show first question
	$('#q1').show();

	$('#q1 #submit').click(function(){
		$('.questionform').hide();
		$('#q2').fadeIn(300);
		return false;

	});

	$('#q2 #submit').click(function(){
		$('.questionform').hide();
		$('#q3').fadeIn(300);
		return false;

	});


	$('#q3 #submit').click(function(){
		$('.questionform').hide();
		$('#q4').fadeIn(300);
		return false;

	});


	$('#q4 #submit').click(function(){
		$('.questionform').hide();
		$('#result').fadeIn(300);
		
		

	});

});
	
