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

  function generateCards () {
    var breed = data.data[0].attributes.breedPrimary;
    var age = data.data[0].attributes.ageString;
    var description = data.data[0].attributes.descriptionText;
    var dogImage = data.data[0].attributes.pictureThumbnailUrl;
    var distance = data.data[0].attributes.distance;


    console.log(breed)
    console.log(age)
    console.log(description)
    console.log(dogImage)
    console.log(distance)

    
    
    var dogImageEl = document.getElementsByClassName('.card-image').innerText = dogImage;

    var breedEl = document.getElementById('breed').innerText = 'Breed: ' + breed; 
    var ageEl = document.getElementById('age').innerText = 'Age: ' + age;
    var distanceEl = document.getElementById('distance').innerText = 'Distance: ' + distance + ' Miles';
    var descriptionEl = document.getElementById('description').innerText = description;


    displayCard.append(dogImageEl); 
    displayCard.append(breedEl); 
    displayCard.append(ageEl); 
    displayCard.append(distanceEl); 
    displayCard.append(descriptionEl); 



  }
  generateCards()
    

}


function click() {
  getData();
}



//Start of Fact API 

//Gets the stored information from local storage
var factsArr = JSON.parse(localStorage.getItem("dogData")) || [];


//Function that pulls API info and stores in local storage
function funFacts () {
  fetch('https://api.thedogapi.com/v1/images/search/?x-api-key=c15bb368-37c9-4f47-8908-f8d0fe483813/breeds').then(function (response) {
      // The API call was successful!
      return response.json();

    }).then(function (data) {
      console.log(data);
      factsArr.push(data)
      localStorage.setItem("dogData", JSON.stringify(factsArr));
      var displayData = document.getElementById('funFactsHere');
      displayData.innerHTML = ''
      
      //Creating a route to specific API info
      var dogName = data[0].breeds[0].name
      var dogWeight = data[0].breeds[0].weight.imperial
      var dogHeight = data[0].breeds[0].height.imperial
      var dogLifeSpan = data[0].breeds[0].life_span
      var dogTemp = data[0].breeds[0].temperament


      //creating an element for each route
      var infoElName = document.createElement('p').innerText = 'Name: ' + dogName + ' • ' ; 
      var infoElWeight = document.createElement('p').innerText = 'Weight: ' + dogWeight + ' pounds! • ';
      var infoElHeight = document.createElement('p').innerText = 'Height: ' + dogHeight + ' inches! • ';
      var infoElLife = document.createElement('p').innerText = 'Life Span: ' + dogLifeSpan + '! • ';
      var infoElTemp = document.createElement('p').innerText = 'Temperament: ' + dogTemp + '!';



      //appending the element to the page
      displayData.append(infoElName); 
      displayData.append(infoElWeight);
      displayData.append(infoElHeight);
      displayData.append(infoElLife);
      displayData.append(infoElTemp);

      clearArr()

     
    }).catch;

}

nextBtn.addEventListener('click', funFacts)
 
//clears out the previous fact 
function clearArr(){
  factsArr = []
}


//End of fact API

