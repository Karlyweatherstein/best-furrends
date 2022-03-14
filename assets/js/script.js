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

var dogList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');


//function getDogs() {
  //  var requestOptions = {
   //     token: "91B7D3A43B5C31EA",
   //     method: 'GET',
   //     redirect: 'follow'
  //    };
      
   //   fetch("https://api.findadogfor.me/api/shelter/TX1399", requestOptions)
   //     .then(response => response.text())
 //       .then(result => console.log(result))
  //      .catch(error => console.log('error', error));
   // var requestUrl = "https://api.petfinder.com/v2/animals?type=dog&page=2"


 //   fetch(requestUrl)
 //   .then(function(response) {
  //      return response.json();
  //  })
  //  .then(function(data) {
  //      console.log (data);
  //      for (var i = 0; i < data.length; i++) {
  //        var listItem = document.createElement('li');
   //       listItem.textContent = data[i];
   //       dogList.appendChild(listItem);
   //     }
    //  });


fetchButton.addEventListener("click", getDogs);


//pet finder api
//api key is iWBmcogOlYqjvHonpYCUHWST24S2curEA8jvFktWDTRBfjBc1O
//api secret? CgFV9iPUIvZ6W2dRFLIm1w5A2YQVpeuOikrcZprP

//curl -d "grant_type=client_credentials&client_id=iWBmcogOlYqjvHonpYCUHWST24S2curEA8jvFktWDTRBfjBc1O&client_secret=CgFV9iPUIvZ6W2dRFLIm1w5A2YQVpeuOikrcZprP" https://api.petfinder.com/v2/oauth2/token