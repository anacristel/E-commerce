// arreglo con todos los productos
export const arrayProductos = [
    {
        id: 'chamoyada-01',
        titulo: 'Chamoyada de pepino',
        imagen: './assets/productos/chamoyada1.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-02',
        titulo: 'Chamoyada de mango',
        imagen: './assets/productos/chamoyada2.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-03',
        titulo: 'Chamoyada de frutos rojos',
        imagen: './assets/productos/chamoyada3.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-04',
        titulo: 'Chamo caribe',
        imagen: './assets/productos/chamoyada4.png',
        precio: '100.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-05',
        titulo: 'Chamoyada de durazno',
        imagen: './assets/productos/chamoyada5.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-06',
        titulo: 'Chamoyada de fresa',
        imagen: './assets/productos/chamoyada6.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-07',
        titulo: 'Chamoyada de mora azul',
        imagen: './assets/productos/chamoyada7.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-08',
        titulo: 'Chamoyada de piña',
        imagen: './assets/productos/chamoyada8.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'chamoyada-09',
        titulo: 'Chamoyada de maracuyá',
        imagen: './assets/productos/chamoyada9.png',
        precio: '50.00',
        categoria: 'chamoyada'
    },
    {
        id: 'chamoyada-10',
        titulo: 'Chamoyada de tamarindo',
        imagen: './assets/productos/chamoyada10.png',
        precio: '50.00',
        categoria: 'chamoyadas'
    },
    {
        id: 'frape-01',
        titulo: 'Frappé de mazapan',
        imagen: './assets/productos/frape1.png',
        precio: '70.00',
        categoria: 'frape'
    },
    {
        id: 'frape-02',
        titulo: 'Frappé de oreo',
        imagen: './assets/productos/frape2.png',
        precio: '55.00',
        categoria: 'frape'
    },
    {
        id: 'frape-03',
        titulo: 'Frappé de moka',
        imagen: './assets/productos/frape3.png',
        precio: '55.00',
        categoria: 'frape'
    },
    {
        id: 'frape-04',
        titulo: 'Frappé de gansito',
        imagen: './assets/productos/frape4.png',
        precio: '70.00',
        categoria: 'frape'
    },
    {
        id: 'frape-05',
        titulo: 'Frappé de pingüino',
        imagen: './assets/productos/frape5.png',
        precio: '70.00',
        categoria: 'frape'
    },
    {
        id: 'frape-06',
        titulo: 'Frappé de nutella',
        imagen: './assets/productos/frape6.png',
        precio: '70.00',
        categoria: 'frape'
    },
    {
        id: 'frape-07',
        titulo: 'Frappé de ferrero',
        imagen: './assets/productos/frape7.png',
        precio: '70.00',
        categoria: 'frape'
    },
    {
        id: 'postre-01',
        titulo: 'Cheesecake de fresa',
        imagen: './assets/productos/postre1.png',
        precio: '40.00',
        categoria: 'postre'
    },
    {
        id: 'postre-02',
        titulo: 'Tarta de fresa',
        imagen: './assets/productos/postre2.png',
        precio: '40.00',
        categoria: 'postre'
    },
    {
        id: 'postre-03',
        titulo: 'Pastel de 3 leches',
        imagen: './assets/productos/postre3.png',
        precio: '35.00',
        categoria: 'postre'
    },
    {
        id: 'postre-04',
        titulo: 'Waffles',
        imagen: './assets/productos/postre4.png',
        precio: '30.00',
        categoria: 'postre'
    },
    {
        id: 'postre-05',
        titulo: 'Tiramisú',
        imagen: './assets/productos/postre5.png',
        precio: '45.00',
        categoria: 'postre'
    },
    {
        id: 'postre-06',
        titulo: 'Cupcakes',
        imagen: './assets/productos/postre6.png',
        precio: '75.00',
        categoria: 'postre'
    },
    {
        id: 'postre-07',
        titulo: 'Pastel de zanahoria',
        imagen: './assets/productos/postre7.png',
        precio: '35.00',
        categoria: 'postre'
    },
    {
        id: 'postre-08',
        titulo: 'Pay de limón',
        imagen: './assets/productos/postre8.png',
        precio: '45.00',
        categoria: 'postre'
    }
]


//cargando productos desde el arreglo
function cargarProductos() {
    const contenedorProductos = document.getElementById('contenedor-productos');
    arrayProductos.forEach((producto) => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <div class="container-img-productos">
            <img src="${producto.imagen}" alt="${producto.titulo}">
                <img src="assets/delete-a.png" class="icono-eliminar-productos">
                <img src="assets/edit-a.png" class="icono-editar-productos">
        </div>
                <p class="productos-titulo">${producto.titulo}</p>
                <span class="productos-precio">$ ${producto.precio}</span>`
        contenedorProductos.append(div);
    });
}

cargarProductos();

/* document.querySelector(".boton-busqueda").addEventListener('click', () => {
    let input_busqueda = document.querySelector(".input-busqueda").value;
    /* let nombre_productos = document.querySelectorAll(".titulo-productos");
    let cards = document.querySelectorAll(".producto");
    const div = document.querySelector(".header-barra-busqueda");
    console.log(input_busqueda);

   const container= document.querySelector(".header-barra-busqueda");
    arrayProductos.forEach((producto) => {
        if (producto.titulo.toLowerCase().includes(input_busqueda.toLowerCase())) {
            console.log("funciona");
          
           
        }
    })

}); */
