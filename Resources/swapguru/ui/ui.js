//define swapguru.ui object.
swapguru.ui = {};

(function(ns) {
	
	//shorthand for alert dialog
	ns.alert = function(/*String*/ _title, /*String*/ _message) {
		Ti.UI.createAlertDialog({
			title:_title, 
			message:_message
		}).show();
	};	  
	
})(swapguru.ui);

//Include additional SwapGuru namespaces
Ti.include(
	'/swapguru/ui/FeedWindow.js',
	'/swapguru/ui/LandingWindow.js'
	
);