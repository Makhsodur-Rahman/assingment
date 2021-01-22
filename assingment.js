//----------problemNumber-1 kilometerToMeter----------------

//kilometerToMeter function declear 
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "distance cannot be negative";
    }

    else {
        var meter = kilometer * 1000;
        return meter;
    }
}

//kilometerToMeter function calling 
var meter = kilometerToMeter(6);
console.log(meter);

//----------problemNumber-2 budgetCalculator----------------

//budgetCalculator function declear

function budgetCalculator(watch, phone, leptop) {
    if (watch < 0 || phone < 0 || leptop < 0) {
        return "The value of the product cannot be negative";
    }
    else {
        var total = watch * 50 + phone * 100 + leptop * 500;
        return total;
    }
}
//budgetCalculator function calling 
var budgetResult = budgetCalculator(7, 8, 1);
console.log(budgetResult);

//----------problemNumber-3 hotelCost----------------

//hotelCost function declear
function hotelCost(day) {
    if(day<0){
        return "day cannot be negative"
    }
    else{
        if (day <= 10) {
            totalCost = day * 100;
            return totalCost;
        }
        else if (day <= 20) {
            var first_10_days = 10 * 100;
            var remaining = day - 10;
            var second_10_days = remaining * 80;
            var totalCost = first_10_days + second_10_days;
            return totalCost;
        }
        else {
            var first_10_days = 10 * 100;
            var second_10_days = 10 * 80;
            var remaining = day - 20;
            var third_10_days = remaining * 50;
            var totalCost = first_10_days + second_10_days + third_10_days;
            return totalCost;
        }
    }
}
//hotelCost function calling 
var totalCost = hotelCost(21);
console.log(totalCost);


//----------problemNumber-4 megaFriend----------------

//megaFriend function declear
function megaFriend(arr) {
    if (arr.length < 1 || arr == undefined) {
        return "Array is Empty";
    }
    else {
        var long1 = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i].length > long1.length) {
                long1 = arr[i];
            }
        }
    }
    return long1;

}
//megaFriend function calling 
var arr = ["mother", "brother's", "hridoy-ahmed-khan", "makhsodur rahman"];
console.log(megaFriend(arr));