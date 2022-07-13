const psswField=document.getElementById("password")
const psswConfirm=document.getElementById("confirm_password")
const submitButton=document.getElementById("submitButton")
const errorMessage=document.getElementById("errorMessage")
function checkPassword(){
    const psswField=document.getElementById("password")
    const psswConfirm=document.getElementById("confirm_password")
    console.log("test")
    if(psswField.value!=psswConfirm.value){
        psswField.classList.add("error")
        psswConfirm.classList.add("error")
        console.log("alert")
        errorMessage.hidden=false;
        return false;
    }
    errorMessage.hidden=true;
    return true;
}
document.getElementById('myForm').onsubmit = checkPassword;