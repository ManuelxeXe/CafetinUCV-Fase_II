
// 1. Esperamos a que la página cargue totalmente
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Buscamos el botón de ingresar por su ID
    const botonIngresar = document.getElementById('botonlog');

    // 3. Le decimos qué hacer cuando alguien haga clic
    botonIngresar.addEventListener('click', function(event) {
        // Evitamos que la página se recargue (comportamiento por defecto del formulario)
        event.preventDefault();

        // 4. Obtenemos los valores que el usuario escribió
        const usuarioIngresado = document.getElementById('username').value;
        const claveIngresada = document.getElementById('password').value;

        // 5. Definimos nuestras credenciales fijas (Simulando una base de datos)
        const credenciales = {
            admin: { usuario: "adminRoot", clave: "cafetinAdmin", pagina: "Admin.html" },
            caja: { usuario: "caja_01", clave: "Cajero#123", pagina: "Caja.html" },
            cliente: { usuario: "ClienteUCV", clave: "Central_123", pagina: "Usuario.html" }
        }

        // 6. Verificamos los datos
        if (usuarioIngresado === credenciales.admin.usuario && claveIngresada === credenciales.admin.clave) {
            alert("¡Bienvenido Administrador!");
            window.location.href = credenciales.admin.pagina; // Redirige a Admin.html
        } 
        else if (usuarioIngresado === credenciales.caja.usuario && claveIngresada === credenciales.caja.clave) {
            alert("¡Bienvenido Cajero!");
            window.location.href = credenciales.caja.pagina; // Redirige a Caja.html
        }
        else if (usuarioIngresado === credenciales.cliente.usuario && claveIngresada === credenciales.cliente.clave) {
            alert("¡Bienvenido Cliente!");
            window.location.href = credenciales.cliente.pagina; // Redirige a Usuario.html
        }
        else {
            // Si no coincide ninguno
            alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
        }
    });
});