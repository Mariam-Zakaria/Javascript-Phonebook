
var prodName = document.getElementById('productName'),
    proPrice = document.getElementById('productPrice'),
    proComp = document.getElementById('productComp'),
    proDesc = document.getElementById('productDesc'),
    myBtn = document.getElementById('button');

var productsContainer;

if(localStorage.getItem('productsContainer'== null))
{
    productsContainer =[];
}
else
{
    productsContainer = JSON.parse(localStorage.getItem('productsContainer')); //LocalStorage-get-
    displayProduct();
}





myBtn.onclick= function(){
    addProduct();
    
}

function addProduct(){
    var product = {
        name: prodName.value,
        price: proPrice.value,
        company: proComp.value,
        desc : proDesc.value
    };

    productsContainer.push(product);
    displayProduct();
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer)); //localStorage-Set-
    clearForm();
}





function displayProduct(){
    var cols ='';
    for(var i=0; i<productsContainer.length; i++)
    {
    cols += "<div class='col-md-3'><div class='product'><h3>"+productsContainer[i].name+"</h3><p>"+productsContainer[i].desc+"</p><p class='text-danger'>"+productsContainer[i].price+"</p><p class='text-info'>"+productsContainer[i].company+"</p><button class='btn btn-danger' onclick=deleteProd("+i+")>Delete</button></div></div>";
    }
    document.getElementById('rowData').innerHTML= cols;


}




function clearForm(){
    var inputs = document.getElementsByClassName('form-control');

    for(var i=0; i<inputs.length; i++){
        inputs[i].value = '';
    }
}


function deleteProd(index){
    productsContainer.splice(index , 1);
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
    displayProduct();

}