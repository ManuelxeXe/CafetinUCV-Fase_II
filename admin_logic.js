document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('cuerpo-tabla-admin');
    const btnAnadir = document.getElementById('btn-anadir-producto');

    function cargarTabla() {
        const productos = obtenerProductos();
        tabla.innerHTML = "";

        productos.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.nombre}</td>
                <td>${p.precio.toFixed(2)}$</td>
                <td><input type="number" id="input-${p.id}" step="0.5" value="${p.precio}"></td>
                <td><button class="actualizar" onclick="cambiarPrecio('${p.id}')">Actualizar</button></td>
                <td><button class="eliminar" onclick="eliminarProducto('${p.id}')">Eliminar</button></td>
            `;
            tabla.appendChild(tr);
        });
    }

    // Función para actualizar precio
    window.cambiarPrecio = (id) => {
        const input = document.getElementById(`input-${id}`);
        const nuevoPrecio = parseFloat(input.value);

        if (isNaN(nuevoPrecio) || nuevoPrecio < 0) {
            alert("Por favor, ingrese un precio válido.");
            return;
        }

        let productos = obtenerProductos();
        productos = productos.map(p => p.id === id ? {...p, precio: nuevoPrecio} : p);
        
        guardarProductos(productos);
        alert("Precio actualizado con éxito");
        cargarTabla();
    };

    // NUEVA: Función para eliminar producto
    window.eliminarProducto = (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            let productos = obtenerProductos();
            
            // Filtramos el array para mantener todos menos el que coincida con el ID
            productos = productos.filter(p => p.id !== id);
            
            guardarProductos(productos);
            cargarTabla(); // Recargamos la tabla para mostrar los cambios
        }
    };

    // --- 4. LÓGICA PARA AÑADIR NUEVO PRODUCTO ---
    if (btnAnadir) {
        btnAnadir.addEventListener('click', () => {
            // Capturar valores de los inputs del formulario
            const idInput = document.getElementById('nuevo-id');
            const nombreInput = document.getElementById('nuevo-nombre');
            const precioInput = document.getElementById('nuevo-precio');
            const imagenInput = document.getElementById('nuevo-imagen');

            const id = idInput.value.trim();
            const nombre = nombreInput.value.trim();
            const precio = parseFloat(precioInput.value);
            const imagen = imagenInput.value.trim();

            // Validación de campos vacíos
            if (!id || !nombre || isNaN(precio) || !imagen) {
                alert("Error: Todos los campos son obligatorios para añadir un producto.");
                return;
            }

            let productos = obtenerProductos();

            // Validar que el ID no esté duplicado
            if (productos.some(p => p.id === id)) {
                alert("El ID ya existe. Por favor, usa un identificador único.");
                return;
            }

            // Crear y agregar el nuevo objeto
            const nuevoProducto = { id, nombre, precio, imagen };
            productos.push(nuevoProducto);
            
            // Guardar en LocalStorage y actualizar tabla
            guardarProductos(productos);
            alert(`¡${nombre} ha sido añadido al catálogo!`);

            // Limpiar el formulario
            idInput.value = "";
            nombreInput.value = "";
            precioInput.value = "";
            imagenInput.value = "";

            cargarTabla();
        });
    }

    cargarTabla();
});