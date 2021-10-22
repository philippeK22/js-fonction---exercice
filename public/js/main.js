// ## EXO1
// ## Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

let reverseNumber = a =>{
    a= a+ ""
    return a.split("").reverse().join("");
}
console.log(reverseNumber(851));


// #### EXO2
// ## Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// ## Qui répond "Le num x est divisible par 2 x:2 = z"
// ## Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

let chiffre = Number(prompt("choissisez un chiffre ?"));
let divPar2 = (a) =>{
    switch (a % 2) {
        case 0:
            console.log(`le num ${a} est divisible par 2 ${a}:2 = ${a/2}`);
            
            break;
            case 1:
                console.log(`ce nombre n'est pas divisible par2`);
                break
    
        default:false
          console.log(`ce que vous avez mis n'est pas un nombre`);
            break;
    }
}

divPar2(chiffre);

// #### EXO3
// ## Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

let logIn = ()=> {
let questions = prompt('entrez un mots de passe ?').toLowerCase();
let count = 3;
 while (count> 0) {
     if (questions === "mdp") {
         return "vous etes connectés"
    }
    else{
        alert(`mauvais mot de passe vous avez encore ${count} essaie `);
        questions = prompt('entrez un mots de passe ?').toLowerCase();
        count--
    }
         
}
     
}
console.log(logIn());
    
  
        



// #### EXO4
// ## Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// ## Avec la capture d'écran reproduisez les entrées / sorties de la classe

let tab=[];
let coding20 = [];
let rentrer = (...nom) =>{
    nom.forEach(el =>{
        coding20.push(el)
    })
    return(`${nom} est sorti de la classe`);
    let sortir = (nom) => {
        coding20 = coding20.filter(el => el !== nom)
        return(`${nom} est sorti de la classe`);
    }
}

let boucle = true;
while (boucle && coding20.length<11) {
    let stagiaire = prompt("personne à introduire dans la coding");
    let rep = prompt("veut tu faire une action avec l'étudiant ? (oui ou non)").toLowerCase();
    if (rep == "oui") {
        let choix = prompt("Veux tu ajouter ou supprimer une personne? (ajou ou supp)");
        if (choix === "supp") {
            if (coding20.includes(stagiaire) == true) {
                sortir(stagiaire)

                
            }
            else{
                console.log("la personne n'éxiste pas impossible de la supprimé");
            }
            console.log(coding20);
            
        }
        else if (choix === "ajou") {
            rentrer(stagiaire);
            console.log(coding20);
            
        }
        else{
            console.log('methode non reconnu');
        }
        
    }
    else if (choix === "non") {
        

        
    }{

    }
    
}


