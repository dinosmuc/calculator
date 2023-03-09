// Saving the button string in variable //
let displayString = "";

// list for calculation //
let calculationList = [];

// Result variable //
let result;

// Counter variable //
let counter;
let counterMemory = [];

// Creating the div and span element //
// We use that element for presenting calculation on the screan //
spanHederElement = document.createElement("span");
spanHederElement.classList.add("calculation");

// Grabing the string from the button //
document.querySelectorAll(".btn").forEach((btn)=>{
    btn.addEventListener("click", function(){

        counter +=1

        displayString+=btn.textContent;

        let temp = "";
        
        if(btn.textContent == "="){
            console.log("Print result")
        }
        else if(btn.textContent == "+"){
            counterMemory.push(counter);
            temp = displayString[counterMemory[-2], counterMemory[-1]];
            calculationList.push(parseInt(temp));
            calculationList.push(btn.textContent);
            console.log(calculationList);
            temp = ""; 
        }
        else if(btn.textContent == "-"){
            counterMemory.push(counter);
            temp = displayString[counterMemory[-2], counterMemory[-1]];
            calculationList.push(parseInt(temp));
            calculationList.push(btn.textContent);
            console.log(calculationList);
            temp = ""; 
        }
       
        
        


        // Pushing buttonString in spanElement and appending it to card-header //
        spanHederElement.textContent = displayString;

        cardHeader = document.querySelector(".card-header");
        cardHeader.appendChild(spanHederElement);
        console.log(cardHeader);
    })
})






//  <div class="card-header">
// <span class="result">Result : </span>
// </div>
    