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
let allproductsArray = [];
if(localStorage.product != null){
allproductsArray = JSON.parse(localStorage.product);
}


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
    // save localstorage
allproductsArray.push(product);
localStorage.setItem('product', JSON.stringify(allproductsArray)) // TODO: converts the allproductsArray into a JSON string... Since localStorage can only store strings,
    console.log(allproductsArray);
    clearInputsData()
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

// read or show in table after ctreate




// count 
// delete 
// update
// search
// clean data