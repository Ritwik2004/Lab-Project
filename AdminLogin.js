function CheckLogin(){
    let userid=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let getpassword=localStorage.getItem("Password");
    let getuserid=localStorage.getItem("UserId");
    // console.log("user : "+getuserid+"\npass : "+getpassword);
    if(userid===getuserid && password==getpassword)
    {
        window.open("https://docs.google.com/spreadsheets/d/1w-ERRzVaUVVKOn70Zk1W8lf2yibm_902Jo9LHxbBMIY/edit?usp=sharing");
    }
    else{
        alert("Please Check User id and Password !!!");
    }
}

// open signup page
function open_signup()
{
    let login=document.getElementById("logIn");
    login.classList.toggle("main");
    login.classList.toggle("blank");
    let signup=document.getElementById("signUp");
    signup.classList.toggle("main");
    signup.classList.toggle("blank");
}

// for signup page
function enter_signup()
{
        let password=document.getElementById("password2").value;
        let sec_password=document.getElementById("c_password").value;
        let submit=document.getElementById("Submit");
        if(password===sec_password)
        {
            signup();
            open_signup();
        }
        else{
            alert("Please check your password...");
        }
}
function signup(){
    let email=document.getElementById("email").value;
    localStorage.setItem("Email",email);
    let userid=document.getElementById("userid").value;
    localStorage.setItem("UserId",userid);
    let sec_password=document.getElementById("c_password").value;
    let submit=document.getElementById("Submit");
    localStorage.setItem("Password",sec_password);
    
}


//open reset password page
function open_reset()
{
    let change=document.getElementById("change");
    change.classList.toggle("main");
    change.classList.toggle("blank");
    let reset=document.getElementById("reSet");
    reset.classList.toggle("main");
    reset.classList.toggle("blank");
}
function resetTologin()
{
    let login=document.getElementById("logIn");
    login.classList.toggle("main");
    login.classList.toggle("blank");
    let reset=document.getElementById("reSet");
    reset.classList.toggle("main");
    reset.classList.toggle("blank");
}
function reset()
{
    let email=document.getElementById("email1").value;
    let password=document.getElementById("psd1").value;
    let password_2=document.getElementById("psd2").value;
    let getemail=localStorage.getItem("Email");
    if(email===getemail)
    {
        if(password===password_2)
        {
            send();
            resetTologin()
        }
        else{
            alert("Please check your password...");
        }
    }
    else{
        alert("Email is not match...");
    }
}
function send()
{
    let password_2=document.getElementById("psd2").value;
    localStorage.removeItem("Password");
    localStorage.setItem("Password",password_2);
}

//open change password
function open_change()
{
    let login=document.getElementById("logIn");
    login.classList.toggle("main");
    login.classList.toggle("blank");
    let change=document.getElementById("change");
    change.classList.toggle("main");
    change.classList.toggle("blank");
}
function change()
{
    let old_password=document.getElementById("ch_password1").value;
    let new_password=document.getElementById("ch_password2").value;
    let ch_password=localStorage.getItem("Password");
    if(old_password===ch_password)
    {
        localStorage.removeItem("Password");
        localStorage.setItem("Password",new_password);
        open_change();
    }
    else{
        alert("Old Password is not match...");
    }
}