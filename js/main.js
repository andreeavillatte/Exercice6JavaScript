function resteDivision() {
    // Declarer le deux variables. Je cherche les valeurs saisies par l'ID 
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    //
    resteDivision = firstNumber % secondNumber;
    // Verifier que les deux chiffres étaient saisies et quelles sont de nombre
    // je mets la condition de faire le calcul seulement si la saisie était faite corecte: si une valeure était introduites et si elle est un chiffre
    if(!firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)){
        alert('Merci de n\'entrer que des chiffres');
    } else {
        alert('Le reste de la division est ' + resteDivision);
    }
}
