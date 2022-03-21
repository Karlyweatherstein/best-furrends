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

