let nombreCliente = prompt('¡Muchísimas gracias por interesarte en mi trabajo como desarrollador! \nPor favor, dime cuál es tu nombre: ')
alert('¡Un gusto conocerte '+nombreCliente+'!')
let tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
tipoWeb = tipoWeb.toLocaleLowerCase();
montoBase = 0
valorPrimeraOpcion = 0
valorSegundaOpcion = 0
valorTerceraOpcion = 0
valorCuartaOpcion = 0
valorQuintaOpcion = 0
valorSextaOpcion = 0

while((tipoWeb !== 'blog') && (tipoWeb !== 'ecommerce') && (tipoWeb !== 'landing page')){
    alert('Por favor, ingresa una de las opciones anteriores.')
    tipoWeb = prompt('Cuéntame, que tipo de página web necesitas cotizar: \nBlog \neCommerce \nLanding page')
    tipoWeb = tipoWeb.toLocaleLowerCase()
} 

if(tipoWeb === 'blog'){
    montoBase = 150000
    primeraOpcionBlog = prompt('¿Sobre qué quieres hablar en tu blog? Elige una opción: \nNoticias \nViajes \nRecetas \nBitácora \nCine y entretenimiento \nOtro')
    primeraOpcionBlog = primeraOpcionBlog.toLocaleLowerCase()
    segundaOpcionBlog = prompt('¿Cuantas secciones o categorías tiene tu blog? \nDe 1 a 5 secciones. \nDe 6 a 10 secciones. \nMás de 10 secciones.')
    segundaOpcionBlog = segundaOpcionBlog.toLocaleLowerCase()
    if(segundaOpcionBlog === 'de 1 a 5 secciones'){
        valorSegundaOpcion = 50000
    } else if(segundaOpcionBlog === 'de 6 a 10 secciones'){
        valorSegundaOpcion = 75000
    } else if(segundaOpcionBlog === 'mas de 10 secciones'){
        valorSegundaOpcion = 100000
    } terceraOpcionBlog = prompt('¿Cuántas entradas mensuales tendrá tu blog? \nDe 1 a 10 entradas mensuales. \nDe 11 a 20 entradas mensuales. \nMás de 20 entradas mensuales.')
    terceraOpcionBlog = terceraOpcionBlog.toLocaleLowerCase()
    if(terceraOpcionBlog === 'de 1 a 10 entradas mensuales'){
        valorTerceraOpcion = 50000
    } else if(terceraOpcionBlog === 'de 11 a 20 entradas mensuales'){
        valorTerceraOpcion = 75000
    } else if(terceraOpcionBlog === 'mas de 20 mensuales'){
        valorTerceraOpcion = 100000
    } cuartaOpcionBlog = prompt('¿Tu blog contará con un foro? \nSí \nNo')
    cuartaOpcionBlog = cuartaOpcionBlog.toLocaleLowerCase()
    if(cuartaOpcionBlog === 'si'){
        valorCuartaOpcion = 100000
    } else{
        valorCuartaOpcion = 0
    }
}

else if(tipoWeb === 'ecommerce'){
    montoBase = 250000
    primeraOpcionEcommerce = prompt('¿Sobre qué es tu marca? \nTecnología \nServicios \nAlimentos \nDeco \nJuguetes \nOtro')
    primeraOpcionEcommerce = primeraOpcionEcommerce.toLocaleLowerCase()
    segundaOpcionEcommerce = prompt('¿Cuantos productos manejas? \nDe 1 a 20 productos. \nDe 21 a 50 productos. \nMás de 50 productos.')
    segundaOpcionEcommerce = segundaOpcionEcommerce.toLocaleLowerCase()
    if(segundaOpcionEcommerce === 'de 1 a 20 productos'){
        valorSegundaOpcion = 0
    } else if(segundaOpcionEcommerce === 'de 21 a 50 productos'){
        valorSegundaOpcion = 100000
    } else if(segundaOpcionEcommerce === 'mas de 50 productos'){
        valorSegundaOpcion = 150000
    }
    terceraOpcionEcommerce = prompt('¿Cuentas con fotografías profesionales de tus productos? \nSí \nNo')
    terceraOpcionEcommerce = terceraOpcionEcommerce.toLocaleLowerCase()
    if(terceraOpcionEcommerce === 'si'){
        valorTerceraOpcion = 0
    } else if(terceraOpcionEcommerce === 'no'){
        valorTerceraOpcion = 100000
    }
    cuartaOpcionEcommerce = prompt('¿Tus clientes necesitan loguearse para comprar? \nSí \nNo')
    cuartaOpcionEcommerce = cuartaOpcionEcommerce.toLocaleLowerCase()
    if(cuartaOpcionEcommerce === 'si'){
        valorCuartaOpcion = 50000
    } else if(cuartaOpcionEcommerce === 'no'){
        valorCuartaOpcion = 0
    }
    quintaOpcionEcommerce = prompt('¿Tus clientes necesitarán un asistente virtual para realizar sus compras? \nSí \nNo')
    quintaOpcionEcommerce = quintaOpcionEcommerce.toLocaleLowerCase()
    if(quintaOpcionEcommerce === 'si'){
        valorQuintaOpcion = 50000
    } else if(quintaOpcionEcommerce === 'no'){
        valorQuintaOpcion = 0
    }
    sextaOpcionEcommerce = prompt('¿Tienes varias categorías de productos? \nSí \nNo')
    sextaOpcionEcommerce = sextaOpcionEcommerce.toLocaleLowerCase()
}

else if(tipoWeb === 'landing page'){
    montoBase = 150000
    primeraOpcionLanding = prompt('¿Que quieres promocionar en tu landing page? \nUn producto \nUn servicio \nUna marca \nUna ONG')
    primeraOpcionLanding = primeraOpcionLanding.toLocaleLowerCase()
    segundaOpcionLanding = prompt('¿Necesitas captar datos de los visitantes? \nSí \nNo')
    segundaOpcionLanding = segundaOpcionLanding.toLocaleLowerCase()
    if(segundaOpcionLanding === 'si'){
        valorSegundaOpcion = 100000
    } else if(segundaOpcionLanding === 'no'){
        valorSegundaOpcion = 0
    }
    terceraOpcionLanding = prompt('¿Necesitas enviarle algún regalo a los visitantes? \nSí \nNo')
    terceraOpcionLanding = terceraOpcionLanding.toLocaleLowerCase()
    if(terceraOpcionLanding === 'si'){
        valorTerceraOpcion = 50000
    } else if(terceraOpcionLanding === 'no'){
        valorTerceraOpcion = 0
    }
}

function sumar(){
    const resultado = montoBase + valorSegundaOpcion + valorTerceraOpcion + valorCuartaOpcion + valorQuintaOpcion + valorSextaOpcion
    return resultado
}
console.log(sumar())

function totalImpuestos(){
    const impuestos = sumar() * 1.19
    return impuestos
}

alert('La cotización de tu '+tipoWeb+ ' es '+totalImpuestos()+ ' pesos chilenos, ' +nombreCliente+ '.')