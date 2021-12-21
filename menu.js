let cardData={};
let price = {};

let cardContainersReference = document.querySelectorAll('.card-container');
for(let i=0;i<cardContainersReference.length;i++) {
    let card = cardContainersReference[i];
    let cardContainer1 = card.querySelector('.card-container1');
    let addToCartButton = cardContainer1.querySelector('.button');
    addToCartButton.addEventListener('click',()=>{
        let pizzaName = cardContainer1.querySelector('#name').innerHTML;
        let pizzaPrice = cardContainer1.querySelector('.price').innerHTML; 
        if(pizzaName in cardData){
            cardData[pizzaName]+=1; 
            price[pizzaName]= pizzaPrice
        }
        else{
            cardData[pizzaName]=1;
            price[pizzaName]= pizzaPrice 
        }
        alert('Item added successfully');

    })
}

let cartElement = document.getElementById("cartResults");

let cartButton = document.querySelector('#cartbutton');
cartButton.addEventListener('click',()=>{
    if(Object.entries(cardData).length===0){
        alert('No items at present');
        return;
    }
    console.log(price)
    let message = '';
    let cardDataArray = Object.entries(cardData);
    console.log(cardDataArray)
    for(let i=0;i<cardDataArray.length;i++) {
        let pizzaName=cardDataArray[i][0];
        let value=cardDataArray[i][1];
        message +=`${pizzaName}:${value}\n`;

        let _pizzaName=cardDataArray[i][0]
        let resultsContainerElement = document.createElement('div')
        let _pizzaNameElement = document.createElement('h1')
        _pizzaNameElement.textContent = _pizzaName;
        resultsContainerElement.appendChild(_pizzaNameElement);
        let _pizzaPrice = cardDataArray[i][1] 
        let _pizzaPriceElement = document.createElement('p')
        _pizzaPriceElement.textContent = `Quantity:`+_pizzaPrice
        resultsContainerElement.appendChild(_pizzaPriceElement)
        let _pizzaCost = price[_pizzaName]
        let _costElement = document.createElement('p')
        _costElement.textContent = _pizzaCost
        resultsContainerElement.appendChild(_costElement)
        cartElement.appendChild(resultsContainerElement);
        var button = document.createElement("button");
        button.setAttribute('id','btn-cart')
        resultsContainerElement.appendChild(button);
        
        button.style.backgroundColor="blue";

        let a = document.createElement('a');
        let linkText = document.createTextNode("Buy Now");
        document.getElementById('btn-cart').className = 'btn_Cart';
        a.appendChild(linkText);
        a.title = "Buy Now";
        a.href = "./feedback.html";
        a.style.backgroundColor="blue";
        button.appendChild(a);
        resultsContainerElement.appendChild(a);
        // console.log(a);        


    }
    alert(message);
})


let button_1 = document.createElement("button");
        button_1.innerHTML = "Buy Now";
       console.log(button_1);
    



