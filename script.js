
const SUPABASE_URL = "https://wftfnwdlwjdrhytnmtcd.supabase.co";

const SUPABASE_KEY = "sb_publishable_cD0TQD5uTV2DcpEGOYEndQ_j4fHpzAr";

const cliente = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function mostrarVideojuegos() {

    const tabla = document.getElementById("listaVideojuegos");
    const mensaje = document.getElementById("mensaje");

    const { data, error } = await cliente
        .from("videojuegos")
        .select("*")
        .order("id");

    if (error) {
        mensaje.textContent = "Error al cargar: " + error.message;
        return;
    }

    tabla.innerHTML = "";

    data.forEach(function(videojuego) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${videojuego.id}</td>
            <td>${videojuego.nombre}</td>
            <td>${videojuego.plataforma}</td>
            <td>${videojuego.genero}</td>
            <td>${videojuego.anio_lanzamiento}</td>
            <td>$${videojuego.precio}</td>
        `;

        tabla.appendChild(fila);
    });

    mensaje.textContent = "Se cargaron " + data.length + " videojuegos correctamente.";
}

mostrarVideojuegos();
