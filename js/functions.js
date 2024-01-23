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

        // creo un nuovo elemento html .card
        let card = document.createElement('div');
        // gli assegno la classe team-member
        card.classList.add('team-member');

        // creo variabile che conterrà le stringhe da inserire nell'html
        let cardChild = '';

        // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
        for (let detailKey in person) {

            // recupero il valore della dell'argomento in una variabile
            let detailValue = person[`${detailKey}`];
            
            // se la chiave corrisponde alla stringa image
            if (detailKey === 'image') {

                // l'HTML di card dovrà essere diverso
                cardChild += `
                    <img src="./img/${detailValue}" alt="${detailValue}">
                    `

            } else if (detailKey === 'name') {

                // l'HTML di card dovrà contenere gli elementi presi dall'oggetto
                cardChild += `
                <h5 class="card-title mt-3 ms-2">${detailValue}</h5> 
                `

            } else {

                cardChild += `
                <p class="card-text ms-2">${detailValue}</p>
                `
            }

        }

        card.innerHTML = cardChild;

        // li metto tutti nel container
        container.appendChild(card);
        
    }

}

/**
//  * funzione che stampa i dati in pagina
//  * @param {object} container - elemento HTML in cui andranno stampati i dati
//  * @param {string} key - chiave dell'argomento
//  * @param {string} value - valore dell'argomento
//  */
// function printDeatils(container, key, value) {

    

//     // l'HTML di card dovrà contenere gli elementi presi dall'oggetto
//     let cardChild = `
//         <p class="card-text mt-3 ms-2">${value}</p> 
//         `
//     // se la chiave corrisponde alla stringa image
//     if (key === 'image') {

//         // l'HTML di card dovrà essere diverso
//         cardChild = `
//             <img src="./img/${value}" alt="${value}">
//             `

//     } 

//     cardChild += cardChild;

//     return cardChild;

// }