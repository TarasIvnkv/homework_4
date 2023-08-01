hamburger = `hamburger`;
cheeseburger = `cheeseburger`;

hamburgerPrice = 10;
cheeseburgerPrice = 15;

doubleCheesePrice = 5;

smallPotato = `small`;
middlePotato = `middle`;
bigPotato = `big`;

smallPotatoPrice = 10;
middlePotatoPrice = 15;
bigPotatoPrice = 20;

ketchup = `ketchup`;
mayonnaise = `mayonnaise`;

ketchupPrice = 2;
mayonnaisePrice = 3;

orderPrice = 0;

bun = prompt(`Would you like ${hamburger} or ${cheeseburger}?`);
if(bun !== null){
    bun = bun.replaceAll(` `, ``).toLowerCase();
}

if(bun === cheeseburger){
    orderPrice += cheeseburgerPrice;
}else{
    bun = hamburger;
    orderPrice += hamburgerPrice;
}

if(bun === cheeseburger){
    doubleCheese = confirm(`Would you like to add double cheese?`);
    if(doubleCheese){
        orderPrice += doubleCheesePrice;
    }
}

potato = confirm(`Would you like potato?`);
if(potato){
    potatoSize = prompt(`Choose potato size: ${smallPotato}/${middlePotato}/${bigPotato}`);

    if(potatoSize !== null){
        potatoSize = potatoSize.replaceAll(` `, ``).toLowerCase();
    }

    if(potatoSize === middlePotato){
        orderPrice += middlePotatoPrice;
    }else if(potatoSize === bigPotato){
        orderPrice += bigPotatoPrice;
    }else{
        potatoSize = smallPotato;
        orderPrice += smallPotatoPrice;
    }
}

sauce = confirm(`Would you like sauce?`);
if(sauce){
    sauceType = prompt(`Choose sauce: ${ketchup}/${mayonnaise}`);

    if(sauceType !== null){
        sauceType = sauceType.replaceAll(` `, ``).toLowerCase();
    }

    if(sauceType === mayonnaise){
        orderPrice += mayonnaisePrice;
    }else{
        sauceType = ketchup;
        orderPrice += ketchupPrice;
    }
}

if(potato) confirmPotato = `<li>Potato 🍟: ${potatoSize}</li>`;
else confirmPotato = ``;

if(sauce) confirmSauce = `<li>Sauce 🧂: ${sauceType}</li>`;
else confirmSauce = ``;

document.write(`
    <div>
        <h2>Your order:</h2>
        <ul>
            <li>Bulka 🍔: ${bun} </li>
            ${confirmPotato}
            ${confirmSauce}
        </ul>
        <p>Price: ${orderPrice}$ </p>
    </div>
`);