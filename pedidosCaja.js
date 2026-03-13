document.addEventListener('DOMContentLoaded', () => {

    const tabla = document.getElementById("tabla-pedidos");

    function cargarPedidos() {

        let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

        tabla.innerHTML = "";

        pedidos.forEach((pedido, index) => {

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${pedido.fecha}</td>
                <td>${pedido.productos.join(", ")}</td>
                <td>$${pedido.total}</td>
                <td><span class="${pedido.estado === 'Pendiente' ? 'xValidar' : 'PagoValido'}">${pedido.estado}</span></td>
                <td>
                    <button class="Validar" data-id="${index}">
                        Validar
                    </button>
                </td>
                <td>
                    <button class="Visualizar">
                        Datos
                    </button>
                </td>
            `;

            tabla.appendChild(tr);

        });

    }

    tabla.addEventListener("click", (e) => {

        if (e.target.classList.contains("Validar")) {

            const id = e.target.dataset.id;

            let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

            pedidos[id].estado = "Validado";

            localStorage.setItem("pedidos", JSON.stringify(pedidos));

            cargarPedidos();

        }

    });

    cargarPedidos();

});