
const countryOfResidence = document.getElementById("countryR");
const nationalityR = document.querySelectorAll(".nationality");
console.log(nationalityR);
const getCountryOfRes = async() => {
    
    const res = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await res.json()
    // console.log(data);
    const countries = data.data.map((item) => {
    
        // console.log(item.country);
        const option = item.country;
        const optElement = document.createElement("option");
        optElement.setAttribute('value', item.country)
        // console.log(optElement);
        optElement.innerHTML = option;
        return countryOfResidence.appendChild(optElement);
    });

} 
getCountryOfRes();


// const getNationality = async() => {
//     const res = await fetch("https://countriesnow.space/api/v0.1/countries");
//     const data = await res.json();
//     // console.log(data);
//     data.data.forEach(item => {
//         for (let i = 0; i < countryOfResidence.length; i++) {
//           const element = countryOfResidence[i];
//           const optElement = document.createElement("option");
//           optElement.setAttribute("value", item.country);
//           return element.appendChild(optElement);
//         }
//     })
// }
// getNationality()
