

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

// // const buttons = document.querySelectorAll(".rateBtn")
// // buttons.forEach(butt => {
// //   butt.addEventListener("click", e => {
// //     console.log(e)
// //   const target = e.target;
// //   target.innerText = "PP"
// // } )
// // })


// // const submitHandler = (event) => {
// //   console.log("The form was submitted");
  
// // };


// const main = () => {
//   // Get the form element
//   const form = document.querySelector("#parkForm");

//   // Attach the submit handler
//   form.addEventListener("submit", submitHandler);
// };

// window.addEventListener("DOMContentLoaded", main);

// const submitHandler = (event) => {
//   event.preventDefault();
//   console.log("The form was submitted");
//   // Get the name input
//   const parkName = document.querySelector("#parkName").values;

//   // if there are no errors
// if (!Object.keys(errors).length) {
//   //create a new element
//   const parkSection = document.createElement("section");

//   // add the park class
//   parkSection.classList.add("park");

//   // construct the HTML for this element
//   const content = `
//     <h2>${formData.get("name")}</h2>
//     <div class="location">${formData.get("location")}</div>
//     <div class="description">${formData.get("description")}</div>
//     <button class="rateBtn" title="Add to Favourites">&#9734;</button>
//     <div class="stats">
//       <div class="established stat">
//         <h3>Established</h3>
//         <div class="value">${moment(formData.get("established")).format(
//           "MMMM D, YYYY"
//         )}</div>
//       </div>
//       <div class="area stat">
//         <h3>Area</h3>
//         <div class="value">${formData.get("area")}</div>
//       </div>
//       <div class="rating stat">
//         <h3>Rating</h3>
//         <div class="value">${formData.get("rating")}</div>
//       </div>
//     </div>
//     `;

//   // set the innerHTML
//   parkSection.innerHTML = content;

//   //append to the main element
//   document.querySelector("main").appendChild(parkSection);
// }
// };




// function validateForm(formData) {
//   const errors = {};

//   // check if name was entered
//   if (!validateExists(formData.get("name"))) {
//     errors.name = "Please enter a name";
//   }

//   // check if rating was entered
//   if (!validateExists(formData.get("rating"))) {
//     errors.rating = "Please enter a rating";
//   }

//   // check if description was entered
//   if (!validateExists(formData.get("description"))) {
//     errors.description = "Please enter short description";
//   }

//   // check if established date was entered
//   if (!validateExists(formData.get("established"))) {
//     errors.established = "Please enter date";
//   }

//   // check if area was entered
//   if (!validateExists(formData.get("area"))) {
//     errors.area = "Please enter the area of the park";
//   }

//   // check if location date was entered
//   if (!validateExists(formData.get("location"))) {
//     errors.location = "Please enter the location of the park";
//   }

//   return errors;
// }

// validateForm()



















function validator(valid){
  return valid && valid.trim();
}
 
//let hp = []
const articleNames = document.querySelectorAll("h2")

//section class="park" <--has all the park names



consgit checkout Render_Startert searchBar = document.querySelector("#searchTerm").value
// console.log(searchBar.value)
console.log(searchBar)
searchBar.addEventListener("keyup", e => {
  // console.log(searchBar.value)

})
//  if (!validator(searchBar)){
//    const div = document.createElement("div");
//    const form = document.querySelector("form");
//    div.classList.add("error")
//    div.style.id = "searchError";
//    div.innerText = "Please enter a search term";
//    form.appendChild(div)
//  } 
//   if (validator(searchBar)){
  
//console.log(hp)
  // const filtered = hp.filter((char) => char.toLowerCase().includes(searchString));
//   // // || 
//   // // char.title.toLowerCase().includes(searchString);
//   // console.log(filtered)
//   // displayCharacters(filtered)


//   const hp = []
//   console.log(articleNames)
//   for (let name of articleNames){
//     const articleName = name.innerText.toLowerCase()
//     hp.push(articleName)  
//   }
//   searchBar.addEventListener("keyup", e => {
//   e.preventDefault();
//   const searchString = e.target.value.toLowerCase()
//   console.log(searchString);

//   if (hp.includes(searchString)){
//     console.log("this fucking works"); 
//   }
//   console.log(hp)
// })
           



  

// function displayCharacters(inputed){
// const htmlString = inputed
//       .map((input) => {
//         return `
//          <li class="input">
//           <h2>${input}</h2>
          
          
// //           </li> 
// //         `;
// //       })
// // .join('');
// // articleNames.innerHTML = htmlString
// // }

// let named = ["henry", "Flectip", "lorem"]
// let result = "H"
// if (named.includes(result)){
//   console.log("YES  YES  YES!!");
// }

// function clearList(){
//   while (list.firstChild) {
//     list.removeChild(list.fistChild)
//   }
// }












