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

// Adding API for fun facts start
// var request = new XMLHttpRequest()

// function getData() {
//  var response = fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
//  var data = response.JSON()

//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(fact => {
//       console.log(fact)
//     })

//   } else {
//     console.log("error")
//   }

// }


var getRepoIssues = function(repo) {
  // format the github api url
  var apiUrl = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";
  // make a get request to url
  fetch(apiUrl).then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        displayIssues(data);
      });
    } else {
      displayWarning(repo);
    }
  });
};

getRepoIssues()