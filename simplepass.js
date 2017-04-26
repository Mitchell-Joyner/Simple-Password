//type checkString below
function checkString(str){
    if(str.length>=8 && str.length<= 20){
        return str;
    }
    else{
        throw new RangeError("Your password must be between 8-20 characters long. Try again.")
    }
}
//type getString below
function getString(str){
    try{

    }
