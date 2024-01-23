
function findDeatils() {

    // creo un ciclo che vada dal primo all'ultimo elemento dell array
    for (let member in team) {

        // per ogni elemento recupero il valore in una variabile
        let person = team[member];

        // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
        for (let detail in person) {

            // recupero il valore della dell'argomento in una variabile
            let detailValue = person[`${detail}`];
            // restituisco in console la chiave + la varibile
            console.log(detail,':',detailValue);

        }
        
    }

}