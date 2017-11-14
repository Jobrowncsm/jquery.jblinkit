/*
* name: JB LinkIt
* author: Jordan Brown
* version: 0.1.0
* license: MIT
*/

(function($){
	console.log('here')
	$.fn.linkIt = function(options){
		console.log('also here')
		// Default settigns
		var settings = $.extend({
			href: null,
			text: null,
			target: '_self'
		}, options);

		// Validate options
		if(settings.href == null){
			console.log('You need an href option for JB LinkIt to work')
			return this
		}

		return this.each(function(){
			var object = $(this);
			console.log(object.text())
			if(settings.text == null){
				settings.text = object.text();
			}
			console.log(settings.text)
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});

	}
}(jQuery))
