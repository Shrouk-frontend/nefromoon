let datawomen;
let datamen;
const btn_close=document.getElementById("btn_close");
let caRT=document.getElementById("cart");
const rowdata=document.getElementById("rowdata");
const rowdatamen=document.getElementById("rowdatamen");

async function getitemswomen() {
 const ALLPRODUCTWOMEN=await fetch (`https://fakestoreapi.com/products/category/women%27s%20clothing`);
if (ALLPRODUCTWOMEN.ok){
     datawomen= await ALLPRODUCTWOMEN.json();
    console.log(datawomen);

displaydatawomen(datawomen);

}   

}


function displaydatawomen(datawomen){
    box="";
      box.innerHTML="";
for(let i =0 ;i<datawomen.length;i++){
  
box+=` 
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" class="border border-opacity-20" >
      <div class="item">
        <img src="${datawomen[i].image}" class="w-100 img-fluid" alt="">
      <p class="text-center">${datawomen[i].title.split(" ",2).join(" ")}</p>
        <p class="text-center">${datawomen[i].price}</p>
        <button data-type="women" class="btn btn-outline-dark w-100" data-index="${i}">Add to cart</button>
      </div>
    </div>
`

}
rowdata.innerHTML=box;

}


async function getitemsmen() {
 const ALLPRODUCTMEN=await fetch (`https://fakestoreapi.com/products/category/men%27s%20clothing`);
if (ALLPRODUCTMEN.ok){
     datamen= await ALLPRODUCTMEN.json();
    console.log(datamen)
displaydatamen(datamen)
}   
}

function displaydatamen(men){
    cartona="";
for(let i =0 ;i<men.length;i++){

cartona+=`<div class="col-12 col-sm-6 col-md-4 col-lg-3" class="border border-opacity-20" >
      <div class="item">
        <img src="${men[i].image}" class="w-100 img-fluid" alt="">
      <p class="text-center">${men[i].title.split(" ",2).join(" ")}</p>
        <p class="text-center">${men[i].price}</p>
     <button class="btn btn-outline-dark w-100" data-index="${i}" data-type="men">Add to cart</button>
        </div>
    </div>
`

}
document.getElementById("rowdatamen").innerHTML=cartona;
};

document.addEventListener("click",function(e){
  if(e.target.classList.contains("btn")){
    const index=e.target.dataset.index;
    const type=e.target.dataset.type;
    
    let product;
    if(type==="men"){
      product=datamen[index];
    }
else{
 product=datawomen[index];
}
showsidebar(product);
  }
  
});


 function showsidebar(product){

  document.getElementById("details-item").innerHTML=`
<img class="ImageItem w-50" id="ImageItem" src="${product.image}" alt="">
      <title class="NameTitle">${product.title}</title>
    <p class="salary">salary:3000</p>
    <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque.</p>
   

`

caRT.classList.add("show");

caRT.classList.remove("d-none");
 }

(async function(){
  await getitemswomen();
  getitemsmen();

})()
;

btn_close.addEventListener("click",function(){
caRT.classList.add("d-none");


})


// section contact


let fullName=document.getElementById("fullName");
let  email=document.getElementById("email");
let teaxtErea=document.getElementById("teaxtErea");
let bt_send=document.getElementById("bt_send");

let clients=[];


function addmessage(){
let client={
  name:fullName.value,
  email:email.value,
  teaxtErea:teaxtErea.value
}
clients.push(client);
 localStorage.setItem("container_clients",JSON.stringify(clients));
 console.log(clients);
 resetmessage()
}

bt_send.addEventListener("click",function(){
addmessage();
})

function resetmessage(){
  fullName.value="";
  email.value="";
  teaxtErea.value="";
}
function valdationName(){
  const regex=/^[a-zA-Z0-9]{3,10}$/
  let text=fullName.value;
  if(regex.test(text)){
    fullName.classList.add('is-valid');
fullName.classList.remove('is-invalid');

  }
 else{
   fullName.classList.add('is-invalid');
fullName.classList.remove('is-valid');
 }
}


function valdationemail(){
  const regex=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
  let text=email.value;
  if(regex.test(text)){
    email.classList.add('is-valid');
email.classList.remove('is-invalid');

  }
 else{
   email.classList.add('is-invalid');
email.classList.remove('is-valid');
 }
}























































































// let buttons=document.querySelectorAll(".btn");

// function setupbuttons(data){
//   let cartone="";
//   for(let i=0;i<data.length;i++){
//   buttons.addEventListener("click",function(){
//     let product;
//     if(type===women){
//       product=datawomen;
//     }
//     else{
//       product=datamen;
//     }

// cartone+=`
// <img class="ImageItem w-50" id="ImageItem" src="${product[i].image}" alt="">
//       <title class="NameTitle">sweatshirt</title>
//     <p class="salary">salary:3000</p>
//     <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloremque.</p>
   

// `
// document.getElementById("details-item").innerHTML=cartone;
  
 
// caRT.classList.add("show");


// })}
// };





