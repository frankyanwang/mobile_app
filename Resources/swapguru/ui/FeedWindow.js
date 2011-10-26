// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

(function (ns) {
	ns.launchFeedWindow = function(_args){
		// create tab group
		var tabGroup = Titanium.UI.createTabGroup();
		
		//
		// create base UI tab and root window
		//
		var feedWin = Titanium.UI.createWindow({  
		    title:'Feed',
		    backgroundColor:'#fff'
		});
		
		var feedTab = Titanium.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:'Feed',
		    window:feedWin
		});
		
		var label1 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Feed Window',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		label1.addEventListener('click', function (e) {
		  alert("you clicked me" + e.target);
		});
		
		feedWin.add(label1);
		
		//
		// create controls tab and root window
		//
		var	exploreWin = Titanium.UI.createWindow({
			url: '/swapguru/ui/ExploreWindow.js',  
		    title:'Explore',
		    backgroundColor:'#fff'
		});
		
		var	exploreTab = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Explore',
		    window:exploreWin
		});		

		//
		// create controls tab and root window
		//
		var	swapWin = Titanium.UI.createWindow({
			url: '/swapguru/ui/SwapWindow.js',  
		    title:'Swap',
		    backgroundColor:'#fff'
		});
		
		var	swapTab = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Swap',
		    window:swapWin
		});		

		//
		// create controls tab and root window
		//
		var	newsWin = Titanium.UI.createWindow({
			url: '/swapguru/ui/NewsWindow.js',  
		    title:'News',
		    backgroundColor:'#fff'
		});
		
		var	newsTab = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'News',
		    window:newsWin
		});		

		//
		// create controls tab and root window
		//
		var	profileWin = Titanium.UI.createWindow({
			url: '/swapguru/ui/ProfileWindow.js',  
		    title:'Profile',
		    backgroundColor:'#fff'
		});
		
		var	profileTab = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Profile',
		    window:profileWin
		});		
		
		//
		//  add tabs
		//
		tabGroup.addTab(feedTab);  
		tabGroup.addTab(exploreTab);  
		tabGroup.addTab(swapTab);  
		tabGroup.addTab(newsTab);  
		tabGroup.addTab(profileTab);  
		
		// open tab group
		tabGroup.open();  	
	};
})(swapguru.ui);