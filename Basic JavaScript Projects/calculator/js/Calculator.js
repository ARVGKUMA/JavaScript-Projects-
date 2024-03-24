// creates objects to keep track off//
const calculator ={
    //this will display 0 omn screen//
    Display_Value :'0',
    //this will hold first operand for any expressions we set it to ull now//
    First_Operand: null,
    //this checks whether second input is done by the user//
    Wait_Second_Operand: false,
    //this will hold operator and set it to null now//
    operator: null,
};

//this modifies values each time a button is clicked//
function Input_Digit(digit) {

    const{Display_Value, Wait_Second_Operand} = calculator;


    if (Wait_Second_Operand === true) {
        calculator.Display_Value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        //this over write Display_value if value is 0 //othrwise adds ontoit//
        calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }

}

//this section handles decimal point//

function Input_Decimal(dot){
        //this ensures that accidental licking of the decimal point  doesn't cause bugs//

        if(calculator.Wait_Second_Operand === true) return;
        if(!calculator.Display_Value.includes(dot)){
            calculator.Display_Value += dot;

        }

}
//this functions handles operators//

function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, operator} = calculator;
    //whwn operator key is pressed we convert the current number displayed screeon onto a number //
    const Value_of_Input = parseFloat(Display_/Value);
    //checks if operator already exists from the function and if Wait_Second_Operand is true //then updates operater and exits from the function//
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;

    }

if (First_Operand == null ){
    calculator.First_Operand = Value_of_Input;
} else if (operator){//checks if an operator exixts//
    const Value_Now = First_Operand || 0;
    //if operator exists the prperty look up is performed for the operator in theperform calculation project and the function that matches the //operator is executed //

    let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

    result = Number(result).toFixed (9);
    //this will remove any trailing zeros//
    result = (result *1).toString();
    calculator.Display_Value = parseFloat(result);
    calculator.First_Operand = parseFloat(result);
}

calculator.Wait_Second_Operand = true;
calculator.operator = Next_Operator;

}

const Perform_Calculation ={
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand

};

function calculator_Reset(){
    calculator.Display_Value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand =false;
    calculator.operator = null;

}

//this function updates the calculator screen with th the contents of Display_Value//

function Update_Display(){
    //make use of calculator screen class to target the input tag in HTML//
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.Display_value;
}

Update_Display()
//this section monitor button clicks//
const keys = document.querySelector('.calculator-screen');
keys.addEventListener('click', (event) => {
    const{target} = event;

    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Ensures AC clears all input from calculator screen //
    if(target.classList.contains('all-clear')){
        calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
 
 


































