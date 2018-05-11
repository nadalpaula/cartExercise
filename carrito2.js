let sendCart = JSON.parse(localStorage.getItem('prod'));

let total = 0
for (var i = sendCart.length - 1; i >= 0; i--) {
    var parrafo = $('.total')
    var finalCart = '<p>' + sendCart[i].name + ":  " + sendCart[i].price + '</p>'
    var numeros = parseInt(sendCart[i].price)

    total = total + numeros

    $('#shoppingAppend').append(finalCart)
    parrafo.html("")
    parrafo.append("TOTAL:" + total)
}