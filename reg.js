function testSize(num){
if (num < 5) {
    return "small number"
    } else if (num < 10) {
        return "medium number"
        } else if (num < 15){
            return "large number"                
}

return "larger"

}
console.log(testSize(1));



var names = ["one", "two", "par", "four"]

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0]
    }
    else if (strokes <= par ){
return names[1]
    
    }
    else if (strokes != par ){
return names[2]
    }
    else if (strokes == par){
    return names[3]
    }
    else if (strokes > par){

        return names[4]
    }
}
console.log(golfScore(4, 1));