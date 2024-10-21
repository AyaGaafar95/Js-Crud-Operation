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

 let dataPro = [];
 submit.onclick = function(){
    let product ={
        title : title.value ,
        price : price.value,
        taxes : taxes.value,
        adds : adds.value,
        discount : discount.value,
        total: total.innerHTML,
        count :count.value ,
        category : category.value

    }
    console.log(product);
    
 }



// save localstorage
// clear inputs 
// read 
// count 
// delete 
// update
// search
// clean data