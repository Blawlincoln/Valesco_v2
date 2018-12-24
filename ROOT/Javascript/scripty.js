window.onload = function(){

if (localStorage && localStorage.getItem('fontsize')){
	var stringy = localStorage.getItem('fontsize');
	console.log(stringy);
	v = parseInt(stringy,10);
	$("#Bio").css('font-size', v + 'px')
	$('span').html(v);
}


console.log( "ready!" );

input = document.getElementById("sliders");
input.addEventListener("change",sizechange);
}
var input;
var size ;


var yourNavigation = $("#Headbar");
yourHeader = $('.header').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > 210) {
    yourNavigation.addClass("sticky");
  } else {
    yourNavigation.removeClass("sticky");
  }
});


	





	var cAudio = new Audio('Assets/Cloud 9.mp3');
    var sAudio = new Audio('Assets/Stay With Me.mp3'); 
    var aAudio = new Audio('Assets/All I Need.mp3');

     function myAudioFunction(songc) {

     	var sizebig = 30;
     	var imgc = document.getElementById('cloudp'); 
		var cwidth = imgc.clientWidth;
		var cheight = imgc.clientHeight;

		var imga = document.getElementById('allp'); 
		var awidth = imga.clientWidth;
		var aheight = imga.clientHeight;

		var imgs= document.getElementById('stayp'); 
		var swidth = imgs.clientWidth;
		var sheight = imgs.clientHeight;


         if(songc == 'c') {
         	console.log("Cloud loaded");
         	 if (sAudio.paused == false) {
            	sAudio.pause();
            	
            	swidth = swidth - sizebig;
            	sheight = sheight - sizebig;
            	$("#stayp").css('height', swidth + 'px')
            	$("#stayp").css('width', swidth + 'px')
        		}
        	if (aAudio.paused == false) {
            	aAudio.pause();

            	awidth = awidth - sizebig;
            	aheight = aheight -sizebig;
            	$("#allp").css('height', awidth + 'px')
            	$("#allp").css('width', awidth + 'px')            	
        		}
             
             if (cAudio.paused == false) {
            	cAudio.pause();

            	cwidth = cwidth - sizebig;
            	cheight = cheight -sizebig;
            	$("#cloudp").css('height', cwidth + 'px')
            	$("#cloudp").css('width', cwidth + 'px')            	
        		}

        	else {
            	cAudio.play();

            	cwidth = cwidth + sizebig;
            	cheight = cheight +	sizebig;
            	$("#cloudp").css('height', cwidth + 'px')
            	$("#cloudp").css('width', cwidth + 'px')            	
        		}

         	} 
         	else if(songc == 's') {
         		if (cAudio.paused == false) {
	            	cAudio.pause();
	            		
            		cwidth = cwidth - sizebig;
            		cheight = cheight -sizebig;
            		$("#cloudp").css('height', cwidth + 'px')
            		$("#cloudp").css('width', cwidth + 'px')
        		}
        		if (aAudio.paused == false) {
            		aAudio.pause();

            		awidth = awidth - sizebig;
            		aheight = aheight -sizebig;
            		$("#allp").css('height', awidth + 'px')
            		$("#allp").css('width', awidth + 'px')            	
        		}
             
	             if (sAudio.paused == false) {
	            	sAudio.pause();

	            	swidth = swidth - sizebig;
	            	sheight = sheight - sizebig;
	            	$("#stayp").css('height', swidth + 'px')
	            	$("#stayp").css('width', swidth + 'px')            	
	        		}
        	 	else {
            		sAudio.play();

            		swidth = swidth + sizebig;
            		sheight = sheight + sizebig;
            		$("#stayp").css('height', swidth + 'px')
            		$("#stayp").css('width', swidth + 'px')
             		}
             	}	
	        	 else if (songc =='a'){
	        	 if (cAudio.paused == false) {
	            	cAudio.pause();
	            		
            		cwidth = cwidth - sizebig;
            		cheight = cheight -sizebig;
            		$("#cloudp").css('height', cwidth + 'px')
            		$("#cloudp").css('width', cwidth + 'px')
        		}
        		if (sAudio.paused == false) {
            		sAudio.pause();

            		swidth = swidth - sizebig;
            		sheight = sheight -sizebig;
            		$("#stayp").css('height', swidth + 'px')
            		$("#stayp").css('width', swidth + 'px')            	
        		}
             
	             if (aAudio.paused == false) {
	            	aAudio.pause();

	            	awidth = awidth - sizebig;
	            	aheight = aheight -sizebig;
	            	$("#allp").css('height', awidth + 'px')
	            	$("#allp").css('width', awidth + 'px')            	
	        		}
        	 	else {
            		aAudio.play();

            		awidth = awidth + sizebig;
            		aheight = aheight + sizebig;
            		$("#allp").css('height', awidth + 'px')
            		$("#allp").css('width', awidth + 'px')
             		}
         		}
     }


function sizechange(){
	 
    var v = $(this).val();
    
    $("#Bio").css('font-size', v + 'px')
    $('span').html(v);
    if (typeof(Storage) !== "undefined") {
  		localStorage.setItem("fontsize", v);
		} 
	else {
  		console.log("Incompatible local storage")	
		}
    
}




