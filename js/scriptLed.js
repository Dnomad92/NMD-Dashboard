$(document).ready(function(){
	$(".button a").click(function(){
		$(".overlay").fadeToggle(200);
		$(this).toggleClass("btn-open").toggleClass("btn-close");
	})
})
$(".ovelay").on('click', function () {
	$(".ovelay").fadeToggle(200);
	$(".button a" ).toggleClass("btn-open").toggleClass("btn-close");
	open = false;
})