function handleProductChange(product, isIncrease){
    const produce_input = document.getElementById( product + '_quantity');
    const product_count = parseInt(produce_input.value);
    let product_new_count = product_count;
    if(isIncrease == true ){
        product_new_count = product_count + 1;
    }
    if(isIncrease == false && product_count > 0){
        product_new_count = product_count - 1;
    }
    produce_input.value = product_new_count;

    let TotalPrice = 0;

    if(product == 'phone'){
        TotalPrice = product_new_count * 1219;
    }
    if(product == 'case'){
        TotalPrice = product_new_count * 59;
    }

    document.getElementById(product + '_total').innerText = '$' + TotalPrice;
    calculateTotalPrice();
 }

 function calculateTotalPrice(){
     const phoneCount = getInput('phone');
     const caseCount = getInput('case');
     const totalAmount = phoneCount * 1219 + caseCount * 59;
     const taxAmount = Math.round(totalAmount * 0.1);
     document.getElementById('taxAmount').innerText = '$' + taxAmount;
     document.getElementById('totalProductPrice').innerText = '$' + totalAmount;
     const grand_total = totalAmount + taxAmount;
     document.getElementById('grandTotal').innerText ='$' + grand_total;
 }

 function getInput(product){
     const productInput = document.getElementById(product + '_quantity');
     const productCount = parseInt(productInput.value);
     return productCount;
 }



/*function handleProductChange(isIncrease){
    const case_input = document.getElementById('case-quantity');
    const case_count = parseInt(case_input.value);
    let case_new_count = case_count;
    if(isIncrease == true ){
       case_new_count = case_count + 1;
    }
    if(isIncrease == false && case_count > 0){
       case_new_count = case_count - 1;
    }
    case_input.value = case_new_count;
    const caseTotal = case_new_count * 59;

    document.getElementById('case_total').innerText = '$' + caseTotal;

 }

 function handleProductChange2(isDecrease){
    const quantityInput = document.getElementById('productQuantity');
    const quantityNumber = parseInt(quantityInput.value);
    let newQuantityNumber = quantityNumber;

    if(isDecrease == false && quantityNumber > 0){
        newQuantityNumber = quantityNumber -1;
    }
    if(isDecrease == true){
        newQuantityNumber = quantityNumber+1;
    }

    quantityInput.value = newQuantityNumber;
    const totalAmount = newQuantityNumber * 1219;

    document.getElementById('productPrice').innerText = '$' + totalAmount;
 }






document.getElementById('case-increase').addEventListener('click',function(){
 const case_input = document.getElementById('case-quantity');
 const case_count = parseInt(case_input.value);
 const case_new_count = case_count + 1;
 case_input.value = case_new_count;
 const caseTotal = case_new_count * 59;

 document.getElementById('case_total').innerText = '$' + caseTotal;
})

document.getElementById('case_decrease').addEventListener('click',function(){
 const case_input = document.getElementById('case-quantity');
 const case_count = parseInt(case_input.value);
 const case_new_count = case_count - 1;
 case_input.value = case_new_count;
 const caseTotal = case_new_count * 59;

 document.getElementById('case_total').innerText = '$' + caseTotal;
})*/