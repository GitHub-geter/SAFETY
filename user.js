const alertBtn = document.querySelector("#alert-btn");
const textInput = document.querySelector("#reason");

alertBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    
    const userInput = textInput.value.trim();

    if(userInput == ""){
        alert("Please enter the reason");
        return;
    }

    const alertData = {
        message: userInput,
        role:"user",
        time: new Date().toLocaleString()
    }

    
})