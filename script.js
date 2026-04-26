let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS (2 IMAGES BACK RESTORED) ================= */
const products = [



/* 1 FRAMES */
{name:"Mirror Frames",price:2000,imgs:["images/mirrorframes1.jpg","images/mirrorframes2.jpg"],desc:"Premium mirror frame"},

/* 🔄 RENAMED + NEW STRUCTURE FIXED */
{name:"LED Frame",price:2000,imgs:["images/magicmirror1.jpg","images/magicmirror2.jpg"],desc:"LED Frame"},

{name:"Couple Frame",price:2499,imgs:["images/ledframe1.jpg","images/ledframe2.jpg"],desc:"Couple Frame"},

{name:"Magic Mirror Frame",price:2000,imgs:["images/magicmirrornew1.jpg","images/magicmirrornew2.jpg"],desc:"Magic Mirror Frame"},

{name:"Small Frame",price:899,imgs:["images/smallframe1.jpg","images/smallframe2.jpg"],desc:"Small frame"},
{name:"Canvas Print",price:1399,imgs:["images/canvas1.jpg","images/canvas2.jpg"],desc:"Canvas print"},
{name:"Framed Canvas",price:1599,imgs:["images/framedcanvas1.jpg","images/framedcanvas2.jpg"],desc:"Framed canvas"},

/* (REST OF YOUR PRODUCTS SAME AS BEFORE) */
/* 2 MUGS */
{name:"White Mug",price:799,imgs:["images/whitemug1.jpg","images/whitemug2.jpg"],desc:"Custom mug"},
{name:"Colour Mugs",price:1099,imgs:["images/colourmug1.jpg","images/colourmug2.jpg"],desc:"Colour mugs"},
{name:"Heart Mug",price:1199,imgs:["images/heartmug1.jpg","images/heartmug2.jpg"],desc:"Heart mug"},
{name:"Magic Mug",price:1199,imgs:["images/magicmug1.jpg","images/magicmug2.jpg"],desc:"Magic mug"},

/* 3 SHIRTS */
{name:"White Shirt",price:799,imgs:["images/whiteshirt1.jpg","images/whiteshirt2.jpg"],desc:"Printed shirt"},
{name:"Colour Shirt",price:1499,imgs:["images/colourshirt1.jpg","images/colourshirt2.jpg"],desc:"Colour shirt"},

/* 4 CUSHIONS */
{name:"Cushion",price:749,imgs:["images/cushion1.jpg","images/cushion2.jpg"],desc:"Cushion"},
{name:"Magic Cushion",price:999,imgs:["images/magiccushion1.jpg","images/magiccushion2.jpg"],desc:"Magic cushion"},

/* 5 CHAIN & RINGS */
{name:"Chain",price:499,imgs:["images/chain1.jpg","images/chain2.jpg"],desc:"Chain"},
{name:"Ring",price:245,imgs:["images/ring1.jpg","images/ring2.jpg"],desc:"Ring"},

/* 6 KEYRING */
{name:"Keyring",price:499,imgs:["images/keyring1.jpg","images/keyring2.jpg"],desc:"Keyring"},

/* 7 ALBUMS */
{name:"Album",price:999,imgs:["images/album1.jpg","images/album2.jpg"],desc:"Album"},
{name:"Printed Album",price:9999,imgs:["images/printedalbum1.jpg","images/printedalbum2.jpg"],desc:"Printed album"},

/* 8 LUNCH BOX */
{name:"Lunch Box",price:699,imgs:["images/lunchbox1.jpg","images/lunchbox2.jpg"],desc:"Lunch box"},

/* 9 BOTTLES */
{name:"Water Bottle",price:899,imgs:["images/waterbottle1.jpg","images/waterbottle2.jpg"],desc:"Water bottle"},
{name:"Temp Bottle",price:1499,imgs:["images/tempbottle1.jpg","images/tempbottle2.jpg"],desc:"Temp bottle"},

/* ⭐ NEW ADDED SECTION (FIXED ORDER REQUEST) */

/* BADGES (NEW) */
{name:"Badges",price:199,imgs:["images/badge1.jpg","images/badge2.jpg"],desc:"Custom badges"},

/* PENS (NEW) */
{name:"Pens",price:99,imgs:["images/pen1.jpg","images/pen2.jpg"],desc:"Printed pens"},

/* 10 FLYERS (kept below pens as requested) */
{name:"Flyers",price:699,imgs:["images/flyer1.jpg","images/flyer2.jpg"],desc:"Marketing flyers"},

/* 11 VISITING CARDS */
{name:"Visiting Cards",price:1999,imgs:["images/visitingcard1.jpg","images/visitingcard2.jpg"],desc:"Business cards"},

/* 12 BIRTHDAY CARDS */
{name:"Birthday Cards",price:499,imgs:["images/birthdaycard1.jpg","images/birthdaycard2.jpg"],desc:"Birthday cards"},

/* 13 WALLET */
{name:"Wallet",price:1299,imgs:["images/wallet1.jpg","images/wallet2.jpg"],desc:"Wallet"},

/* 14 PHONE COVER */
{name:"Phone Cover",price:999,imgs:["images/phonecover1.jpg","images/phonecover2.jpg"],desc:"Phone cover"}

];

/* ================= LOAD PRODUCTS ================= */
document.addEventListener("DOMContentLoaded", () => {

let grid = document.getElementById("productGrid");

if (!grid) return;

grid.innerHTML = "";

products.forEach((p, i) => {

let card = document.createElement("div");
card.className = "card";

/* SHOW FIRST IMAGE ONLY ON HOME */
card.innerHTML = `
<img src="${p.imgs[0]}" onerror="this.src='images/default.jpg'">
<h3>${p.name}</h3>
<p>Rs ${p.price}</p>
<button>Add To Cart</button>
`;

card.onclick = () => openProduct(i);

card.querySelector("button").onclick = (e) => {
e.stopPropagation();
addToCart(p.name, p.price);
};

grid.appendChild(card);
});

updateCart();

});

/* ================= PRODUCT PAGE SLIDER (2 IMAGES FIXED) ================= */

function showImg(){
let img = document.getElementById("mainImg");
if(!img) return;

img.src = window.images[window.index];

img.onerror = function(){
this.onerror = null;

if(window.index < window.images.length - 1){
window.index++;
showImg();
}else{
this.src = "images/default.jpg";
}
};
}

function nextImg(){
window.index = (window.index + 1) % window.images.length;
showImg();
}

function prevImg(){
window.index = (window.index - 1 + window.images.length) % window.images.length;
showImg();
}

/* ================= CART ================= */
function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
alert("Added 🛒");
}

function updateCart(){
let c = JSON.parse(localStorage.getItem("cart")) || [];
let el = document.getElementById("cartCount");
if(el) el.innerText = c.length;
}

/* ================= PRODUCT OPEN ================= */
function openProduct(id){
localStorage.setItem("product",id);
window.location.href="product.html";
}

/* ================= CONTACT ================= */
function openContact(){
document.getElementById("contactBox").style.display = "flex";
}

function closeContact(){
document.getElementById("contactBox").style.display = "none";
}