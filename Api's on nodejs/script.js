var apiUrl = 'https://apigenerator.dronahq.com/api/b5c-cxQn/data'

class Car {
    constructor(brand, model, type, year, mileage, value) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.year = year;
        this.mileage = mileage;
        this.value = value;
    }
}

function Get() {

    return fetch(apiUrl)

        .then((response) => response.json())
        .then((data) => console.log(data));

}

let newData = new Car("1", "1", "1", 1, 1, 1)

async function sendData(url = '', method = 'POST', data = {}) {

    const response = await fetch(url, {

        method: method, // *GET, POST, PUT, DELETE, etc.

        mode: 'cors',

        cache: 'no-cache',

        credentials: 'same-origin',

        headers: {

            'Content-Type': 'application/json'

        },

        redirect: 'follow',

        referrerPolicy: 'no-referrer',

        body: JSON.stringify(data)

    });

    return response.json();

}

// POST

// sendData(apiUrl, 'POST', newData)

//     .then(data => {
//         console.log(data);
//     })

// PUT

// // let updatedData = {
// //     brand: "2",
// //     model: "2",
// //     type: "2",
// //     year: 2,
// //     mileage: 2,
// //     value: 2
// // }

// // sendData(apiUrl + '/2', 'PUT', updatedData)

// // then(data => {
// //     console.log(data);
// // })

// DELETE

sendData(apiUrl + '/2', 'DELETE')
