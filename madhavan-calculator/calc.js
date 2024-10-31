const display1 = document.getElementById("display");
let dval=display1.value;

function appendtodisplay(input){
    display1.value += input;

}

function calculate(){
   try{
    display1.value=eval(display1.value)
   }
   catch(error){
     display1.value="Error"
   }
   
  }

