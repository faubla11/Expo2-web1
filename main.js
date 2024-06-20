// Función para cargar el archivo JSON y manejar los datos
/*fetch('datos.json')
    .then(response => response.json())// Convierte la respuesta a JSON
    .then(data => {
        // ---El código para llenar el selector y manejar la selección
        // Guarda los datos en una variable
        var mydata = data;
        var contenido = document.querySelector("#contenido");
        var selector = document.getElementById("select");

        // Llena el selector con los nombres de los estudiantes
        for (let valor of mydata) {
            let option = document.createElement("option");
            option.value = valor.Nombre; // El valor de la opción es el nombre del estudiante
            option.innerText = valor.Nombre; // El texto visible de la opción es el nombre del estudiante
            selector.appendChild(option); // Añade la opción al selector
        }

        // Añade un event listener para manejar la selección de un estudiante
        selector.addEventListener("change", function () {
            mostrar(this); // Llama a la función mostrar cuando cambia la selección
        });

        function mostrar(nombre) {
            contenido.innerHTML = "";// Limpia el contenido actual
            for (let valor of mydata) {
                if (nombre.value == valor.Nombre) { // Comprueba si el nombre seleccionado coincide
                    contenido.innerHTML += `
                        <tr>
                            <td>${valor.Cédula}</td>
                            <td>${valor.Nombre}</td>
                            <td>${valor.Dirección}</td>
                            <td>${valor.Teléfono}</td>
                            <td>${valor.Correo}</td>
                            <td>${valor.Curso}</td>
                            <td>${valor.Paralelo}</td>
                        </tr>
                    `;// Añade una fila con los datos del estudiante
                }
            }
        }
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));// Muestra un error si no se puede cargar el JSON
*/



// Función para cargar y procesar el archivo XML
/*
fetch('datos.xml')
    .then(response => response.text())
    .then(data => {
        // Parsear el XML: se convierte en un objeto que representa la estructura y contenido del XML.
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "application/xml");

        // Obtener todos los estudiantes
        let estudiantes = xmlDoc.getElementsByTagName("estudiante");

        // Llenar el selector con los nombres de los estudiantes
        let selector = document.getElementById("select");
        for (let estudiante of estudiantes) {
            let option = document.createElement("option");
            option.value = estudiante.getElementsByTagName("Nombre")[0].textContent;
            option.innerText = estudiante.getElementsByTagName("Nombre")[0].textContent;
            selector.appendChild(option);
        }

        // Event listener para mostrar los datos del estudiante seleccionado
        selector.addEventListener("change", function () {
            let selectedName = selector.value;
            let contenido = document.querySelector("#contenido");
            contenido.innerHTML = "";

            // Buscar el estudiante seleccionado y mostrar sus datos en la tabla
            for (let estudiante of estudiantes) {
                if (estudiante.getElementsByTagName("Nombre")[0].textContent === selectedName) {
                    contenido.innerHTML += `
                        <tr>
                            <td>${estudiante.getElementsByTagName("Cédula")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Nombre")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Dirección")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Teléfono")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Correo")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Curso")[0].textContent}</td>
                            <td>${estudiante.getElementsByTagName("Paralelo")[0].textContent}</td>
                        </tr>
                    `;
                }
            }
        });
    })
    .catch(error => console.error('Error al cargar el archivo XML:', error));
*/


// Función para cargar y procesar el archivo CSV

/*fetch('datos.csv') // Usamos fetch para obtener el archivo datos.cs
    .then(response => response.text()) // Convertimos la respuesta a text
    .then(data => {
        // Dividimos el texto en líneas
        let lines = data.split('\n');
        // Obtenemos los encabezados del CSV
        let headers = lines[0].split(',');
        // Procesamos cada línea para crear un objeto estudiante
        let estudiantes = lines.slice(1).map(line => {
            let values = line.split(',');
            let estudiante = {};
            headers.forEach((header, index) => {
                estudiante[header] = values[index];
            });
            return estudiante;
        });
        // Obtenemos el elemento <select> del DOM
        let selector = document.getElementById("select");

        // Recorremos la lista de estudiantes y creamos una opción para cada uno
        estudiantes.forEach(estudiante => {
            let option = document.createElement("option");  
            option.value = estudiante.Nombre;  // El valor de la opción será el nombre del estudiante
            option.innerText = estudiante.Nombre;  // El texto de la opción será el nombre del estudiante
            selector.appendChild(option);  // Añadimos la opción al selector
        });

        // Añadimos un listener al selector para manejar el cambio de selección
        selector.addEventListener("change", function () {
            let selectedName = selector.value;
            let contenido = document.querySelector("#contenido");
            contenido.innerHTML = "";

            // Recorremos la lista de estudiantes y mostramos la información del estudiante seleccionado
            estudiantes.forEach(estudiante => {
                if (estudiante.Nombre === selectedName) {
                    contenido.innerHTML += `
                        <tr>
                            <td>${estudiante.Cédula}</td>
                            <td>${estudiante.Nombre}</td>
                            <td>${estudiante.Dirección}</td>
                            <td>${estudiante.Teléfono}</td>
                            <td>${estudiante.Correo}</td>
                            <td>${estudiante.Curso}</td>
                            <td>${estudiante.Paralelo}</td>
                        </tr>
                    `;
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar el archivo CSV:', error));
*/


// Función para cargar y procesar el archivo YAML
/*
fetch('datos.yaml')  // Usamos fetch para obtener el archivo datos.yaml
    .then(response => response.text())  // Convertimos la respuesta a texto
    .then(data => {
        // Cargamos el texto YAML a un objeto JavaScript usando js-yaml
        let yaml = jsyaml.load(data);
        let estudiantes = yaml.estudiantes;

        // Obtenemos el elemento <select> del DOM
        let selector = document.getElementById("select");
        
        // Recorremos la lista de estudiantes y creamos una opción para cada uno
        estudiantes.forEach(estudiante => {
            let option = document.createElement("option");
            option.value = estudiante.Nombre;  // El valor de la opción será el nombre del estudiante
            option.innerText = estudiante.Nombre;  // El texto de la opción será el nombre del estudiante
            selector.appendChild(option);  // Añadimos la opción al selector
        });

        // Añadimos un listener al selector para manejar el cambio de selección
        selector.addEventListener("change", function () {
            let selectedName = selector.value;
            let contenido = document.querySelector("#contenido");
            contenido.innerHTML = "";  // Limpiamos el contenido de la tabla

            // Recorremos la lista de estudiantes y mostramos la información del estudiante seleccionado
            estudiantes.forEach(estudiante => {
                if (estudiante.Nombre === selectedName) {
                    contenido.innerHTML += `
                        <tr>
                            <td>${estudiante.Cédula}</td>
                            <td>${estudiante.Nombre}</td>
                            <td>${estudiante.Dirección}</td>
                            <td>${estudiante.Teléfono}</td>
                            <td>${estudiante.Correo}</td>
                            <td>${estudiante.Curso}</td>
                            <td>${estudiante.Paralelo}</td>
                        </tr>
                    `;
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar el archivo YAML:', error));  // Manejo de errores
*/