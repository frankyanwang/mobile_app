// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

(function (ns) {
	ns.launchLandingWindow = function(_args){
		var tabGroup = Titanium.UI.createTabGroup();
		
		var loginWin = Titanium.UI.createWindow({
			title:'User Authentication Demo',
			tabBarHidden:true,
			url:'/swapguru/ui/LoginWindow.js'
		});
		
		var loginTab = Titanium.UI.createTab({
			title:"Login",
			window:loginWin
		});
		
		tabGroup.addTab(loginTab);
		tabGroup.open();	
				
	};
})(swapguru.ui);