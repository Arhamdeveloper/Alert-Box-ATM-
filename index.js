document.title="ATM";
let balance= 5000;
let a=prompt("Hey Welcome to ATM \n 1. With Draw \n 2. Deposit \n 3. Check Balance \n 4. Exit ");
let pin= 2580;
if(a==1){
    
    let withdraw=prompt("How many cash you want to withdraw")
    if(withdraw>balance){
        alert("You have insufficient balacne");
        
    }
    
   else{
    let b=prompt(`Are you sure you want to with draw ${withdraw} Rs . Please enter your pin`)
    if(b==pin){
        let css= balance-withdraw
        alert(`You Succesfully With Draw ${withdraw} Rs `)
        alert(`Now your current balance is ${css}`)
    }
    
    else{
        alert(`Please eneter valid pin`)
    }
   }
    
}
else if(a==2){
    let deposit=prompt(`How many cash you want to deposit`)
    if(deposit<=50000){
        let amount= balance+deposit;
        console.log(amount)
    let a=prompt(`Are  you sure you want to deposit ${deposit} Rs. Please enter your pin code`)
    alert(`You Successfuly deposit ${deposit} Rs.`)
    alert(`Now your current balance is ${amount} Rs.`)
    
    }
    else{
        alert(`You can deposit only 50000 Rs at a Time`);
        
    }
}
else if(a==3){
    let a=prompt(`Please eneter your pin if you want to check your balance`)
    if(a==pin){
        alert(`Your current balance is ${balance} Rs.`)
    }
    else{
        alert(`Please enter valid pin code`)
    }
}
else if(a==4){

}
else{
    alert("Please enter valid number")
}
