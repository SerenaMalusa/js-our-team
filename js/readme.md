## Milestone 1
### Traccia

stampare su console le informazioni di nome, ruolo e la stringa della foto

### Svolgimento

1. dato l'array team presente nel file data
2. creo un ciclo che vada dal primo all'ultimo elemento dell array
    3. per ogni elemento recupero l'oggetto in una variabile
    4. creo un ciclo che vada dal primo all'ultimo argomento del oggetto
        5. recupero il valore della dell'argomento in una variabile
        6. stampo in console la chiave + la varibile

## Milestone 2
### Traccia

stampare le stesse informazioni su DOM sottoforma di stringhe

### Svolgimento

1. all'interno del ciclo precedente
    2. creo un nuovo elemento html .card
    3. l'HTML di card dovrà contenere gli elementi presi dall'oggetto
    4. li metto tutti nel container

## BONUS 1
### Traccia

trasformare la stringa foto in una immagine effettiva

### Svolgimento

1. dentro la funzione di stampa
    2. se la chiave corrisponde alla stringa image
        3. l'HTML di card dovrà essere così:
        `<img src="./img/valore" alt="valore">`
        4. altrimenti 
        `<p>${key}: ${value}</p>`