render = '';
suit =['clubs','spades','diamonds','hearts'];
num = ['2','3','4','5','6','7','8','9','10','J','Q','K','T'];
picture = ['jack','queen','king'];
indexPicture = 0;

for(j = 0; j < num.length; j++) {
    card = '';
    cardInfo = '';
    if(j < 9) {
        for(i = 0; i < 4; i++) {
            cardInfo=`  <div class="card__info">${num[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>
                        <div class="card__info">${num[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>`;
            card += `<div class="card">${cardInfo}</div>`;
        }
    } else if(j === num.length-1) {
        for(i = 0; i < 4; i++) {
            cardInfo=`  <div class="card__info">${num[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>
			            <img class="person" src="images/${suit[i]}.svg" alt="${suit[i]}">
			            <div class="card__info">${num[j]}<img src="images/clubs.svg" alt="${suit[i]}"></div>`;
            card += `<div class="card card--person">${cardInfo}</div>`;
        }
    } else {
        for(i = 0; i < 4; i++) {           
            cardInfo=`  <div class="card__info">${num[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>
			            <img class="person" src="images/${picture[indexPicture]}.svg" alt="${picture[indexPicture]}">
			            <div class="card__info">${num[j]}<img src="images/clubs.svg" alt="${suit[i]}"></div>`;
            card += `<div class="card card--person">${cardInfo}</div>`;
        }
        indexPicture++
    }
    render += card;
}

document.write(`<div class=wrapper>${render}</div>`);