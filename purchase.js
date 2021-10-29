console.log("run")

let greenRbtn= document.getElementById("green")
let blueRbtn= document.getElementById("blue")
let whiteRbtn= document.getElementById("white")
let blackRbtn= document.getElementById("black")

let nameTxt= document.getElementById("nameBox")
let phoneTxt= document.getElementById("phoneNumberBox")
let addressTxt= document.getElementById("addressBox")
let quantityTxt= document.getElementById("quantityBox")

let confirmBtn= document.getElementById("confirmBtn")

let colour
let Name
let phone
let address
let quantity

function getData(){
    colour= greenRbtn.checked?"Green" : blueRbtn.checked?"Blue" : whiteRbtn.checked?"White" : blackRbtn.checked?"Black" : null
    Name= nameTxt.value
    phone= phoneTxt.value
    address= addressTxt.value
    quantity= quantityTxt.value
}

function validation(){
    if(colour== null){
        alert("Colour of the product must be filled")
        return false
    }

    if(Name== ""){
        alert("Buyer's name must be filled")
        return false
    }

    if(phone== null){
        alert("Buyer's Phone number must be filled")
        return false
    }

    if(phone.length<12 || phone.length>13){
        alert("This is not a phone number")
        return false
    }
    if(address== ""){
        alert("Buyer's address must be filled")
        return false
    }

    if(quantity== null){
        alert("Quantity of items bought must be stated")
        return false
    }

    if(quantity<1 || quantity>10){
        alert("Quantity of item purchased must not be 0 or bigger than 10")
        return false
    }

    return true
}

function onClick(){
    getData()
    if(validation()== true){
        alert("Purchase is successful! Thank you.")
    }
}

confirmBtn.addEventListener("click", function(event){
    event.preventDefault()
    onClick()
})