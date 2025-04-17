function calculatePrice(price,discount = 10){
    if(!price || price<=0 || isNaN(price) || discount<=0 || isNaN(discount)){
        console.log("Invalid price or Invalid discount. try again")
    }
    else{
        console.log((price*discount)/100)
    }
}
calculatePrice(200,-5)
calculatePrice(500,20)
calculatePrice(-150)
calculatePrice(2400)
calculatePrice("rakesh")
calculatePrice(-331,-2321)
