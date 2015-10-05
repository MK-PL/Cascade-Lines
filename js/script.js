$(function(){
	$("#tb").click(function() {
		$("body").cascadelines({
			color: '#000',
			direction: 'tb',
			lines:25
		});
	});

	$("#lr").click(function() {
		$("body").cascadelines({
			color: '#007',
			direction: 'lr',
			lines:15
		});
	});

	$("#rl").click(function() {
		$("body").cascadelines({
			color: '#070',
			direction: 'rl',
			speed: 220
		});
	});

	$("#bt").click(function() {
		$("body").cascadelines({
			color: '#700',
			direction: 'bt',
			speed: 220
		});
	});
});