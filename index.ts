import inquirer from "inquirer"

const answer =await inquirer.prompt(
    [
        {
            message:"Enter first number",
            type:"number",
            name:"firstNumber"
        },
        {
            message:"Enter second number",
            type:"number",
            name:"secondNumber"
        },{
            message:"slect one of the oprators to perform opration",
            type:"list",
            name:"oprator",
            choices:["addition","subtraction","multiplication","division"]
        }
    ]
);
//conditional statment
if(answer.oprator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
    
}else if(answer.oprator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
    
}else if(answer.oprator === "multiplication"){
    console.log(answer.firstNumber*answer.secondNumber);
    
}else if(answer.oprator === "division"){
    console.log(answer.firstNumber/answer.secondNumber);
    
        
    }
    else{
        console.log("pleas slect valid oprators");
        
    }
    

//it is the end of the code----