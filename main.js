// En JS tenemos las funciones de tipo flecha
// utilizaremos fetch que es un metodo para consumir una api

//Paso 1: funcion flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => {
        const contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = ""; // Limpiamos el contenedor antes de agregar datos
        
        data.forEach((personita, index) => {
           const imagenUrl = `https://picsum.photos/200/200?random=${index}`;
            
            contenedor.innerHTML += `
                <div class="tarjeta-persona">
                    <img src="${imagenUrl}" alt="${personita.name}">
                    <div class="info-persona">
                        <h2>${personita.name}</h2>
                        <p><strong>Usuario:</strong> ${personita.username}</p>
                        <p><strong>Email:</strong> ${personita.email}</p>
                        <p><strong>Teléfono:</strong> ${personita.phone}</p>
                        <p><strong>Dirección:</strong> 
                            ${personita.address.street} ${personita.address.suite}, 
                            ${personita.address.city} (${personita.address.zipcode})
                        </p>
                        <p><strong>Empresa:</strong> ${personita.company.name}</p>
                        <p><strong>Sitio web:</strong> ${personita.website}</p>
                    </div>
                </div>
            `;
        });
    })
    .catch((error) => console.log("Error al obtener datos:", error));
};

// Aseguramos que la función solo se ejecute una vez al cargar la página
document.addEventListener("DOMContentLoaded", consumirApi);
//Tarea:
// mostrarme los datos del objeto   en el HTML los adress

//Descubrir que hacer en caso que no me corresponda
// Arrow function to fetch posts
const consumirApi2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        // Convert the response to JSON 
        .then((response) => response.json())
        // Show the data in the console
        .then((data) => console.log(data))
        // Handle any error that occurs
        .catch((error) => console.log(error));
};

// Call the function
consumirApi();
consumirApi2();

// DOM = Document object model / documento modelo del objeto - pregunta examen
//Semana 2 - A partir de esta sesion vamos a identificar elemntos html con un "id"

//creo una constante y le paso como valor el id que esta en la linea 12 de mi HTML
const titulo = document.getElementById("TituloEncabezado")
console.log(titulo)

//imprimo la varible titulo pero con el atributo textContent
console.log(titulo.textContent);


