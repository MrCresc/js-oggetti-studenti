// Rendo disponibili le funzionalità al solo caricamento completo del documento
$(document).ready(
  function () {
    // Creo oggetto iniziale con proprietò dello studente
    var studente = {
      "nome" : "Crescenzo",
      "cognome" : "De Martino",
      "eta" : 25
    }
    // Stampo con un console.log le proprietà dello studente attraverso un ciclo for in
    for (var key in studente) {
      console.log(studente[key])
    }
    // Creo un array iniziale di studenti e relative proprietà
    var arrayStudenti = [
      {
        "nome" : "Crescenzo",
        "cognome" : "De Martino",
        "eta" : 25
      },
      {
        "nome" : "Gianpiero",
        "cognome" : "Invernizzi",
        "eta" : 28
      },
      {
        "nome" : "Fabio",
        "cognome" : "Alberici",
        "eta" : 22
      },
    ]
    // Stampo con un console.log l'array iniziale attraverso un ciclo for
    for (var i = 0; i < arrayStudenti.length; i++) {
      var studenteSingolo = arrayStudenti[i]
      console.log('Console.log con array iniziale. Nome: ' + studenteSingolo.nome + '. Cognome: ' + studenteSingolo.cognome + '.')
    }
    // Chiedo all'utente attraverso 3 prompt i dati per creare un altro studente da aggiungere nell'array iniziale
    var nome = prompt('Digitare il nome dello studente')
    var cognome = prompt('Digitare il cognome dello studente')
    var eta = parseInt(prompt("Digitare l'età dello studente"))
    // Applico alcuni filtri
      while (isNaN(eta) || eta<18) {
        if (isNaN(eta)) {
          eta = parseInt(prompt("Attenzione valore immesso errato! Digitare l'età dello studente"))
        } else {
          eta = parseInt(prompt("Attenzione bisogna essere maggiorenni! Digitare l'età dello studente"))
        }
      }
    // Popolo l'oggeto con i dati forniti dell'utente
    var object = {
      "nome" : nome,
      "cognome" : cognome,
      "eta" : eta
    }
    // Inserisco il nuovo oggetto nell'array iniziale
    arrayStudenti.push(object)
    // Scrivo nell'HTML il nuovo array tramite ciclo for e handlebars
    for (var i = 0; i < arrayStudenti.length; i++) {
      var studenteSingolo = arrayStudenti[i]
      console.log('Console.log con array finale. Nome: ' + studenteSingolo.nome + '. Cognome: ' + studenteSingolo.cognome + '. Età: ' + studenteSingolo.eta + '.')
      var source = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(source);
      var context = { nome: studenteSingolo.nome, cognome: studenteSingolo.cognome, eta: studenteSingolo.eta };
      var html = template(context);
      $('.container').append(html)
    }
  }
)
