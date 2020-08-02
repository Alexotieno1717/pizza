$(document).ready(function(){
    $('#delivery').hide();
    $('#pick').hide();
    $("#checkout").click(function(){
        //Get Input data
        let flavour = $("#flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order 
        let order =(f, s, c, t, n, total)=>{
            return {f, s, c, t, n, total};
        }

        //Check Price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "chickentikka":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "crispy") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "stuffed") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "gluten") {
                        totalPrice = (price * number) + 180;
                    } 
                    // else {
                    //     totalPrice = (price * number) + 280;
                    // }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "crispy") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "stuffed") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "gluten") {
                        totalPrice = (price * number) + 180;
                    } 
                    // else {
                    //     totalPrice = (price * number) + 280;
                    // }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "crispy") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "stuffed") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "gluten") {
                        totalPrice = (price * number) + 180;
                    } 
                    // else {
                    //     totalPrice = (price * number) + 280;
                    // }
                    break;
            }
            break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        // else {
                        //     totalPrice = (price * number) + 280;
                        // }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        // else {
                        //     totalPrice = (price * number) + 280;
                        // }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        // else {
                        //     totalPrice = (price * number) + 280;
                        // }
                        break;
                }
                break;
                case flavour = "mushroom":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        break;
                }
                break;
                case flavour = "regina":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten") {
                            totalPrice = (price * number) + 180;
                        } 
                        break;
                }
                break;
        }

        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 120;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 170;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 170;
                break;

        }

        //Execute order
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test function

        // $("ol#list").append(newOrder);
        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
            $("#delivery").show();
            $('#pick').show();

    });
     
})