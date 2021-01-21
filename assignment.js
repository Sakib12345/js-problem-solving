// 

// solution no: 1
function kilometerToMeter(kilometer){
    if(kilometer <= -1){
        return 'Distance can not be negative';
    }
    else{
        var meter = 1000 * kilometer;
        return meter;
    }
}



// solution no: 2
function budgetCalculator(watch, phone, laptop){
    if(watch <= -1 || phone <= -1 || laptop <= -1){
        return 'Quantity can not be negative'
    }
    else{
        var totalBudget = (watch * 50) + (phone * 100) + (laptop * 500);
        return totalBudget;
    }
}



// solution no: 3
function hotelCost(days){
    var cost = 0;
    if(days <= 0){
        return 'Days cannot be negative or equal to 0'
    }
    else if(days >= 1 && days <= 10){
        cost = days * 100
    }
    else if(days >= 11 && days <= 20){
        cost = 10 * 100
        days -= 10
        cost += days * 80
    }
    else{
        cost = 10 * 100
        days -= 10
        cost += 10 * 80
        days -= 10
        cost += days * 50
    }
    return cost;
}



//solution 4
function megaFriend(friends){
    var maximum = 0;
    var answer = '';
    for(var i = 0; i < friends.length; i++){
        var friendsName = friends[i];
        var nameLength = friendsName.length;
        if(nameLength > maximum){
            answer = friendsName;
            maxi = nameLength;
        }
    }
    return answer;   
}