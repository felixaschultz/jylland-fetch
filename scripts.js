const json_data = "data";
const API_URL = `https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/jylland-${json_data}.json`;

const defaultData = [
    {
      "name": "Alice Johnson",
      "age": 28,
      "city": "Los Angeles",
      "email": "alice@example.com",
      "is_subscribed": true,
      "hobbies": ["reading", "yoga", "traveling"],
      "address": {
        "street": "456 Elm Street",
        "zipcode": "90001"
      }
    },
    {
      "name": "Bob Smith",
      "age": 35,
      "city": "Chicago",
      "email": "bob@example.com",
      "is_subscribed": false,
      "hobbies": ["gardening", "painting", "running"],
      "address": {
        "street": "789 Oak Avenue",
        "zipcode": "60601"
      }
    },
    {
      "name": "Eva Davis",
      "age": 22,
      "city": "San Francisco",
      "email": "eva@example.com",
      "is_subscribed": true,
      "hobbies": ["swimming", "cooking", "photography"],
      "address": {
        "street": "101 Pine Road",
        "zipcode": "94101"
      }
    }
  ]

/* fetch(API_URL, {
    headers: {Accept: "application/json"},
    method: "POST",
    body: JSON.stringify(defaultData)
}).then(response => response.json()).then(data => console.log(data));   // {name: "Jylland"} */
const container = document.querySelector("#container");

fetch(API_URL).then(response => response.json()).then(data => {
    console.log(data["-Ne2XiOdupZ_A-a9IEpQ"]);
    data["-Ne2XiOdupZ_A-a9IEpQ"].forEach(element => {
        console.log(element);
    });
});