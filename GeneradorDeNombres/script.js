function generarNombre (){
    var nombres = ['Joel', 'Alicia', 'Cristian', 'Javier', 'Andrea', 'Jorge', 'Anadali', 'Mayel'];
    var apellido1 = ['Pech', 'Tun', 'Estrella', 'Dzul', 'Villanueva', 'Campos','Canul','Can'];  
    var apellido2 = ['Tun', 'Pacheco', 'Canul', 'Ventura', 'Aranda', 'Castillo','Dzul','Colli'];

    var indice1 = Math.floor(Math.random() *nombres.length);
    var indice2 = Math.floor(Math.random() *apellido1.length);
    var indice3 = Math.floor(Math.random() *apellido2.length);

    var nombres = nombres[indice1];
    var apellido1 = apellido1[indice2];
    var apellido2 = apellido2[indice3];

    var nombreCompleto = (nombres +" "+ apellido1 +" "+ apellido2);  
    document.getElementById("resultado").textContent = nombreCompleto;
}
