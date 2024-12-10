/*let one = 1;	  

let ten = 10;

const twenty = 20;

const age = "21 year";

let schoolName = "Centralnaya"; 

const isTodayRainy = false; 

let nothing = null; 

let wow;


let arrey1=["Venom", "w","hdhd"]
let michele={
    name :'michele' ,
    age : 16 ,
    country : 'Italy',
}
console.log(5-15)
console.log(5/14)
console.log(5**6)
console.log(118%114)



//homework tasks
console.log(5+5);
console.log(-6+5);
console.log(-6-12);
console.log(77%7);
console.log(4**5);
console.log(12*16);
console.log(1/0);
console.log(NaN/12);

let num=4;
let Nnum=-4;
let Bnum=44444444444444n;
let text='GG';
let truth= true;
let fakenews= false;
let anything= null;
let gg;
let sh={
    numSh: 4 ,
    nameSh:'Hu',
    ggSh: false

}
let ggs=[0,1,4,5]


let money=0;
let price=5.99
if (money>=price)
    {
        console.log("Поздравляю! Ты купил *название товара*!")

    }


let ageT=19;
if (ageT<18){
    console.log("Привет, как дела?");
}else if(ageT<=35) {
    console.log("Добрый день")

}else if (ageT>35){
    console.log("Доброго времени суток")

}



let time=2;
if (time<6 || time>21){
    console.log('it is time to sleep')
}else if(time==13){
        console.log("пора обедать")

}else{
        console.log("no plans")

    }

console.log(NaN < 5)
console.log(NaN=='5')
console.log(-5=='5')
console.log(undefined<=null)
console.log(null===undefined)





let peremenaja=0
if(peremenaja==0){
    console.log('right')
}
else if (peremenaja>0&&peremenaja<0){
    console.log('wrong')
}

let peremenajab='1';
if(peremenajab==='1'){
    console.log('right')
}
else {
    console.log('wrong')
}

test=true
if(test=true){
    console.log('right')
}
else {
    console.log('wrong')
}

let peremenajac=0
if(peremenajac==0&&peremenajac<0){
    console.log('right')
}
else {
    console.log('wrong')
}
const color = 'green';
switch(color) {
    case 'red':
        alert('Красный свет - дороги нет!');
        break;
    case 'yellow':
        alert('Жёлтый цвет - стоит подождать')
        break;
    case 'green':
        alert('Зелёный цвет - можно идти!')
        break;
    default:
        alert('Светофор сломан');
        break;
}
const slogan = 'freedom!';
let country = 'italy';
const age2 = prompt('how old are you?');
userData(country, age2, slogan);
function userData (country, age2, text = 'Я ещё не придумал') {
    console.log('Страна: ${country}. Возраст: ${age2}. Девиз: ${text}');
    };


    const string = prompt('Введите число между 0 и 3', '');
    switch(string){
    case 0 :
       alert('Вы ввели число 0');
    
    
    
    case 1:
       alert('Вы ввели число 1');
    
    
    
    case 2:
       alert('Вы ввели число 2');
    };
    
    const string2 = prompt('Введите text');
    switch(string2){
    case "hello":
       alert("И тебе привет");
    
    
    
    case "bye":
       alert( "И тебе пока");
    
    
    
    default:
       alert("Я тебя не понял");
    };
   
function raN(){
    console.log(Math.random()*10);
}
document.getElementById('raN').onclick=raN
//console.log(document.getElementById('raN'))


console.log(Math.max(-3, 3, 30, 29, 5));

const str="Привет всем! Желаю вам хорошего дня!";
console.log(str.slice(12));

const str2="Здравствуйте";
console.log(str2.startsWith("з"));

const str3="      Привет!    ";
console.log(str3.trim());

let i = 0;
while (i <= 10) {
console.log('Число ' + i);
i++;
}


for (let i = 1; i <= 50; i++) {
    console.log(i);
    }
    let i = 0;
let userPassword;
userPass = prompt('password')
while (userPassword!='qwerty') {
    alert('wrong')
    userPass = prompt('password')
}
alert('right one')

let userPass;
for( let i=0;i<3;i++) {
    userPass=prompt('password');
    if (userPass!='qwerty'){
        alert('wrong password');
    
    }else {
        alert('correct password');
        break;
    }
}
const plus = document.getElementById('plus');
const value = document.getElementById('value');
function increment() {
let result = Number(value.textContent) + 1;
value.textContent = result;
}
plus.onclick = increment;
 
const minus = document.getElementById('minus');
function decrement() {
let result = Number(value.textContent) - 1;
value.textContent = result;
}
minus.onclick = decrement;
const animals = [
    'pig', 
    'cat', 
    'flamingo', 
    'dog'
    ];
    console.log(animals[3]);
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    if (btn.classList.toggle('active')) {
    } else {
        btn.classList.add('gg');
    }
});
const price = document.querySelector('#price');
let cost = 1500;
const plus = document.getElementById('plus');
const value = document.getElementById('value');
function increment() {
let result = Number(value.textContent) + 1;
value.textContent = result;
price.textContent = Number(value.textContent) * cost + '$';
}
plus.onclick = increment;
 
const minus = document.getElementById('minus');
function decrement() {
    if(Number(value.textContent)>1){
        let result = Number(value.textContent) - 1;
        value.textContent = result;
        price.textContent = Number(value.textContent) * cost + '$';
    }

}
minus.onclick = decrement;
const size=document.querySelector('.size')
size.addEventListener('click', function(event){
    let clickTarget=event.target;
    let currentActive=document.querySelector('.active')
    if (clickTarget.classList.contains('medium')){
        cost=1500;
        price.textContent=Number(value.textContent)*cost+"$";
        clickTarget.classList.add('active');
        currentActive.classList.remove('active')

    }else if (clickTarget.classList.contains('large')){
        cost=1700;
        price.textContent=Number(value.textContent)*cost+"$";
        clickTarget.classList.add('active');
        currentActive.classList.remove('active')
    }
})*/
// Samsung Galaxy S24 Ultra
const valueSamsung = document.getElementById('value-samsung');
const priceSamsung = document.getElementById('price-samsung');
const plusSamsung = document.getElementById('plus-samsung');
const minusSamsung = document.getElementById('minus-samsung');
const sizeMediumSamsung = document.getElementById('size-medium-samsung');
const sizeLargeSamsung = document.getElementById('size-large-samsung');

let quantitySamsung = parseInt(valueSamsung.textContent, 10);
let costSamsung = 1400; 


const updatePriceSamsung = () => {
    priceSamsung.textContent = `${quantitySamsung * costSamsung}$`;
};


plusSamsung.addEventListener('click', () => {
    quantitySamsung += 1;
    valueSamsung.textContent = quantitySamsung;
    updatePriceSamsung();
});
minusSamsung.addEventListener('click', () => {
    if (quantitySamsung > 1) {
        quantitySamsung -= 1;
        valueSamsung.textContent = quantitySamsung;
        updatePriceSamsung();
    }
});

sizeMediumSamsung.addEventListener('click', () => {
    costSamsung = 1400;
    sizeMediumSamsung.classList.add('active');
    sizeLargeSamsung.classList.remove('active');
    updatePriceSamsung();
});
sizeLargeSamsung.addEventListener('click', () => {
    costSamsung = 1699;
    sizeLargeSamsung.classList.add('active');
    sizeMediumSamsung.classList.remove('active');
    updatePriceSamsung();
});





// iPhone 15
const valueIphone = document.getElementById('value-iphone');
const priceIphone = document.getElementById('price-iphone');
const plusIphone = document.getElementById('plus-iphone');
const minusIphone = document.getElementById('minus-iphone');
const sizeMediumIphone = document.getElementById('size-medium-iphone');
const sizeLargeIphone = document.getElementById('size-large-iphone');

let quantityIphone = parseInt(valueIphone.textContent, 10);
let costIphone = 1500; 


const updatePriceIphone = () => {
    priceIphone.textContent = `${quantityIphone * costIphone}$`;
};
plusIphone.addEventListener('click', () => {
    quantityIphone += 1;
    valueIphone.textContent = quantityIphone;
    updatePriceIphone();
});
minusIphone.addEventListener('click', () => {
    if (quantityIphone > 1) {
        quantityIphone -= 1;
        valueIphone.textContent = quantityIphone;
        updatePriceIphone();
    }
});
sizeMediumIphone.addEventListener('click', () => {
    costIphone = 1500;
    sizeMediumIphone.classList.add('active');
    sizeLargeIphone.classList.remove('active');
    updatePriceIphone();
});
sizeLargeIphone.addEventListener('click', () => {
    costIphone = 1700;
    sizeLargeIphone.classList.add('active');
    sizeMediumIphone.classList.remove('active');
    updatePriceIphone();
});



// Xiaomi 12
const valueXiaomi = document.getElementById('value-xiaomi');
const priceXiaomi = document.getElementById('price-xiaomi');
const plusXiaomi = document.getElementById('plus-xiaomi');
const minusXiaomi = document.getElementById('minus-xiaomi');
const sizeMediumXiaomi = document.getElementById('size-medium-xiaomi');
const sizeLargeXiaomi = document.getElementById('size-large-xiaomi');

let quantityXiaomi = parseInt(valueXiaomi.textContent, 10);
let costXiaomi = 1500; 
const updatePriceXiaomi = () => {
    priceXiaomi.textContent = `${quantityXiaomi * costXiaomi}$`;
};
plusXiaomi.addEventListener('click', () => {
    quantityXiaomi += 1;
    valueXiaomi.textContent = quantityXiaomi;
    updatePriceXiaomi();
});
minusXiaomi.addEventListener('click', () => {
    if (quantityXiaomi > 1) {
        quantityXiaomi -= 1;
        valueXiaomi.textContent = quantityXiaomi;
        updatePriceXiaomi();
    }
});
sizeMediumXiaomi.addEventListener('click', () => {
    costXiaomi = 1500;
    sizeMediumXiaomi.classList.add('active');
    sizeLargeXiaomi.classList.remove('active');
    updatePriceXiaomi();
});
sizeLargeXiaomi.addEventListener('click', () => {
    costXiaomi = 1700;
    sizeLargeXiaomi.classList.add('active');
    sizeMediumXiaomi.classList.remove('active');
    updatePriceXiaomi();
});



// Redmi Note 14
const valueRedmi = document.getElementById('value-redmi');
const priceRedmi = document.getElementById('price-redmi');
const plusRedmi = document.getElementById('plus-redmi');
const minusRedmi = document.getElementById('minus-redmi');
const sizeMediumRedmi = document.getElementById('size-medium-redmi');
const sizeLargeRedmi = document.getElementById('size-large-redmi');

let quantityRedmi = parseInt(valueRedmi.textContent, 10);
let costRedmi = 1500; 
const updatePriceRedmi = () => {
    priceRedmi.textContent = `${quantityRedmi * costRedmi}$`;
};
plusRedmi.addEventListener('click', () => {
    quantityRedmi += 1;
    valueRedmi.textContent = quantityRedmi;
    updatePriceRedmi();
});
minusRedmi.addEventListener('click', () => {
    if (quantityRedmi > 1) {
        quantityRedmi -= 1;
        valueRedmi.textContent = quantityRedmi;
        updatePriceRedmi();
    }
});
sizeMediumRedmi.addEventListener('click', () => {
    costRedmi = 1500;
    sizeMediumRedmi.classList.add('active');
    sizeLargeRedmi.classList.remove('active');
    updatePriceRedmi();
});
sizeLargeRedmi.addEventListener('click', () => {
    costRedmi = 1700;
    sizeLargeRedmi.classList.add('active');
    sizeMediumRedmi.classList.remove('active');
    updatePriceRedmi();
});
