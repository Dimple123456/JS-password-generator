const lengthp = document.querySelector("#length-number");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");
const passinp = document.querySelector("#pass-input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

console.log(lengthp.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(number.checked);
console.log(symbol.checked);
let password = '';
const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasestr = "abcdefghijklmnopqrstuvwxyz";
const numberstr = "0123456789";
const symbolstr = "!@#$%^&*()_+";

generate.addEventListener("click",() => {
    let str = "";
    if(upper.checked){
        str += uppercasestr;
    }
    if(lower.checked){
        str += lowercasestr;
    }
    if(number.checked){
        str += numberstr;
    }
    if(symbol.checked){
        str += symbolstr;
    }

    console.log(str);
    
    for(let i = 0;i<lengthp.value;i++){
        console.log(str.length,"str.length")
        let index = Math.floor(Math.random() * str.length)
        console.log("index",index)
        console.log("math.random",Math.random());
        console.log("math.random() * str.length ", Math.random() * str.length )
        console.log("math.floor(math.random()*str.length",Math.floor(Math.random() * str.length));
        password += str[index];
        console.log(str[index]);

    }
    console.log(password,"password");
    passinp.value = password;
});
copy.addEventListener("click",() => {
    if(passinp.value === ""){
        alert("Please generate password")
    }
    else{
        const newele = document.createElement('textarea');
        newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('password Copied to Clipboard');
        newele.remove();
    }

})
