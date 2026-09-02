let transport: string;
let footprint = 1
let avg_meat = game.askForNumber("Amount of meat consumed in grams(avg per week).")
let avg_veg = game.askForNumber("Amount of Veggies/Fruits consumed in grams(avg per week).")
let avg_other = game.askForNumber("Any other food items consumed in grams?")
//  every 500 grams meat increases the footprint by 10, 500 grams veggies by 5  and 250 grams other by 3
if (avg_meat > 0) {
    footprint = Math.idiv(avg_meat, 500) * 10
}

if (avg_veg > 0) {
    footprint = footprint + Math.idiv(avg_veg, 500) * 5
}

if (avg_other > 0) {
    footprint = footprint + Math.idiv(avg_other, 250) * 3
}

let Pets = game.ask("Any pets?")
if (Pets == true) {
    footprint = footprint + 5
}

let days_work = game.askForNumber("How many days a week do you go to school/work?")
if (days_work > 0 && days_work < 8) {
    transport = game.askForString("Which transport method do you use: Foot, Bike, Motor bike, Bus, Car, Train, Plane, other?")
    if (transport == "Foot" || transport == "Bike") {
        footprint = footprint + (days_work - 1)
    } else if (transport == "Motor bike" || transport == "Car") {
        footprint = footprint + 4 * days_work
    } else if (transport == "Bus" || transport == "Train") {
        footprint = footprint + 2 * days_work
    } else if (transport == "Plane" || transport == "other") {
        footprint = footprint + days_work
    } else {
        game.splash("Oops! It seems that your input was incorrect, programs are case sensitive.")
    }
    
}

game.splash("Your Environmental Footprint is: " + footprint + ".")
