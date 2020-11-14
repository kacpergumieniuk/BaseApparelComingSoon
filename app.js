

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const button = document.getElementsByClassName("submit-button");


function Submit(x){
    if (validateEmail(x)){
        return 2137
    }
}


function lol(){
    let input = document.getElementById("text-input").value;
    if(validateEmail(input)){
        document.getElementById("text-input").style.border = "1px solid #d9c9cc"
        document.getElementById("error").style.display = "none";
        document.getElementById("error-text").style.display = "none";
    }
    else{
        document.getElementById("text-input").style.border = "1px solid red"
        document.getElementById("error").style.display = "inline-block";
        document.getElementById("error-text").style.display = "inline-block";
    }
}