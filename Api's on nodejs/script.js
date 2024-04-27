class Car {
   Brand
   Model
   Categorie 
   Year
   Quilometragem
   Value

   constructor(Brand, Model, Categorie, Year, Quilometragem, Value){
    this.Brand = "";
    this.Model = "";
    this.Categorie = "";
    this.Year = 0;
    this.Quilometragem = 0;
    this.Value = 0;
   }
}

function Get() {

    console.log("Hello")

    return fetch('https://apigenerator.dronahq.com/api/ha0iGO11/Car')
  
      .then((res) => res.json(
        console.log("Inside of then"),
        console.log(res.json)
      ))
  
      .then((data) => console.log(data));
  
  }

  async function postData(url = '', data = {}) {

    console.log("Hello World")

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
  
    return console.log(response.json());
  
  }
  
  
  postData('https://apigenerator.dronahq.com/api/ha0iGO11/Car', Car /* OBJETO A SER USADO */)
  
    .then((Car) => {
  
      console.log(Car);  
  
  });
  
  