/**
 * funzione che trova le singole chiavi e valori degli oggetti contenuti in un array
 * e le stampa in pagina 
 * @param {Array} team - array da cui prendere i dati
 * @param {object} container - elemento HTML in cui andranno stampati i dati
 */
function findDeatils(team, container) {

    // creo un ciclo che vada dal primo all'ultimo elemento dell array
    for (let member in team) {

        // per ogni elemento recupero il valore in una variabile
        let person = team[member];

        // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
        for (let detailKey in person) {

            // recupero il valore della dell'argomento in una variabile
            let detailValue = person[`${detailKey}`];
            
            // all'interno del ciclo precedente chiamo la funzione per stampare
            printDeatils (container, detailKey, detailValue);

        }
        
    }

}

/**
 * funzione che stampa i dati in pagina
 * @param {object} container - elemento HTML in cui andranno stampati i dati
 * @param {string} key - chiave dell'argomento
 * @param {string} value - valore dell'argomento
 */
function printDeatils(container, key, value) {

    // creo un nuovo elemento html .card
    let card = document.createElement('div');
    // l'HTML di card dovrà contenere gli elementi presi dall'oggetto
    card.innerHTML = `
    <p>${key}: ${value}</p>
    `
    
    // li metto tutti nel container
    container.appendChild(card);

}