// Depois disso o desafio é implementar as APIs: 
// GET, GET by id, POST, PUT, DELETE 
// no código usando o typscript.

class Car {
    constructor(Brand, Model, Categorie, Year, Quilometragem, Value) {
        this.Brand = Brand;
        this.Model = Model;
        this.Categorie = Categorie;
        this.Year = Year;
        this.Quilometragem = Quilometragem;
        this.Value = Value;
    }
}

function Get() {

    console.log("Test")

    return fetch('https://apigenerator.dronahq.com/api/qD9FMxBL/Cars')

        .then((res) => res.json(
            console.log("Inside of then"),
            console.log(res.json)
        ))

        .then((data) => console.log(data));

}

async function postData(url = '', data = {}) {

    console.log("Test")

    try {
        const response = await fetch(url, {

            method: 'POST', // *GET, POST, PUT, DELETE, etc.
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

        let responseData = await response.json()
        console.log(responseData);

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

async function putData(url = '', data = {}) {

    console.log("Test")

    try {
        const response = await fetch(url, {

            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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

        let responseData = await response.json()
        console.log(responseData);

        Get();

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

async function deleteData(url = '', data = {}) {

    console.log("Test")

    try {
        const response = await fetch(url, {

            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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

        let responseData = await response.json()
        console.log(responseData);

        Get();

    } catch (error) {
        console.error('Error posting data:', error);
    }
}

const carData = new Car("Toyota", "Corolla", "Sedan", 2022, 10000, 25000);
const updatedCarData = {
    Brand: "Toyota",
    Model: "Camry",
    Type: "Sedan",
    Year: 2023,
    Quilometragem: 12000,
    Value: 27000
};
const deleteCarData = {
    Brand: "Volvo",
    Model: "CL200",
    Type: "Luxe",
    Year: 2013,
    Quilometragem: 0,
    Value: 200000
};



postData('https://apigenerator.dronahq.com/api/ha0iGO11/Car', carData);
putData('apigenerator.dronahq.com/api/qD9FMxBL/Cars/1', updatedCarData)
// deleteData('apigenerator.dronahq.com/api/qD9FMxBL/Cars/1', deleteCarData )


