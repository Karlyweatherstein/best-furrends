// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  click()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






const url = "https://api.rescuegroups.org/v5/public/animals/search/available/";

async function getData() {
    var raw = JSON.stringify({
          "data": {
            "filterRadius": {
              "miles": 100,
              "postalcode": 27527
            }}});
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/vnd.api+json',
           'Authorization': 'u2301vV9'
        },
       body: raw
       
   });
   const data = await response.json();
   console.log(data.data);
}

function click() {
    getData();
}


//Start of Fact API 

var factsArr = JSON.parse(localStorage.getItem("dogData")) || [];


function funFacts () {
  fetch('https://api.thedogapi.com/v1/images/search/?x-api-key=c15bb368-37c9-4f47-8908-f8d0fe483813').then(function (response) {
      // The API call was successful!
      return response.json();
      
      
      // var randomIndex = Math.floor(Math.random() * data.length);
      // var randomChar = data[randomIndex] 
      // factsArr += randomChar
      
      

    }).then(function (data) {
      console.log(data);
      factsArr.push(data)
      localStorage.setItem("dogData", JSON.stringify(factsArr));
      var displayData = document.getElementById('funFactsHere');
      displayData.innerHTML = factsArr
      
    }).catch;

}

nextBtn.addEventListener('click', funFacts)


//End of fact API