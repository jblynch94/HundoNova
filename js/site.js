function getNumbers(){
    let start = document.getElementById("startValue").value;
    let end = document.getElementById("endValue").value;

    start = parseInt(start);
    end = parseInt(end);

    if (Number.isInteger(start) && Number.isInteger(end)) {
        let numbers = generateNumbers(start,end);
        displayValuesRev(numbers);
    }else{
       Swal.fire({
        backdrop: false,
        title: "oops!",
        text: "You can only enter numbers."
       });
    }
}
// generates numbers
// buessness logic
function generateNumbers(start, stop){
    let numbers = [];
    for(let i=start; i<=stop; i++){
        numbers.push(i);
    }
    return numbers;
}

// displays a list of numbers
// bold the even numbers
function displayValues(value){
    results = document.getElementById("results");
    results.innerHTML="";

    for(let i=0; i < value.length; i++){
        let divTag = document.createElement("div");
        divTag.classList.add("col");
        divTag.innerHTML = value[i];
           
        if(value[i]%2==0){
            divTag.classList.add("even");
            results.appendChild(divTag);
        }else{
            divTag.classList.add("odd");
            results.appendChild(divTag);
        }
    }
}

function displayValuesRev(value){
    results = document.getElementById("results");
    results.innerHTML="";

    for(let i=value.length-1; i >= 0; i--){
        let divTag = document.createElement("div");
        divTag.classList.add("col");
        divTag.innerHTML = value[i];
           
        if(value[i]%2==0){
            divTag.classList.add("even");
            results.appendChild(divTag);
        }else{
            divTag.classList.add("odd");
            results.appendChild(divTag);
        }
    }
}

