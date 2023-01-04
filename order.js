let amharic = document.getElementById('am');
amharic.addEventListener('click',changeAm)
let oromifa = document.getElementById('or');
oromifa.addEventListener('click',changeOr);

let english = document.getElementById('en');
english.addEventListener('click',changeEn);

 function changeAm(){
    document.getElementById('fn-label').innerHTML ='ስም';
    document.getElementsByName('fname')[0].placeholder = 'ስም';
    document.getElementById('ln-label').innerHTML ='የአባት ስም';
    document.getElementsByName('lname')[0].placeholder = 'የአባት ስም';
    document.getElementById('co-label').innerHTML ='ሀገር';
    document.getElementsByName('co-input')[0].placeholder = 'ሀገር';
    document.getElementById('re-label').innerHTML ='ክልል';
    document.getElementsByName('re-input')[0].placeholder = 'ክልል'; 
    document.getElementById('city-label').innerHTML ='ከተማ';
    document.getElementsByName('city-input')[0].placeholder = 'ከተማ';
    document.getElementById('ke-label').innerHTML ='ቀበሌ';
    document.getElementsByName('ke-input')[0].placeholder = 'ቀበሌ';
    document.getElementById('pn-label').innerHTML ='ስልክ ቁጥር';
    document.getElementsByName('pn-input')[0].placeholder = 'ስልክ ቁጥር';
    document.getElementById('e-label').innerHTML ='ኢሜል';
    document.getElementsByName('e-input')[0].placeholder = 'ኢሜል';
    document.getElementById('e-label').innerHTML ='ኢሜል';
    document.getElementsByName('e-input')[0].placeholder = 'ኢሜል';
    document.getElementById('se-label').innerHTML ='መግዛት የሚፈልጉትን ዘር ይምረጡ?';
    document.getElementById('cr-label').innerHTML ='ካሮት';
    document.getElementById('sw-label').innerHTML ='ቆስጣ';
    document.getElementById('on-label').innerHTML ='ሽንኩርት';
    document.getElementById('ca-label').innerHTML ='ጎመን';
    document.getElementById('br-label').innerHTML ='ቀይ ስር';
    document.getElementById('sl-label').innerHTML = 'ምን አይነት  አይነ ቨርቲካል እርሻ ነው የፈለጉት?';
    document.getElementById('in-label').innerHTML = 'የቤት ዉስጥ';
    document.getElementById('out-label').innerHTML = 'ግቢ ዉስጥ';
}

function changeOr(){
    document.getElementById('fn-label').innerHTML ='Maqaa';
    document.getElementsByName('fname')[0].placeholder = 'Maqaa';
    document.getElementById('ln-label').innerHTML ='Maqaa Abba';
    document.getElementsByName('lname')[0].placeholder = 'Maqaa Abba';
    document.getElementById('co-label').innerHTML ='Biyya';
    document.getElementsByName('co-input')[0].placeholder = 'Biyya';
    document.getElementById('re-label').innerHTML ='Naannoo';
    document.getElementsByName('re-input')[0].placeholder = 'Naannoo'; 
    document.getElementById('city-label').innerHTML ='Magaalaa';
    document.getElementsByName('city-input')[0].placeholder = 'Magaalaa';
    document.getElementById('ke-label').innerHTML ='Qabalee';
    document.getElementsByName('ke-input')[0].placeholder = 'Qabalee';
    document.getElementById('pn-label').innerHTML ='Lakkofsa Bilbilaa';
    document.getElementsByName('pn-input')[0].placeholder = 'Lakkofsa Bilbilaa';
    document.getElementById('e-label').innerHTML ='Emeelii';
    document.getElementsByName('e-input')[0].placeholder = 'Emeelii';
    document.getElementById('se-label').innerHTML ='Gosa sanyii barbaaddan filadhaa?';
    document.getElementById('cr-label').innerHTML ='Kaarootii';
    document.getElementById('sw-label').innerHTML ='Salaaxaa';
    document.getElementById('on-label').innerHTML ='Qullubbii';
    document.getElementById('ca-label').innerHTML ='Raafuu';
    document.getElementById('br-label').innerHTML ='Hunde-Diimaa';
    document.getElementById('sl-label').innerHTML = 'Oomisha Vertikaalii';
    document.getElementById('in-label').innerHTML = 'Kan mana kessaa';
    document.getElementById('out-label').innerHTML = 'kan alaa';
}

function changeEn(){
    document.getElementById('fn-label').innerHTML ='First name';
    document.getElementsByName('fname')[0].placeholder = 'First name';
    document.getElementById('ln-label').innerHTML ='Last name';
    document.getElementsByName('lname')[0].placeholder = 'Last name';
    document.getElementById('co-label').innerHTML ='Country';
    document.getElementsByName('co-input')[0].placeholder = 'Country';
    document.getElementById('re-label').innerHTML ='Region';
    document.getElementsByName('re-input')[0].placeholder = 'Region'; 
    document.getElementById('city-label').innerHTML ='City';
    document.getElementsByName('city-input')[0].placeholder = 'City';
    document.getElementById('ke-label').innerHTML ='Kebele';
    document.getElementsByName('ke-input')[0].placeholder = 'Kebele';
    document.getElementById('pn-label').innerHTML ='Phone Number';
    document.getElementsByName('pn-input')[0].placeholder = 'Phone NUmber';
    document.getElementById('e-label').innerHTML ='Email';
    document.getElementsByName('e-input')[0].placeholder = 'Emali';
    document.getElementById('se-label').innerHTML ='Select Seeds You Want to Order?';
    document.getElementById('cr-label').innerHTML ='Carrot';
    document.getElementById('sw-label').innerHTML =' Swiss-Chard';
    document.getElementById('on-label').innerHTML ='Onion';
    document.getElementById('ca-label').innerHTML ='Cabbage';
    document.getElementById('br-label').innerHTML ='Beet-Root';
    document.getElementById('sl-label').innerHTML = 'Select Vertical Farming You Want to Order?';
    document.getElementById('in-label').innerHTML = 'Indoor';
    document.getElementById('out-label').innerHTML = 'Outdoor';
}

//  showin vegetabwl images
let carrotL=document.querySelector(".carrotL");
let cabbageL=document.querySelector(".cabbageL");
let beetL=document.querySelector(".beetL");
let onionL=document.querySelector(".onionL");
let swiisL=document.querySelector(".swiisL");

let vinL=document.querySelector(".vinL");
let voutL=document.querySelector(".voutL");

carrotL.addEventListener('mouseover',f1);
cabbageL.addEventListener('mouseover',f4)
beetL.addEventListener('mouseover',f5)
onionL.addEventListener('mouseover',f3)
swiisL.addEventListener('mouseover',f2)

vinL.addEventListener('mouseover',fin)
voutL.addEventListener('mouseover',fout)

carrotL.addEventListener('mouseout',f11);
cabbageL.addEventListener('mouseout',f44)
beetL.addEventListener('mouseout',f55)
onionL.addEventListener('mouseout',f33)
swiisL.addEventListener('mouseout',f22)

vinL.addEventListener('mouseout',finn)
voutL.addEventListener('mouseout',foutt)

let carrotV=document.querySelector(".carrotV");
let swissV=document.querySelector(".swissV");
let OnionV=document.querySelector(".OnionV");
let CabbageV=document.querySelector(".CabbageV");
let BeetRootV=document.querySelector(".Beet-RootV");

let vinV=document.querySelector(".vin");
let voutV=document.querySelector(".vout");

function f1(){
    carrotV.classList.add("onHover");
}
function f2(){
    swissV.classList.add("onHover");
}
function f3(){
    OnionV.classList.add("onHover");
}
function f4(){
    CabbageV.classList.add("onHover");
}
function f5(){
    BeetRootV.classList.add("onHover");
}

function fin(){
    vinV.classList.add("onHover");
}
function fout(){
    voutV.classList.add("onHover");
}

function f11(){
    carrotV.classList.remove("onHover");
}
function f22(){
    swissV.classList.remove("onHover");
}
function f33(){
    OnionV.classList.remove("onHover");
}
function f44(){
    CabbageV.classList.remove("onHover");
}
function f55(){
    BeetRootV.classList.remove("onHover");
}

function finn(){
    vinV.classList.remove("onHover");
}
function foutt(){
    voutV.classList.remove("onHover");
}
