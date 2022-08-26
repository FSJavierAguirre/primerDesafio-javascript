let nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
alert('¡Un gusto conocerte '+nombreCliente+'!')
let tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
tipoWeb = tipoWeb.toLocaleLowerCase();
let totalCotizacion = 0

while((tipoWeb !== 'blog') && (tipoWeb !== 'ecommerce') && (tipoWeb !== 'landing page')){
    alert('Por favor, ingresa una de las opciones anteriores.');
    tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
    tipoWeb = tipoWeb.toLocaleLowerCase
} 

if(tipoWeb === 'blog'){
    totalCotizacion = totalCotizacion + 150000
    primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \nNoticias \nViajes \nRecetas \nBitácora \nCine y entretenimiento \nOtro');
    segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \nDe 1 a 5 secciones. \nDe 5 a 10 secciones. \nMás de 10 secciones.');
    terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \nDe 1 a 10 entradas mensuales. \nDe 11 a 20 entradas mensuales. \nMás de 20 entradas mensuales.');
    cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \nSí \nNo')
} else if(tipoWeb === 'ecommerce'){
    totalCotizacion = totalCotizacion + 250000
    primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \nTecnología \nServicios \nAlimentos \nDeco \nJuguetes \nOtro');
    segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \nDe 1 a 20 productos. \nDe 21 a 50 productos. \nDe 51 a 100 productos. \nMás de 100 productos.');
    terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \nSí \nNo');
    cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \nSí \nNo');
    quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \nSí \nNo');
    sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \nSí \nNo')
} else if(tipoWeb === 'landing page'){
    totalCotizacion = totalCotizacion + 150000
    primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \nUn producto \nUn servicio \nUna marca \nUna ONG');
    segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantews? \nSí \nNo');
    terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \nSí \nNo')
}

alert('La cotización de tu página web es '+totalCotizacion+ ' pesos chilenos, ' +nombreCliente+ '.')



