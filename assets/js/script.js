// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
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


var searchButton = document.getElementById("searchbtn");

searchButton.onclick = function(){
    getData()
};

var btn = document.getElementById("searchbtn");
btn.onclick = function() {
    click()
}


const url = "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/";


async function getData() {
    var locationInput = document.getElementById("modalLocation");
 var zipcode = locationInput.value.trim();
  
    var raw = JSON.stringify({
          "data": {
            "filterRadius": {
              "miles": 50,
              "postalcode": zipcode
            }
        }});
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
  fetch('https://api.thedogapi.com/v1/images/search/?x-api-key=c15bb368-37c9-4f47-8908-f8d0fe483813/breeds').then(function (response) {
      // The API call was successful!
      return response.json();
    }).then(function (data) {
      console.log(data);
      factsArr.push(data)
      localStorage.setItem("dogData", JSON.stringify(factsArr));
      var displayData = document.getElementById('funFactsHere');
      displayData.innerHTML = factsArr
      // var infoEl = document.createElement('p');
      // infoEl.innerText = 'Weight: ${factsArr.weight}';
      // displayData.append(infoEl);
      clearArr()



  

    }).catch;

}

nextBtn.addEventListener('click', funFacts)
 
function clearArr(){
  factsArr = []
}


//End of fact API

