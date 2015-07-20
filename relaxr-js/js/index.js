$(document).ready(
	function(){
		
		$(".readmore").click(function () {
			event.preventDefault();
			$("#show-this-on-click").slideDown(400, "swing", function(){

			});
		
			$(".readless").show();
			$(".readmore").hide();
			
			
		});	

		$(".readless").click(function () {
			event.preventDefault();
			$("#show-this-on-click").slideUp(400, "swing", function () {
				$(".readless").hide();
				$(".readmore").show();
			});
			
			
			

		});

		$(".learnmore").click(function () {
			event.preventDefault();
			$("#learnmoretext").slideDown();
			$(".learnmore").hide();
			
		});	






});