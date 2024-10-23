/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/
// Fonction pour vérifier si une année est bissextile
function isBessextile(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}
// Fonction pour vérifier si une date est valide
function isValid(day, month, year) {
    if (day && month && year){
        if (day > 0 && month > 0 && year >= 0) {
            if (month <= 12){
                if (day <= 31){
                    if (month === 1 || month === 3 || month === 7 || month === 8 || month === 10 || month === 12) {
                        return true;
                    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
                        return day <= 30;
                    } else if (isBessextile(year)){
                        return day <= 29;
                    }
                }
            }
        }
    }
}
// Demander à l'utilisateur de saisir une date

// Utilisation de la fonction isValid pour vérifier la date
if (isValid(day= parseInt(prompt("Entrez un jour")), month =parseInt(prompt("Entrez un mois")), year=parseInt(prompt("Entrez un année")))) {
    console.log('La date est valide');
} else
    console.log('La date n’est pas valide')
