const auto1 = "Peugeot";
const auto2 = " Citroen";
const auto3 = "Chevrolet"; 

alert ("Elegi tu marca preferida de auto \n1. Peugeot\n2. Citroen\n3. Chevrolet");

let elegiTuAuto = parseInt(prompt("Elegi tu marca preferida"))

while (elegiTuAuto > 3){
        alert ("por favor ingrese un marca valida")
    elegiTuAuto = parseInt(prompt("ingresar una marca valida"))
}

if (elegiTuAuto == 1){
    alert("Gracias por tu solicitud para tu compra de tu" + auto1)

    let peugeot ={
    marca:'peugeot',
    modelo: '308',
    peso: '1100',
    color: 'negro'
    
    }
    alert('elegiste tu peugeot 308')
    console.log('peugeot', peugeot)
}

else if(elegiTuAuto == 2){
    alert("Gracias por tu solicitud para tu compra de tu" + auto2)

    let citroen = {
    marca: 'citroen',
    modelo: 'ds3',
    peso: '1200',
    color: 'blanco'
    
    }
    
    alert('elegiste tu citroen ds3')
    console.log('citroen', citroen)
}

else if ( elegiTuAuto == 3){
    alert("Gracias por tu solicitud para tu compra de tu" + auto3)

    let chevrolet = {
        marca:'chevrolet',
        modelo: 'onix',
        peso: '11800',
        color: 'plata'
    
    }
    alert('elegiste tu chevrolet onix')
    console.log('chevrolet', chevrolet)
}