let title = document.getElementById('title') ;
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let adds = document.getElementById('adds');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// console.log(title,price,taxes,adds,discount,total,count,category,submit);

function getTotal() {
    if(price.value != '' ){
        let result = (+price.value + +taxes.value + +adds.value) - +discount.value ;
        total.innerHTML = result
    }else{
        total.innerHTML =''
    }
   
    
    
}
// get total 
// create Product
// save localstorage
// clear inputs 
// read 
// count 
// delete 
// update
// search
// clean data