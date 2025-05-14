// En JS tenemos las funciones de tipo flecha
// utilizaremos fetch que es un metodo para consumir una api

//Paso 1: funcion flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
//convertirmos la respuesta a tipo JSON
    .then((Response) => Response.json())
//los datos los vamos a mandar a la consola
    .then((data) => console.log(data))
//Descubrir que hacer en caso que no me corresponda
    .catch((error) => console.log(error));
};

consumirApi();
