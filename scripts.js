const json_data = "data";
const API_URL = `datausers.json`;



/* fetch(API_URL, {
    headers: {Accept: "application/json"},
    method: "POST",
    body: JSON.stringify(defaultData)
}).then(response => response.json()).then(data => console.log(data));   // {name: "Jylland"} */
const container = document.querySelector("#container");

fetch(API_URL).then(response => response.json()).then(data => {
    const array = Object.keys(data).map(key => (data[key]));
    array.forEach(element => { 
          console.log(element);
          container.innerHTML += `
          <div class="card">
              <h2>${element.name}</h2>
              <p>${element.age}</p>
              <p>${element.city}</p>
              <p>${element.email}</p>
              <p>${(element.is_subscribed) ? "Subscribed" : "Not subscribed"}</p>
              <ul>${element.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}</ul>
              <p>${element.address.street}</p>
              <p>${element.address.zipcode}</p>
          </div>
          `;
    });
});