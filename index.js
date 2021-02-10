

// const descriptions = document.querySelectorAll(".description");
//  for (let desc of descriptions.values()) {
//     let content = desc.innerText;
  
//     if (content.length > 250) {
//       content = content.slice(0, 250);
//       content += '<a href="#">...</a>';
//     }
  
//     desc.innerHTML = content;
//   }

//   const ratings = document.querySelectorAll(".rating .value");
//   for (let rating of ratings){
//     let ratingValue = parseFloat(rating.innerText)
//     if (ratingValue > 4.7){
//         rating.classList.add("high-rating")
//         rating.classList.remove("value")
//     }
//   }
  


  // for (let desc of descriptions) {
  //   let content = desc.innerText;
  //   console.log(content);
  // }
  


// Event listners

  // const firstBtn = document.querySelector("button");

  // firstBtn.addEventListener("click", (event) => {
  //   console.log("You clicked the button", event);
  // });
// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#nameSorter");

// // Add an event listener
// ;

//   nameSorter.addEventListener("click", (event) => {
//     event.preventDefault();
  
// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#nameSorter");


// const nameSorter = document.querySelector("#nameSorter");
// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1. Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

// const buttons = document.querySelectorAll(".rateBtn")
// buttons.forEach(butt => {
//   butt.addEventListener("click", e => {
//     console.log(e)
//   const target = e.target;
//   target.innerText = "PP"
// } )
// })


const submitHandler = (event) => {
  console.log("The form was submitted");
};


const main = () => {
  // Get the form element
  const form = document.querySelector("#parkForm");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);









