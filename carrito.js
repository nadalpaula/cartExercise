let productos = []

$('.carrito').on('click',function(){
	var hijos = $(this).children();
	
	//console.log(hijos)
	var imagen = $(this).children('img').html('src')
	//console.log(imagen)
	var nombre = $(this).children('.title').html()
	//console.log(nombre)
	var precio = hijos.eq(2).find('.d').html()
	//console.log(precio)
	let producto = {
		images: imagen,
		name: nombre, 
		price: precio,
	}
	
	productos.push(producto)
	localStorage.setItem('prod',JSON.stringify(productos))
	console.log(productos)
})