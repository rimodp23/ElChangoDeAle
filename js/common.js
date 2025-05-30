 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
	
	
	
	    const textoQuienesSomos = `Grupo de emprendedores autónomos e independientes,
		de los cuales nos hemos puesto de acuerdo para consolidar una unión en beneficio del cliente particular,
		para satisfacer las necesidades en la compra de productos cotidianos, 
		desde el armado del paquete en el depósito hasta la llegada final al hogar. 
		Fundada y gestionada por Alejandro D Rimoli.`;

    // Aplicar como title (tooltip)
    const btnQuienesSomos = document.getElementById("InfoQuienesSomos-Barra");
    btnQuienesSomos.setAttribute("title", textoQuienesSomos);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnQuienesSomos);

    // Aplicar como contenido de <p>
    const parrafoQuienesSomos = document.getElementById("contenidoQuienesSomos");
    parrafoQuienesSomos.innerText = textoQuienesSomos;
	
	
	
	
	
		    const textoEnvio = `Menos de 3km (30 cuadras) envío gratis, mayor distancia consultar.
Entrega días Miércoles y Viernes (2 días de antelación y antes de las 15hs).
Ejemplo: Si se pide un Lunes a las 14:30hs, llega el Miércoles. Si se pide un Lunes a las 15:30hs ya pasaría a entregarse el Viernes.`;

    // Aplicar como title (tooltip)
    const btnEnvio = document.getElementById("InfoEnvios-Barra");
    btnEnvio.setAttribute("title", textoEnvio);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnEnvio);

    // Aplicar como contenido de <p>
    const parrafoEnvio = document.getElementById("contenidoEnvios");
    parrafoEnvio.innerText = textoEnvio;
	
	
	
	
	const textoFormasPago = `- Mercado Pago<br>- Efectivo`;

	// Aplicar como contenido del tooltip con HTML
	const btnFormasPago = document.getElementById("InfoFormasPago-Barra");
	btnFormasPago.setAttribute("title", textoFormasPago);
	btnFormasPago.setAttribute("data-bs-html", "true"); // por si acaso

	// Activar tooltip HTML
	new bootstrap.Tooltip(btnFormasPago);

	// Aplicar también dentro del <p>
	const parrafoFormasPago = document.getElementById("contenidoFormasPago");
	parrafoFormasPago.innerHTML = textoFormasPago;


	
	
	const textoComoComprar = `Por el momento nuestra vía más directa para realizar los pedidos es mediante WhatsApp. 
	Puedes llegar al mismo mediante las redes también.`;

    // Aplicar como title (tooltip)
    const btnComoComprar = document.getElementById("InfoComoComprar-Barra");
    btnComoComprar.setAttribute("title", textoComoComprar);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnComoComprar);

    // Aplicar como contenido de <p>
    const parrafoComoComprar = document.getElementById("contenidoComoComprar");
    parrafoComoComprar.innerText = textoComoComprar;