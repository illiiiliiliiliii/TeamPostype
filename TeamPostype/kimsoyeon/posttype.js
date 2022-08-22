const searchbox = document.querySelector("[name=searchbox]"); 
searchbox.addEventListener("click",function(){
    this.style.backgroundColor="white";
});

searchbox.addEventListener("mouseleave",function(){
    this.style.backgroundColor="rgb(244, 243, 243)";
});
const tab =document.querySelectorAll(".HRN>div");
tab[0].addEventListener("click",function(){
    tab[1].style.borderBottom="none"
    tab[2].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});

tab[1].addEventListener("click",function(){
    tab[0].style.borderBottom="none";
    tab[2].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});

tab[2].addEventListener("click",function(){
    tab[0].style.borderBottom="none"
    tab[1].style.borderBottom="none"
    this.style.borderBottom="3px solid black";
});

$(document).ready(function() {
	
	var $slider_list = $("#slider li")
	console.log( $slider_list )
	
	$slider_list.css("left", $("#sliderbox").css("width"))
	

	$slider_list.eq(0).css("left", 0)
	
	var sliderClick = function() {
		$("#sliderbox").click()
	}
	
	var timerid = setInterval( sliderClick, 3000 )
	
	var curSlide = 0;
	
	$("#sliderbox").click(function() {
// 		console.log("sliderbox click")


	clearInterval( timerid )

	timerid = setInterval( sliderClick, 3000 );
		
	var nextSlide = curSlide + 1;
		nextSlide %= $slider_list.length;
		console.log( curSlide, ":", nextSlide )
		

		$slider_list.eq(curSlide).animate( { "left": "-="+$("#sliderbox").css("width") } )

		$slider_list.eq(nextSlide).css( "left", $("#sliderbox").css("width") )

		$slider_list.eq(nextSlide).animate( { "left": "-="+$("#sliderbox").css("width") } )

		curSlide++;
		curSlide %= $slider_list.length;
	})
	
})