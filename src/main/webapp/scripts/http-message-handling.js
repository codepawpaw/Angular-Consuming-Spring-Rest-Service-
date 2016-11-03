var globalErrors = new angular
    .module('globalErrors', [])
    .config(function($provide, $httpProvider, $compileProvider) {
        var elementsList = $();

        var showMessage = function(content, cl, time) {
        	var element = elementsList[0];
        	if(element.hasClass("modal-message")){
	            $('<div/>')
	                .addClass('globalAlertMessage')
	                .addClass(cl)
	                .fadeIn('fast')
	                .delay(time)
	                .fadeOut('fast', function() { $(this).remove(); })
	                .appendTo(element)
	                .text(content);
        	}
        };

       

    });
