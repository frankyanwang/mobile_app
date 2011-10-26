var win = Ti.UI.currentWindow;
		
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Explore Window',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

label2.addEventListener('click', function (e) {
  alert("you clicked me" + e.target);
});	

win.add(label2);
