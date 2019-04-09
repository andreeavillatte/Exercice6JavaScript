function myFunction() {
    // Récuperation des variables
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    // Calculer le Modulo (test) 
    RestDeLaDivision = nombre1 % nombre2;
        // Verifier si la saisie est un nombre
        if (isNaN(nombre1) || isNaN(nombre2)){
            alert("Merci de n'entrer que des chiffres...");
        } else {
            alert("1er nombre: " + nombre1 + "\n2ème nombre: " + nombre2 + "\nRestDeLaDivision  : " + RestDeLaDivision);
        }   
} // fin de fonction
