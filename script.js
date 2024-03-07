const imgbutton= document.querySelector(".svgclick");
const courseDiv= document.querySelector(".courseDiv");
const leftDiv= document.querySelector(".left");
let orderV =1;
let sectionCount=1;


// Define an array to store strings
let stringArray = [];

// Fetch data from data.json
fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Access the array of strings from data.json
    let jsonArray = data.myArray;

    // Add each string from the JSON array to the stringArray
    jsonArray.forEach(item => {
      stringArray.push(item);
    });

    // Print the stringArray
    console.log(stringArray);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });



// alert("ok");
document.addEventListener("keydown" ,function(event){
    if(event.key==="a"){
        const a = document.createElement("div");
        sectionCount++;
        a.innerHTML=`
        Section ${sectionCount}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="svgclick">
            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `;
        leftDiv.appendChild(a);
        a.classList.add("courseDiv");
        orderV =sectionCount*30;
        a.style.order=orderV;

    }

})

// for(let i=0; i<courseDiv.length;i++){
    courseDiv.addEventListener("click",()=>{
        const a = document.createElement("div");
        a.innerHTML=`
        SubSection
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="svgclick">
            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
        leftDiv.appendChild(a);
        a.classList.add("courseDiv");
        a.style.order=orderV;
        orderV ++;
        

        
    })
    // Assuming your data.json file is in the same directory as your script.js

// // Require fs module to read the file FOR NODEJS
// const fs = require('fs');

// // Read the data.json file
// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   // Parse the JSON data
//   const jsonData = JSON.parse(data);

//   // Access and print your array
//   alert(jsonData.myArray);
// });

// }



