// Función para obtener la opción del usuario usando prompt
    function obtenerOpcion() {
        return prompt("Selecciona una opción:\n1. Ver modelos disponibles\n2. Consultar precio\n3. Comprar auto\n4. Salir");
    }

    // Función principal
    function ventaDeAutos() {
        let opcion;

        // Bucle principal
        do {
            // Obtener la opción del usuario
            opcion = obtenerOpcion();

            // Evaluar la opción utilizando switch
            switch (opcion) {
                case '1':
                    alert("Modelos disponibles:\n1. Peugeot\n2. Bmw\n3. Deportivos");
                    break;

                case '2':
                    let modelo = prompt("Ingresa el modelo para consultar el precio:");
                    consultarPrecio(modelo);
                    break;

                case '3':
                    let modeloCompra = prompt("Ingresa el modelo que deseas comprar:");
                    comprarAuto(modeloCompra);
                    break;

                case '4':
                    alert("Gracias por visitar nuestra tienda de autos.");
                    break;

                default:
                    alert("Opción no válida. Por favor, elige una opción correcta.");
                    break;
            }
        } while (opcion !== '4');
    }

    // Función para consultar el precio
    function consultarPrecio(modelo) {
        switch (modelo) {
            case 'Peugeot':
                alert("El precio del Peugeot es $20,000.");
                break;
            
            case 'Bmw':
                alert("El precio del Bmw es $30,000.");
                break;

            case 'Deportivos':
                alert("El precio del Deportivo es $40,000.");
                break;

            default:
                alert("Modelo no reconocido. Por favor, ingresa un modelo válido.");
                break;
        }
    }

    // Función para comprar el auto
    function comprarAuto(modelo) {
        switch (modelo) {
            case 'Peugeot':
            case 'Bmw':
            case 'Deportivos':
                alert(`¡Felicidades! Has comprado un ${modelo}. Gracias por tu compra.`);
                break;

            default:
                alert("Modelo no reconocido. Por favor, ingresa un modelo válido.");
                break;
        }
    }
    ventaDeAutos();
