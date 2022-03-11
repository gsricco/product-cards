

let card1 = {
    poster: "poster.png",
    type: "blu_3d.png",
    sale: "action.png",
    title: "Тайная жизнь",
    subTitle: "домашних животных 2",
    price: 53,
    percent: 10,
    currency: "руб", 
    rating: 2.5,
    buy: "basket.png",
    action: true,
}
let card2 = {
    poster: "poster1.jpg",
    type: "",
    sale: "",
    title: "Фердинанд",
    subTitle: "Побег из коровника",
    price: 40,
    percent: 10,
    currency: "руб", 
    rating: 4.2,
    buy: "basket.png",
    action: true,
}
let card3 = {
    poster: "poster2.jpg",
    type: "",
    sale: "",
    title: "История игушек 4",
    subTitle: "Приключение Вилкинса",
    price: 60,
    percent: 10,
    currency: "руб", 
    rating: 3.5,
    buy: "basket.png",
    action: true,
}

let array = [
card1,
card2,
card3,
];

let sum="";

for (j=0; j<3; j++) {
card = array[j];

let fullCost = `${card.price}, 00 ${card.currency}.`;

let action = `${Math.round(card.price - card.price * card.percent/100)}, 00 ${card.currency}.`;

let stars = "", i=0;
let sur = (card.rating-Math.trunc(card.rating));

let starka = {
    star1: "",
    star2: "",
    star3: "",
    star4: "",
    star5: "",
    }
      
    for (let key in starka) {  

        if (card.rating<=0 || card.rating>5) starka[key] = "star_border ";
            else {
                    if (sur == 0.5 || sur == 0) 
                    {
                        i++;
                        if (i<=Math.trunc(card.rating)) 
                        {
                            starka[key] = "star ";                     
                        } else 
                            {
                            if (sur == 0.5) 
                                {
                                if ((i) == (1+ Math.trunc(card.rating)))
                                starka[key] = "star_half ";                        
                                } else starka[key] = "star_border ";
                            }              
                    }                 
                    else starka[key] = "star_border ";
                }

        if (starka[key] == "") starka[key] = "star_border ";
    }
    

let act, vas;
if (card.action) {
    act = `<div>${action}</div><div>${fullCost}</div>`;
    vas = 1;
} 
else {
    act = `<div>${fullCost}</div>`;
    vas = 0;
} 

let s = `<div class="card">  
    <div class="poster">
        <img src="images/${card.poster}" alt="">
        <img class="blu" src="images/${card.type}" alt="">
        <img style="opacity: ${vas};" src="images/${card.sale}" alt="">
    </div>
    <div class="title">
        <div>${card.title}</div>
        <div>${card.subTitle}</div>
    </div>
    <div class="price">
        ${act}
    </div>
    
    <div class="stars">
    <span class="material-icons">
    ${starka.star1}${starka.star2}${starka.star3}${starka.star4}${starka.star5}
    </span>
    </div>
    <div class="basket">
        <a href="#"><img src="images/${card.buy}" alt=""></a>
    </div>
</div> `;
sum += s;
}
 
id22.innerHTML = `<div id="cards"> ${sum} </div> `;





