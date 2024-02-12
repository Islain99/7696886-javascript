// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

// Déclaration de la boucle for contenant les instructions d'éxécution 
for (let index = 0; index < listeMots.length; index++) {
    const element = listeMots[index];

    // Déclaration de la variable contenant le mot saisi par l'utilisateur
    // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
    let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])    
    if ( motUtilisateur === element) {
        console.log("Bravo !")
        score += 1
    } else{
        console.log("Vous avez fait une erreur de frappe")
    }
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")
