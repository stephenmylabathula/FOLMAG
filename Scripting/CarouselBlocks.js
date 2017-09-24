$(document).ready(function(){
  		$("div.interviewBlocks").mouseenter(function(){
			var hiddenBlock = "#" + this.id + "HIDE";
    		$(hiddenBlock).fadeIn("fast");
  		});
  		$("div.interviewBlocks").mouseleave(function(){
    		var hiddenBlock = "#" + this.id + "HIDE";
    		$(hiddenBlock).fadeOut("fast");
  		}); 
	});