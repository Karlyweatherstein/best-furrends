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
var toggleCard = document.querySelector('#resultsHere');

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
      toggleCard.style.display="block";
    //this loops and shows 10 availble pets in the console
    for (i = 0; i < 10; i++) {
      var randomArr = data.data[i]
        var breed = randomArr.attributes.breedPrimary;
        var age = randomArr.attributes.ageString;
        var description = randomArr.attributes.descriptionText;
        var dogImage = randomArr.attributes.pictureThumbnailUrl;
        var distance = randomArr.attributes.distance;


        console.log(breed)
        console.log(age)
        console.log(description)
        console.log(dogImage)
        console.log(distance)
        console.log(randomArr)

        
        //this pulls speicifc data from the API and displays it in its designated element
        //  document.getElementById('dogImg').setAttribute("src", dogImage)
        // document.getElementById('breed').innerText = 'Breed: ' + breed; 
        //  document.getElementById('age').innerText = 'Age: ' + age;
        //  document.getElementById('distance').innerText = 'Distance: ' + distance + ' Miles away';
        //  document.getElementById('description').innerText = description;
         var breedEl= document.createElement("h2")
         breedEl.textContent= 'Breed: ' + breed;
         var ageEl= document.createElement("h3")
         ageEl.textContent= 'Age: ' + age;
         var distanceEl= document.createElement("h2")
         distanceEl.textContent= 'Distance: ' + distance + ' Miles';
         var imgEl= document.createElement("img") 
         imgEl.setAttribute("src", dogImage)
         imgEl.setAttribute("class", "dogImage")

         toggleCard.append(breedEl, ageEl, distanceEl, imgEl)


    }



    
    
    // this closes the modal after the search is generated
    span.onclick()
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

