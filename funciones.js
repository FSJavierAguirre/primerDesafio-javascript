let nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
alert('¡Un gusto conocerte '+nombreCliente+'!')
let tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
tipoWeb = tipoWeb.toLocaleLowerCase();
let montoBase = 0
valorSegundaOpcionBlog = 0
valorTerceraOpcionBlog = 0
valorCuartaOpcionBlog = 0

while((tipoWeb !== 'blog') && (tipoWeb !== 'ecommerce') && (tipoWeb !== 'landing page')){
    alert('Por favor, ingresa una de las opciones anteriores.')
    tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
    tipoWeb = tipoWeb.toLocaleLowerCase()
} 

if(tipoWeb === 'blog'){
    montoBase = montoBase + 150000
    primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \nNoticias \nViajes \nRecetas \nBitácora \nCine y entretenimiento \nOtro')
    primeraOpcionBlog = primeraOpcionBlog.toLocaleLowerCase()
    segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \nDe 1 a 5 secciones. \nDe 6 a 10 secciones. \nMás de 10 secciones.')
    segundaOpcionBlog = segundaOpcionBlog.toLocaleLowerCase()
    if(segundaOpcionBlog === 'de 1 a 5 secciones'){
        valorSegundaOpcionBlog = valorSegundaOpcionBlog + 50000
    } else if(segundaOpcionBlog === 'de 6 a 10 secciones'){
        valorSegundaOpcionBlog = valorSegundaOpcionBlog + 75000
    } else if(segundaOpcionBlog === 'mas de 10 secciones'){
        valorSegundaOpcionBlog = valorSegundaOpcionBlog + 100000
    } terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \nDe 1 a 10 entradas mensuales. \nDe 11 a 20 entradas mensuales. \nMás de 20 entradas mensuales.')
    terceraOpcionBlog = terceraOpcionBlog.toLocaleLowerCase()
    if(terceraOpcionBlog === 'de 1 a 10 entradas mensuales'){
        valorTerceraOpcionBlog = valorTerceraOpcionBlog + 50000
    } else if(terceraOpcionBlog === 'de 11 a 20 entradas mensuales'){
        valorTerceraOpcionBlog = valorTerceraOpcionBlog + 75000
    } else if(terceraOpcionBlog === 'mas de 20 mensuales'){
        valorTerceraOpcionBlog = valorTerceraOpcionBlog + 100000
    } cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \nSí \nNo')
    cuartaOpcionBlog = cuartaOpcionBlog.toLocaleLowerCase()
    if(cuartaOpcionBlog === 'si'){
        valorCuartaOpcionBlog = valorCuartaOpcionBlog + 100000
    } else{
        valorCuartaOpcionBlog = 0
    }
} 

function sumarblog(){
    const numero1 = valorSegundaOpcionBlog
    const numero2 = valorTerceraOpcionBlog
    const numero3 = valorCuartaOpcionBlog
    const resultado = montoBase + numero1 + numero2 + numero3
    return resultado(montoBase + numero1 + numero2 + numero3)
}
console.log(sumarblog)
alert('La cotización de tu página web es '+sumarblog+ ' pesos chilenos, ' +nombreCliente+ '.')
















// else if(tipoWeb === 'ecommerce'){
//     montoBase = montoBase + 250000
//     primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \nTecnología \nServicios \nAlimentos \nDeco \nJuguetes \nOtro')
//     primeraOpcionEcommerce = primeraOpcionEcommerce.toLocaleLowerCase()
//     segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \nDe 1 a 20 productos. \nDe 21 a 50 productos. \nDe 51 a 100 productos. \nMás de 100 productos.')
//     segundaOpcionEcommerce = segundaOpcionEcommerce.toLocaleLowerCase()
//     terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \nSí \nNo')
//     terceraOpcionEcommerce = terceraOpcionEcommerce.toLocaleLowerCase()
//     cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \nSí \nNo')
//     cuartaOpcionEcommerce = cuartaOpcionEcommerce.toLocaleLowerCase()
//     quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \nSí \nNo')
//     quintaOpcionEcommerce = quintaOpcionEcommerce.toLocaleLowerCase()
//     sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \nSí \nNo')
//     sextaOpcionEcommerce = sextaOpcionEcommerce.toLocaleLowerCase()
// } 

// else if(tipoWeb === 'landing page'){
//     montoBase = montoBase + 150000
//     primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \nUn producto \nUn servicio \nUna marca \nUna ONG')
//     primeraOpcionLanding = primeraOpcionLanding.toLocaleLowerCase()
//     segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \nSí \nNo')
//     segundaOpcionLanding = segundaOpcionLanding()
//     terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \nSí \nNo')
//     terceraOpcionLanding = terceraOpcionLanding.toLocaleLowerCase()
// }

// alert('La cotización de tu página web es '+montoBase+ ' pesos chilenos, ' +nombreCliente+ '.')