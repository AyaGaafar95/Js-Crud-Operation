let title = document.getElementById('title') ;
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let adds = document.getElementById('adds');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
temp = '';
mood ='create'
// console.log(title,price,taxes,adds,discount,total,count,category,submit);

// TODO: get total 

function getTotal() {
    if(price.value != '' ){
        let result = (+price.value + +taxes.value + +adds.value) - +discount.value ;
        total.innerHTML = result
    }else{
        total.innerHTML =''
    }
   
    
    
}

// TODO: create Product
let allproductsArray = [];
if(localStorage.product != null){
allproductsArray = JSON.parse(localStorage.product);//here i add what in local storage to the array
}// TODO: JSON.parse(localStorage.product) ... converts the JSON  into the allproductsArray

//fill prodct  from inputs data
 submit.onclick = function(){
    let product ={
        title : title.value , // title of product that will show on table == tilte value or value of input title
        price : price.value,
        taxes : taxes.value,
        adds : adds.value,
        discount : discount.value,
        total: total.innerHTML,
        count :count.value ,
        category : category.value

    }

    // count 
    if(mood == 'create'){
 // push data in array if there is count nuber more than 1
 if(product.count > 1){
    for(i=0;i < product.count ; i++){
        allproductsArray.push(product); //Add a new product in the number of for loop
    }
}else{ 
    allproductsArray.push(product); // push one product or 1 count
}
    }else{
        allproductsArray[temp] = product;
        count.style.display = 'block';
        submit.innerHTML = 'Create';
        mood = "create"
    }
   
// save localstorage
localStorage.setItem('product', JSON.stringify(allproductsArray)) //here i add what in array to local storage 
// TODO: JSON.stringify(allproductsArray)....converts the allproductsArray into a JSON string... Since localStorage can only store strings,
// console.log(allproductsArray);
    clearInputsData();
    showDataOnTable(); // show me in table what i just add
 }

// clear inputs 
function clearInputsData(){
    title.value ='';
    price.value = '';
     taxes.value = '';
    adds.value = '';
    discount.value ='';
  total.innerHTML='';
 count.value = '' ;
 category.value =''
}


// now i will show every opject or every product i put it in the array on my table👆😊
let table = '';
function showDataOnTable(){
    
    for(i =0 ; i < allproductsArray.length  ; i++){
      table +=`<tr>
                    <td>${i}</td>
                    <td>${allproductsArray[i].title}</td>
                    <td>${allproductsArray[i].price}</td>
                    <td>${allproductsArray[i].taxes}</td>
                    <td>${allproductsArray[i].adds}</td>
                    <td>${allproductsArray[i].discount}</td>
                    <td>${allproductsArray[i].total}</td>
                    <td>${allproductsArray[i].category}</td>
                    <td><button id="update" onclick='updateProduct(${i})'>update</button></td>
                    <td><button id="delete" onclick='deleteProduct(${i})'>delete</button></td>
                </tr>`
               
                
    }
    // read or show in table after ctreate
    document.getElementById('tbody').innerHTML= table

    // delete All 
    let deleteAllDiv = document.getElementById('deleteAll');
    if(allproductsArray.length > 0){
        deleteAllDiv.innerHTML = `
         <button onclick="deleteAll()">Delete All (${allproductsArray.length})</button>
        `
    }else {
        deleteAllDiv.innerHTML = ``;
    }

}

showDataOnTable();

// delete 
function deleteProduct(i){
    table.style.background= 'black'
    allproductsArray.splice(i,1);
    localStorage.product = JSON.stringify(allproductsArray);
    showDataOnTable();
}


// delete All 
function deleteAll(){
localStorage.clear();  // Clear the data from localStorage
//********************************* */
 // Clear the in-memory array
  allproductsArray.splice(0); // Option 1:      Using splice(0) to clear the array in-place
 allproductsArray.length = 0;    // Option 3:   Set the length to 0 (another alternative)
 allproductsArray = [];  // Option 2:        Reassign the array to a new empty array (you can use this instead)
//********************************* */
showDataOnTable();      // Update the UI to reflect the changes (clear the table) 
}



// update
function updateProduct(i){
console.log(allproductsArray[i].title );
title.value = allproductsArray[i].title ;
price.value = allproductsArray[i].price ;
taxes.value = allproductsArray[i].taxes ;
adds.value = allproductsArray[i].adds ;
discount.value = allproductsArray[i].discount ;
category.value = allproductsArray[i].category ;
submit.innerHTML = 'update'
count.style.display = 'none'

scroll({
    top:0 ,
    behavior:"smooth",
})
temp =i;
mood = 'update'
getTotal()
}
// search
// clean data