setInterval(() => {
    let StudentName=document.getElementById("StudentName").value;
    let StudentRoll=document.getElementById("StudentRoll").value;
    let PcNumber=document.getElementById("PcNumber").value;
    let login=document.getElementById("login").value;
    let logout=document.getElementById("logout").value;
    submitbutton.disabled=true;
    let submitbutton=document.getElementById("submitbutton");
    if(StudentName=="" || StudentRoll=="" || PcNumber=="" || login=="" || logout=="")
    {
        submitbutton.disabled=true;
    }
    else{
        submitbutton.disabled=false;
    }
}, 1000);
function SubmitData()
{
    let msg="Name : "+StudentName.value+"\nRoll : "+StudentRoll.value+"\nPC Number : "+PcNumber.value;

    alert(msg+"\nSuccessfully Logged In.");

    setTimeout(() => {
        window.location.reload();
    }, 500);
}
