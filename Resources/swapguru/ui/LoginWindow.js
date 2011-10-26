var win = Titanium.UI.currentWindow;

var username = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:300,
	height:40,
	hintText:'Username',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);

var password = Titanium.UI.createTextField({
	color:'#336699',
	top:60,
	left:10,
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);

var loginBtn = Titanium.UI.createButton({
	title:'Login',
	top:110,
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(loginBtn);

/*
* Login Event Handling
*/
var loginReq = Titanium.Network.createHTTPClient();
loginReq.onload = function()
{
    Titanium.API.info('Status: ' + this.status);
    Titanium.API.info('ResponseText: ' + this.responseText);
    Titanium.API.info('connectionType: ' + this.connectionType);
    Titanium.API.info('location: ' + this.location);
    	
	var json = this.responseText;
	var response = JSON.parse(json);
	
	Titanium.API.info(response);
	if (response.logged == true)
	{
		alert("API token: " + response.auth_token);
	}
	else
	{
		alert(response.error);
	}
};

loginReq.onerror = function()
{
	var response = JSON.parse(this.responseText);
	if (this.status === 401) {
		alert(response.error);	
	}else{
		alert("Network error");
	}
    Titanium.API.info('Status: ' + this.status);
    Titanium.API.info('ResponseText: ' + this.responseText);
    Titanium.API.info('connectionType: ' + this.connectionType);
    Titanium.API.info('location: ' + this.location);	
};

/*
* Login Button Click Event
*/

loginBtn.addEventListener('click',function(e)
{
	if (username.value != '' && password.value != '')
	{
		loginReq.open("POST","http://localhost:3000/users/sign_in.json");
		loginReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//need override cookie value for session, otherwise, it will be returned.
		loginReq.setRequestHeader('Cookie', '_session_id=');
		var params = "user[login]=" + username.value + "&user[password]=" + password.value;
		loginReq.send(params);
	}
	else
	{
		alert("Username/Password are required");
	}
});