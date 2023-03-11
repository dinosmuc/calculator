// Saving the button string in variable //
let displayString = "";
let countString = "";

// lists for calculation //
let calculationList = [];
let calculationList2 = [];

// Result variable //
let result = 0;


// Creating the div and span element //
// We use that element for presenting calculation on the screan //
spanHederElement = document.createElement("span");
spanHederElement.classList.add("calculation");

spanHederElement2 = document.createElement("span");
spanHederElement2.classList.add("result-text");

// Grabing the string from the button //
document.querySelectorAll(".btn").forEach((btn)=>{
    btn.addEventListener("click", function(){
        

        // if == //
        if(btn.textContent == "="){
            calculationList = countString.split(",");
            for(let i=0; i<calculationList.length; i++){
                if(calculationList[i] === "-" || calculationList[i] === "+" || calculationList[i] === "/" || calculationList[i] === "x"){
                    calculationList2.push(calculationList[i]);
                }else{
                    calculationList2.push(parseInt(calculationList[i]));
                }
            }
            result = calculationList2[0];
            
            for(let i=0; i<calculationList2.length; i++){
                if(calculationList2[i] === "x"){
                    if(calculationList2[i-2] === "+"){
                    result += calculationList2[i-1]*calculationList2[i+1];
                    }
                    else if(calculationList2[i] === "x" && calculationList2[i-2] === "-"){
                        result -= calculationList2[i-1]*calculationList2[i+1];
                    }else{
                        result *= calculationList2[i+1];
                    }
                } 
                
                else if(calculationList2[i] === "/"){
                    if(calculationList2[i-2] === "+"){
                    result += calculationList2[i-1]/calculationList2[i+1];
                    }
                    else if(calculationList2[i] === "/" && calculationList2[i-2] === "-"){
                        result -= calculationList2[i-1]/calculationList2[i+1];
                    }else{
                        result /= calculationList2[i+1];
                    }
                } 
                else if(calculationList2[i] === "%"){
                    if(calculationList2[i-2] === "+"){
                    result += calculationList2[i-1]%calculationList2[i+1];
                    }
                    else if(calculationList2[i] === "%" && calculationList2[i-2] === "-"){
                        result -= calculationList2[i-1]%calculationList2[i+1];
                    }else{
                        result %= calculationList2[i+1];
                    }
                } 

                else if(calculationList2[i] === "+"){
                    if (calculationList2[i+2] ==="/" || calculationList2[i+2] ==="x"){
                        continue;
                    }
                    else{
                        result+=calculationList2[i+1];
                    }
                }
                else if(calculationList2[i] === "-"){
                    if (calculationList2[i+2] ==="/" || calculationList2[i+2] ==="x"){
                        continue;
                    }
                    else{
                        result-=calculationList2[i+1];
                    }
                }

            }
            spanHederElement2.textContent = result;
            cardHeader.appendChild(spanHederElement2);
        } 


        
        // if + //
        else if(btn.textContent == "+"){
            countString+=","+btn.textContent+",";
            displayString+=btn.textContent;
            
        }

        // if - //
        else if(btn.textContent == "-"){
            countString+=","+btn.textContent+",";
            displayString+=btn.textContent;
        }

        // if / //
        else if(btn.textContent == "/"){
            countString+=","+btn.textContent+",";
            displayString+=btn.textContent;
        }

        // if x //
        else if(btn.textContent == "x"){
            countString+=","+btn.textContent+",";
            displayString+=btn.textContent;
        }

        else if(btn.textContent == "%"){
            countString+=","+btn.textContent+",";
            displayString+=btn.textContent;
        }

        else if(btn.textContent === "C"){

            displayString = "";
            countString = "";
            calculationList = [];
            calculationList2 = [];
            result = "";
            spanHederElement2.textContent = result;
            cardHeader.appendChild(spanHederElement2);
            
        }

        else if(btn.textContent === "MC"){

            displayString = displayString.slice(0,-1);

            if(countString.slice(-1)===","){
                countString = countString.slice(0,-3);
            }else{
                countString = countString.slice(0,-1);
            }
        }

        // else //

        else{
            countString += btn.textContent;
            displayString+=btn.textContent;
        }


        // Pushing buttonString in spanElement and appending it to card-header //
        spanHederElement.textContent = displayString;
        cardHeader = document.querySelector(".card-header");
        cardHeader.appendChild(spanHederElement);
        
    })
})






//  <div class="card-header">
// <span class="result">Result : </span>
// </div>
    