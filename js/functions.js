
function printDeatils(container) {

    // creo un ciclo che vada dal primo all'ultimo elemento dell array
    for (let member in team) {

        // per ogni elemento recupero il valore in una variabile
        let person = team[member];

        // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
        for (let detail in person) {

            // recupero il valore della dell'argomento in una variabile
            let detailValue = person[`${detail}`];
            
            // creo un nuovo elemento html .card
            let card = document.createElement('div');
            // l'HTML di card dovrà contenere gli elementi presi dall'oggetto
            card.innerHTML = `
            <p>${detail}: ${detailValue}</p>
            `
            // 
            container.appendChild(card);

        }
        
    }

}