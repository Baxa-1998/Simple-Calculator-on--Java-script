const numbers = document.querySelector(".numbers")
const result = document.querySelector("#result")

numbers.addEventListener("click",function(event){
   const value = event.target.innerText

   switch(value){
       case "DEL":
           result.innerText = ""
           break;

        case "=":
            result.innerText = eval(result.innerText).toFixed(2);
            break;

      
        default:
            result.innerText += value;
   }

    
   
})

