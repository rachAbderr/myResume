let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msgInput = document.getElementById("message");
let subBtn = document.getElementById("btn-submit");


subBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    formSubmit(nameInput.value, emailInput.value,  msgInput.value);
})





function formSubmit(name, email, msg){
    subform = `You have a new message!!!!!\nname : ${name}\nemail : ${email}\nthe message : ${msg}`;
    alert(subform);
}