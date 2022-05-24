// const precioOriginal = 120;
// const descuento = 18;




function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDecuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDecuento) / 100;

    return precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDecuento,
//     precioConDescuento
// })
 
function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `el precio con descuento es: ${precioConDescuento}`
}
