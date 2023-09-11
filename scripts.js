const json_data = "data";
const API_URL = `https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/jylland-${json_data}.json`;

const defaultData = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "email": "johndoe@example.com",
    "is_subscribed": true,
    "hobbies": ["reading", "hiking", "cooking"],
    "address": {
      "street": "123 Main Street",
      "zipcode": "10001"
    }
}

fetch(API_URL, {
    headers: {Accept: "application/json"},
    method: "POST",
    body: JSON.stringify(defaultData)
}).then(response => response.json()).then(data => console.log(data));   // {name: "Jylland"}