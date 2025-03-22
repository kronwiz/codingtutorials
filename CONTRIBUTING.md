# Come contribuire a questo repository

## Aggiunta di un nuovo tutorial

Alcune regole da seguire per aggiungere un nuovo tutorial al repository:

- creare la directory che conterrà tutti i file relativi al tutorial. La directory deve essere creata anche se il tutorial è costituito da un solo file. Per il nome della directory utilizzare solo lettere minuscole, numeri e il carattere di underscore "\_" per separare le parole;
- è preferibile che la versione stampabile del tutorial sia un file PDF per non avere problemi di portabilità;
- se possibile includere anche il file originale modificabile da cui è stato generato il PDF.


## Inserimento nell'elenco del sito "Creare programmando"

Se si vuole che il tutorial venga inserito nel sito associato al repository occorrono alcune informazioni addizionali:

- aggiungere nella directory del tutorial un file di testo con nome "metadata.yml" contenente tre campi:
  - `title`: titolo del tutorial;
  - `preview`: questo campo serve solo per Scratch ed è il link al progetto caricato sul sito scratch.mit.edu; se non serve si può omettere;
  - `abstract`: breve testo di presentazione;
- una piccola immagine di presentazione con nome "thumbnail.png" larga 200px e alta circa 150px.

Un esempio di file "metadata.yml" è:

    title: Caduta dadi
    preview: https://scratch.mit.edu/projects/58624412/
    abstract: Il gioco consiste nel premere il tasto corrispondente al numero che compare sulla faccia del dado che sta cadendo prima che questo tocchi terra. Se si preme il tasto giusto il punteggio aumenta di uno.

Il formato del file è YAML, quindi occorre prestare attenzione al fatto che se l'abstract viene spezzato su più righe è necessario lasciare almeno uno spazio all'inizio delle righe successive alla prima:

    title: Caduta dadi
    preview: https://scratch.mit.edu/projects/58624412/
    abstract: Il gioco consiste nel premere il tasto corrispondente
     al numero che compare sulla faccia del dado che sta cadendo
     prima che questo tocchi terra. Se si preme il tasto giusto il
     punteggio aumenta di uno.


## Attribuzione dei lavori

Poiché i tutorial sono distribuiti con licenza CC-BY-SA-4.0 è importante che nel tutorial sia riportato un riferimento di chi lo ha realizzato (uno o più tra: nome, logo, link al sito). Ancora meglio se è presente anche un riferimento alla licenza.
<br/>Ovviamente questo è solo un consiglio: seguirlo è a discrezione di chi crea il tutorial.
