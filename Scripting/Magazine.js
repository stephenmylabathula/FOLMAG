function next(){
	$('#magazine').turn('next');
}
function prev(){
	$('#magazine').turn('previous');
}


	$(window).ready(function() {
		$('#magazine').turn({
							display: 'double',
							width: 1036,
							height: 677,
							autocenter: true,
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	});
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#magazine').turn('previous');
		else if (e.keyCode==39)
			$('#magazine').turn('next');
			
	});