var operand1 = 0;
var operand2 = 7;

operand1 = operand1 / operand2;
operand1 = operand1 * operand2;
operand1 = operand1 / operand2;

var sign = operand1;
operand1 = operand2;

const prawda = operand1 > operand2
                                 ?
                                 operand1 === operand2
                                                ?
                                                "opera1"
                                                :
                                                "opera2"
                                            : 
                                             operand1 !== operand2 
                                                ? 
                                            "opera3" 
                                            : 
                                            "opera4";


switch(prawda) {
    case "opera1":
        console.log("opera1");
    break;

    case "opera2":
        console.log("opera2");
    break;
    
    case "opera3":
        console.log("opera3");
    break;

    case "opera4":
        console.log("opera4");
    break;
}

if(prawda) {
    console.log("yes")
}
else {
    console.log("not")
    console.log(prawda)
}
