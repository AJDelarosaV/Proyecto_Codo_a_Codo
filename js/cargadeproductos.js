///////////////////////////////////
//////LISTA DE PRODUCTOS///////////
///////////////////////////////////

const productos = [
    {
        titulo: 'Acrilico 50cc',
        src: 'img/productos/productos de manualidades/acrilico_50cc.webp',
        precio: '$300'
        },
    {
        titulo: 'Cera de Soja 1kg',
        src: 'img/productos/productos de manualidades/cera_soja_1kg.webp',
        precio: '$1400'
        },
    {
        titulo: 'Cinta engomada',
        src: 'img/productos/productos de manualidades/cinta_engomada_flores.jpg',
        precio:'$500'
        },
    {
        titulo: '>Gibre 50g',
        src: 'img/productos/productos de manualidades/gibre_50gr.webp',
        precio: '$350'
        },
    {
        titulo: 'Yeso 1kg',
        src: 'img/productos/productos de manualidades/yeso_1kg.webp',
        precio:'$250'
        },
    {
        titulo: 'Limpia pipa 10',
        src: 'img/productos/productos de manualidades/limpia_pipa_10.webp',
        precio:'$200'
        },
    {
        titulo: 'Limpia pipa metalizado 5',
        src: 'img/productos/productos de manualidades/limpia_pipa_5_metalizado.webp',
        precio:'$150'
        },
    {
        titulo: 'Pabilo 1mts',
        src: 'img/productos/productos de manualidades/pabilo_1mts.jpg',
        precio:'$200'
        },
    {
        titulo: 'Palitos brochetes',
        src: 'img/productos/productos de manualidades/palitos_brochetes.jpg',
        precio:'$500'
        },
    {
        titulo: '5 Acrílicos',
        src: 'img/productos/productos de manualidades/pinturas_acusarelas.webp',
        precio:'$1.150'
        },
    {
        titulo: 'Hilo yute rollo',
        src: 'img/productos/productos de manualidades/hilo_yute_rollo.webp',
        precio:'$1.400'
        },
    {
        titulo: 'Bandera argentina de Tela',
        src: 'img/productos/argentina/BANDERA DE ARGENTINA DE TELA.jpg',
        precio:'$1.500'
        },
    {
        titulo: 'MARIPOSAS X 6 UNIDADES',
        src: 'img/productos/reposteria/MARIPOSAS X 6 UNIDADES.webp',
        precio:'$700'
        },
    {
        titulo: 'CHOCOLATE ALPINO 500GR',
        src: 'img/productos/reposteria/CHOCOLATE ALPINO 500 GR.webp',
        precio:'$1000'
        },
    {
        titulo: 'Maquillaje en barra',
        src: 'img/productos/argentina/MAQUILLAJE EN BARRA ARGENTINA.jpg',
        precio:'$400'
        },
    {
        titulo: 'Set para fotos argentina',
        src: 'img/productos/argentina/SET PARA FOTOS ARGENTINA.jpg',
        precio:'$850'
        },
    {
        titulo: 'CAJA FELIZ SIRENITA X 5',
        src: 'img/productos/vasos-platos/CAJA FELIZ SIRENITA X 5.webp',
        precio:'$500'
        },
    {
        titulo: 'POCHOCLERA ROBLOX',
        src: 'img/productos/vasos-platos/POCHOCLERA ROBLOX.webp',
        precio:'$550'
        },
    {
        titulo: '10 antifaz fluo',
        src: 'img/productos/carnaval carioca/10 ANTIFAZ FLUO.webp',
        precio:'$500'
        },
    {
        titulo: '10 gorross plasticos',
        src: 'img/productos/carnaval carioca/10 GORROS FLUOR PLASTICO.webp',
        precio:'$1000'
        },
    {
        titulo: '2 nieve artificial',
        src: 'img/productos/carnaval carioca/2 NIEVE ARTIFICIAL EN AEROSOL.webp',
        precio:'$1000'
        },
    {
        titulo: '6 corbatas plasticas',
        src: 'img/productos/carnaval carioca/6 CORBATAS FLUOR PLASTICO.webp',
        precio:'$700'
        },
    {
        titulo: 'Antifaz veneciano',
        src: 'img/productos/carnaval carioca/ANTIFAZ VENECIANO CON PLUMA.webp',
        precio:'$500'
        },
    {
        titulo: 'Banderin stamping',
        src: 'img/productos/carnaval carioca/BANDERIN STAMPING.webp',
        precio:'$700'
        },
    {
        titulo: 'BENGALA DE HUMO',
        src: 'img/productos/carnaval carioca/BENGALA DE HUMO.webp',
        precio:'$300'
        },
    {
        titulo: 'COMBO CARIOCA LED FLUOR',
        src: 'img/productos/carnaval carioca/COMBO CARIOCA LED FLUOR.webp',
        precio:'$900'
        },
    {
        titulo: 'MASCARA MEDIA CALAVERA',
        src: 'img/productos/carnaval carioca/MASCARA MEDIA CALAVERA.jpg',
        precio:'$1500'
        },
    {
        titulo: 'TUBO DE PULSERAS NEON X 50 UNIDADES',
        src: 'img/productos/carnaval carioca/TUBO DE PULSERAS NEON X 50 UNIDADES.webp',
        precio:'$2500'
        },
    {
        titulo: 'BASE PARA 7 GLOBOS',
        src: 'img/productos/globos/BASE PARA 7 GLOBOS.jpeg',
        precio:'$250'
        },
    {
        titulo: 'VASOS POLIPAPEL',
        src: 'img/productos/vasos-platos/VASOS POLIPAPEL.jpg',
        precio:'$850'
        },
    {
        titulo: 'GLOBO COLA DE SIRENA',
        src: 'img/productos/globos/GLOBO COLA DE SIRENA.webp',
        precio:'$800'
        },
    {
        titulo: 'GLOBO MET NuMERO AZUL',
        src: 'img/productos/globos/GLOBO MET NuMERO AZUL.webp',
        precio:'$500'
        },
    {
        titulo: 'GLOBO PINGUINO',
        src: 'img/productos/globos/GLOBO PINGUINO.webp',
        precio:'$5200'
        },
    {
        titulo: 'PIÑATA ROBLOX',
        src: 'img/productos/piñatas/PIÑATA ROBLOX.webp',
        precio:'$5200'
        }
];

///////////////////////////////////////
//////CARGAMOS  LOS PRODUCTOS///////////
////////////////////////////////////////

for (var i = 0; i < productos.length; i++) {
    var titulo = productos[i].titulo;
    var src = productos[i].src;
    var precio = productos[i].precio;

    cargarProductos(titulo, src, precio);
}

//////////////////////////////////////////////////
//////FUNCION PARA CARGAR LOS PRODUCTOS///////////
//////////////////////////////////////////////////
function cargarProductos(titulo, src, precio) {
    var item = document.createElement('div');
    item.classList.add('producto');
    var itemContenedor = document.getElementsByClassName('container-productos')[0];

    var itemContenidoProducto = `<span class="titulo-producto">${titulo}</span>
    <img src='${src}' alt=""
        class="img-producto">
    <span class="precio-producto">${precio}</span>
    <button class="btn-agregar-producto">Agregar al Carrito</button>`;

    item.innerHTML = itemContenidoProducto;
    itemContenedor.append(item);

}