footprint = 1

avg_meat = game.ask_for_number("Amount of meat consumed in grams(avg per week).")
avg_veg = game.ask_for_number("Amount of Veggies/Fruits consumed in grams(avg per week).")
avg_other = game.ask_for_number("Any other food items consumed in grams?")

# every 500 grams meat increases the footprint by 10, 500 grams veggies by 5  and 250 grams other by 3

if avg_meat > 0:
    footprint =  (avg_meat // 500) * 10

if avg_veg > 0:
    footprint = footprint + (avg_veg // 500) * 5

if avg_other > 0: 
    footprint = footprint + (avg_other // 250) * 3


Pets = game.ask("Any pets?")

if Pets == True: 
    footprint = footprint + 5 

days_work = game.ask_for_number("How many days a week do you go to school/work?")

if days_work > 0 and days_work < 8:
    transport = game.ask_for_string("Which transport method do you use: Foot, Bike, Motor bike, Bus, Car, Train, Plane, other?")
    if transport == "Foot" or transport == "Bike":
        footprint = footprint + (days_work - 1)
    elif transport == "Motor bike" or transport == "Car":
        footprint = footprint + (4 * days_work)
    elif transport == "Bus" or transport == "Train":
        footprint = footprint + (2 * days_work)
    elif transport == "Plane" or transport == "other":
        footprint = footprint + (days_work)
    else:
        game.splash("Oops! It seems that your input was incorrect, programs are case sensitive.")

game.splash("Your Environmental Footprint is: " + footprint + ".")  
