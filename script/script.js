orderPrice = 0;
doubleCheese = 5;
hamburger = 10;
cheeseBurger = 15;
additive = ``;

bun = prompt(`hamburger or cheeseburger?`);
if((bun !== `hamburger` && bun !== `cheeseburger`) || !bun){
    orderPrice += hamburger;
} else{
    if(bun === `hamburger`){
        orderPrice += hamburger;
    } else if(bun === `cheeseburger`){
        additive = confirm(`Would you like to add double cheese?`);
        if(additive === true){
            orderPrice = doubleCheese + cheeseBurger;
        }else{
            orderPrice += cheeseBurger;
        }
    }
}

console.log(`${orderPrice}$`);