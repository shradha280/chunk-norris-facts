

showFact=(obj)=>{
    var x = obj.id;
    // var x = document.getElementById("myBtn").getAttribute("value");
         document.getElementById("demo").innerHTML = x;
        
        
        
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random";
    
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
        })
}
showFact1=()=>{
    let displayFact = document.querySelector(".display-facts");
    let url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response", responseData);
            displayFact.innerHTML = responseData.value;
        })
}
var h4 = document.getElementById('my-header');
if (h4) {
  h4.innerHTML = showFact1();
}