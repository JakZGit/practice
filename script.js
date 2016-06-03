

document.getElementById('sign').onclick = function(){
	
	var pass = document.getElementById("password").value;
	var user = document.getElementById("username").value;

	var hasNumber = /\d/.test(user);
	if(!hasNumber){
		alert("Invalid Username/password");
	}
	else if(pass!=12345678){
		alert("Invalid Username/password");
	}
	else{
		alert("Success!");
		document.getElementById('h1').innerText ="Successful";
	}
}

