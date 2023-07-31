orderPrice = 0;
doubleCheese = 5;
hamburger = 10;
cheeseBurger = 15;
smallPotato = 10;
middlePotato = 15;
bigPotato = 20;
ketchup = 2;
mayonnaise = 3;

bun = prompt(`hamburger or cheeseburger?`);
if((bun !== `hamburger` && bun !== `cheeseburger`) || !bun){
    orderPrice += hamburger;
} else{
    if(bun === `hamburger`){
        orderPrice += hamburger;
    } else if(bun === `cheeseburger`){
        cheese = confirm(`Would you like to add double cheese?`);
        if(cheese === true){
            orderPrice = doubleCheese + cheeseBurger;
        }else{
            orderPrice += cheeseBurger;
        }
    }
}

potato = confirm(`Would you like potato?`);
if(potato === true){
    potatoSize = prompt(`Choose potato size: small/middle/big`)
    if(
        potatoSize === `small`
        && (potatoSize === ``
        || potatoSize === false 
        || potatoSize !== `middle` 
        || potatoSize !== `big`)
        ){
        orderPrice += smallPotato;
    }else if(potatoSize === `middle`){
        orderPrice += middlePotato;
    }else if(potatoSize === `big`){
        orderPrice += bigPotato;
    }
}

sauce = confirm(`Would you like sauce?`);
if(sauce === true){
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`);
    if(
        sauceType === `ketchup`
        && (sauceType === ``
        || sauceType === false 
        || sauceType !== `ketchup` 
        || sauceType !== `mayonnaise`)
    ){
        orderPrice += ketchup;
    }else if(sauceType === `mayonnaise`){
        orderPrice += mayonnaise;
    }
}

console.log(`${orderPrice}$`);