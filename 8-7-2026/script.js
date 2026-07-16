console.log("connected");

function calculate(){
    const price = document.getElementById("price").value;
    const  quantity = document.getElementById("quantity").value;

    if(quantity<=0){
        document.getElementById("quantityError").innerHTML="must be greater than 0"

        return false;
    }
    else{
        document.getElementById("quantityError").innerHTML=""
        return true;

    }






    return true;
}

function check(){

    if(!calculate()){
        return false;
    }
    const price = document.getElementById("price").value;
    const  quantity = document.getElementById("quantity").value;
    const payable = price * quantity;
    document.getElementById("payable").value =payable;
    return false;
}
function clearForm() {
  document.getElementById("quantity").value = 0;
  document.getElementById("payable").value = 0;
  return false;
}

