/* jquery.cascadelines
version 0.2
author: Maciej Kawa
E-mail: kontakt @ maciejkawa.lubin.pl
licensed under the MIT
*/

(function ($) {

	// Parametrs
	$.fn.cascadelines = function (options) {
		var defaults = {
			color: '#00F',
			direction: 'lr',
			lines: 10,
			speed: 100,
			zindex: "0"
		};
		options = $.extend(defaults, options);
		var position = 0;
		var self = $(this);
		
		// Direction of transition
		switch (options.direction) {
            default:
            case 'lr':
				options.direction = 'lr';
				position = 'left: 0';
				break;
			case 'rl':
				position = 'right: 0';
				break;
			case 'bt':
				position = 'bottom: 0';
				break;
			case 'tb':
				position = 'top: 0';
				break;
		}
		
		// Prevent multiple click events
		if (window.isdoing) { return console.log("Plugin is busy!"); }
		window.isdoing = true;
		
		// Cascade lines transition
		return self.each(function() {
			self.css("z-index", "-2000");
			if (options.direction=='lr' || options.direction=='rl') {
				for (var i=1; i<=+options.lines; i++) {
					self.prepend('<div id="cascadelines'+i+'" style="background:'+options.color+'; height: '+self.height()/options.lines*i+'px; width: 0px; '+position+'; position: absolute; z-index: -1000;"></div>');
					$("#cascadelines"+i).delay(i*options.speed).animate({width:self.width()+"px"});
				};
			}
			else if (options.direction=='bt' || options.direction=='tb') {
                if (self.selector=="body" || self.selector=="html") self.css("position", "relative");
				for (var i=1; i<=+options.lines; i++) {
					self.prepend('<div id="cascadelines'+i+'" style="background:'+options.color+'; height: 0px; width: '+self.width()/options.lines*i+'px; '+position+'; position: absolute; z-index: -1000;"></div>');
					$("#cascadelines"+i).delay(i*options.speed).animate({height:self.height()+"px"});
				}
			}
			
			// Delete temporary divisions
			setTimeout(function() 
				{
					self.css("background-color", options.color);
					self.css("z-index", options.zindex);
					for (var i=1; i<=+options.lines; i++) {
						$("#cascadelines"+i).remove();
					}
					window.isdoing = false;
				}, options.lines*options.speed+500);
		});
	};
})(jQuery);
