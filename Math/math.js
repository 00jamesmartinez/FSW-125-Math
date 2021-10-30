

 function add(number1,number2)
{
    var sum = number1 + number2;
    return sum;
}

 function sub(number1,number2)
{
    var sub=number1-number2;
    return sub;
}

 function mul(number1,number2)
{
    var mul=number1*number2;
    return mul;
}

 function div(number1,number2)
{
    if(number2!==0)
    {
     return   number1/number2;
    }
}
module.exports['add']=add;
module.exports['sub']=sub;
module.exports['mul']=mul;
module.exports['div']=div;