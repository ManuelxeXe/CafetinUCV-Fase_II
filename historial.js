document.addEventListener('DOMContentLoaded', () => {

    const tabla = document.getElementById('cuerpo-historial');

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    tabla.innerHTML = "";

    pedidos.forEach(pedido => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${pedido.fecha}</td>
            <td>${pedido.productos.join(", ")}</td>
            <td>$${pedido.total}</td>
            <td>${pedido.estado}</td>
        `;

        tabla.appendChild(tr);

    });

});