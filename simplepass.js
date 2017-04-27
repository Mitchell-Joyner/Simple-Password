//type checkString below
function checkString(str){
    if(str.length>=8 && str.length<= 20){
        return str;
    }
    else{
        throw new RangeError("Your password must be between 8-20 characters long. Please try again. If Tony is reading this, please let me go. If someone else is reading this, please, for the love of god, save me. The address is 32---'No, Tony... TONY, NO!'---*Distorted Screaming*");
    }
}
//type getString below
function getString(str){
    try{
        str = checkString(str);
    }
    catch(e){
        console.log(e.message);
        getString("SaveMePlease");
    }
}
getString("I'm currently being held prisoner in Tony's basement");
