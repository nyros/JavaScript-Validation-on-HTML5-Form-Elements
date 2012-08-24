function validateForm()
{
var uname=document.myForm.name;
var pwd=document.myForm.password;
var fname=document.myForm.fname;
var lname=document.myForm.lname;
var fileInput=document.myForm.fileInput;
var gender=document.myForm.gender;
var Day=document.myForm.Day;
var Month=document.myForm.Month;
var Year=document.myForm.Year;
var Options=document.myForm.Options;
var Country=document.myForm.Country;
var phone=document.myForm.phone;
var msg=document.getElementById("close");
var bar=document.getElementById("bar");


if(isAnvalid(uname,5,"Enter Valid username nin:5 max:8")){ bar.style.width="10%";
		
	if(isAnvalid(password,2,"Enter valid Password min:2 max:6")){ bar.style.width="20%";
			
		if(ischar(fname,2,"Enter Valid firstname min:2 max:6")){ bar.style.width="30%";
				
			if(ischar(lname,2,"Enter Valid lastname min:2 max:15")){ bar.style.width="40%";
					
				if(isfile(fileInput,"png/gif/jpf files only")){ bar.style.width="50%";
						
					if(vselect(Day)){
							
						if(vselect(Month)){
								
							if(vselect(Year)){ bar.style.width="70%";
									
								if(Option(Options)){bar.style.width="90%";
										
									if(isPhone(phone,12,"enter valid phone number")){ bar.style.width="100%";
											
										document.getElementById('alert').style.visibility="visible";
										msg.focus();
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

return false;
}

/*phone field validation*/

function isPhone(obj,minv, alt){
	
	var phone_regex = /^(?:\+?91[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var obj_len = obj.value.length;
		
	if(obj.value.match(phone_regex)&& obj_len>=minv){
		return true;
	}else{
		alert(alt);
		obj.focus();
		return false;
	}
}


/*File upload validation*/

function isfile(obj,alt)
{
	var val=obj.value;
	if( val.match(".JPG")||val.match(".jpg")|| val.match(".gif") || val.match(".png") || val.match(".JPEG")|| val.match(".GIF") || val.match(".PNG") ){
		return true;
	}
	else{
		alert(alt);
		obj.focus();
		return false;
	}
}


/*select box validation*/

function vselect(obj)  
	{  
		if ( obj.selectedIndex == 0 ) { alert ( "Please select your DOB." ); return false; } 
		else{
		return true;
		}

	}  


/*isAlphabets  validation*/

function ischar(obj,minv, alt){
	var ChExp = /^[a-zA-Z]+$/;
	var obj_len = obj.value.length; 
	if(obj.value.match(ChExp) && obj_len>=minv){
		return true;
	}else{
		alert(alt);
		obj.focus();
		return false;
	}
}


/*isAlphanumaric validation*/

function isAnvalid(obj, minv, alt){
	var anExp = /^[0-9a-zA-Z]+$/;
	var obj_len = obj.value.length; 
	if(obj.value.match(anExp)  && obj_len>=minv){
		return true;
	}else{
		alert(alt);
		obj.focus();
		return false;
	}
}


/*Checkbox validation*/

function Option(obj)  
	{  
		if ( (h1.checked == false ) && (h2.checked == false ) && (h3.checked == false ) && (h4.checked == false ) && (h5.checked == false ) && (h6.checked == false )) { alert ( "Please choose your Hobbies:" ); return false; } 
		else{
		return true;
		}
	}
