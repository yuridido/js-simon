// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla
// volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

// GENERO I 5 NUMERI CASUALI NON RIPETUTI
var numeriCasuali = [];
var numero = 0;
while (numeriCasuali.length < 5) {
    numero = random(1, 50);
    if (!numeriCasuali.includes(numero)) {
        numeriCasuali.push(numero);
    }
}
alert("memorizza questi numeri: " + numeriCasuali);

// FACCIO INSERIRE I NUMERI ALL'UTENTE E STAMPO IL RISULTATO
var numeriUtente = [];
setTimeout(function(){
    inserimento(numeriUtente, numeriCasuali);
    alert("sono stati inseriti " + numeriUtente.length + " numeri esatti: " + numeriUtente);
}, 30000);


// FUNZIONI

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inserimento(arrayVuoto, arrayPieno) {
    for (i = 0; i < 5; i++) {
        var numero = parseInt(prompt('inserisci uno dei numeri'));
        if (arrayPieno.includes(numero)) {
            arrayVuoto.push(numero);
        }
    }
}
