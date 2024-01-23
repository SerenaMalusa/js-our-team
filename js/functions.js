/**
 * funzione che dato un array di persone stampa una card per ogni persona
 * @param {Array} team - array da ciclare
 * @param {HTMLAnchorElement} container - elemento in cui stampare le cards 
 */
function printTeam (team, container) {

    // creo un ciclo che vada dal primo all'ultimo elemento dell array
    for (let member in team) {

        // per ogni elemento recupero il valore in una variabile
        let person = team[member];

        // creo la card, la riempio e la metto nel container
        let card = createCard();
        card.innerHTML = addCardContent(person);
        container.appendChild(card);

    }

}


/**
 * funzione che prepara la singola card da inserire in pagina
 * @returns card - la card vuota pronta da riempire e inserire in pagina
 */
function createCard () {

    // creo la nuova card e le assegno la classe team-member
    let card = document.createElement('div');
    card.classList.add('team-member');

    return card;

}

/**
 * funzione che prende i dettagli della persona/oggetto e li trasforma per inserirli nell'html
 * @param {object} person -  persona(oggetto) i cui dettagli devo inserire nella card
 * @returns tags = tags html pronti per essere inseriti nella card
 */
function addCardContent (person) {

    // creo variabile che conterrà il mio html
    let tags = '';

    // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
    for (let key in person) {

        // recupero il valore della dell'argomento in una variabile
        let value = person[`${key}`];
        
        // se la chiave corrisponde alla stringa image
        if (key === 'image') {

            // preparo e aggiungo il tag immagine
            tags += `
                <img src="./img/${value}" alt="${value}">
                `

        // altrimenti se è uguale a name
        } else if (key === 'name') {

            // preparo e aggiungo il tag del titolo card
            tags += `
            <h5 class="card-title mt-3 ms-2">${value}</h5> 
            `
        
        // in tutti gli altri casi
        } else {

            // preparo e aggiungo il tag testo
            tags += `
            <p class="card-text ms-2">${value}</p>
            `
        }

    }

    // restituisco l'html preparato
    return tags;

}





















// /**
//  * funzione che trova le singole chiavi e valori degli oggetti contenuti in un array
//  * e le stampa in pagina 
//  * @param {Array} team - array da cui prendere i dati
//  * @param {object} container - elemento HTML in cui andranno stampati i dati
//  */
// function findDeatils(team, container) {

//     // creo un ciclo che vada dal primo all'ultimo elemento dell array
//     for (let member in team) {

//         // per ogni elemento recupero il valore in una variabile
//         let person = team[member];

//         // creo un nuovo elemento html .card
//         let card = document.createElement('div');
//         // gli assegno la classe team-member
//         card.classList.add('team-member');

//         // creo variabile che conterrà le stringhe da inserire nell'html
//         let cardContent = '';

//         // creo un ciclo che vada dal primo all'ultimo argomento del oggetto
//         for (let detailKey in person) {

//             // recupero il valore della dell'argomento in una variabile
//             let detailValue = person[`${detailKey}`];
            
//             // se la chiave corrisponde alla stringa image
//             if (detailKey === 'image') {

//                 // l'HTML di card dovrà essere diverso
//                 cardContent += `
//                     <img src="./img/${detailValue}" alt="${detailValue}">
//                     `

//             } else if (detailKey === 'name') {

//                 // l'HTML di card dovrà contenere gli elementi presi dall'oggetto
//                 cardContent += `
//                 <h5 class="card-title mt-3 ms-2">${detailValue}</h5> 
//                 `

//             } else {

//                 cardContent += `
//                 <p class="card-text ms-2">${detailValue}</p>
//                 `
//             }

//         }

//         card.innerHTML = cardContent;

//         // li metto tutti nel container
//         container.appendChild(card);
        
//     }

// }                                                   

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