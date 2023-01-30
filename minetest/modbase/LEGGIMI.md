# Mod base per Minetest

I file contenuti in questa directory costituiscono una mod molto semplice che può essere aggiunta a Minetest per fare delle prove ed estenderla con nuove funzionalità.

## Installazione

La mod può essere installata solo per un mondo o a livello di sistema in modo che sia disponibile per tutti i mondi.

L'installazione per un mondo è forse la più semplice, ma tenete presente che cancellando il mondo verrà cancellata tutta la directory con i dati del mondo e quindi anche la vostra mod. Ricordatevi di fare il backup ogni tanto!

In Linux la directory contenente il mondo si trova nella home dell'utente:

    ~/.minetest/worlds/<nome del mondo>

Se non riuscite a trovare la directory con i mondi andate in Minetest: nel menù principale aprite il tab "Informazioni": lì trovate il pulsante "Apri l'indirizzo dei dati utente". Cliccandolo si aprirà una directory in cui vedrete la sotto-directory "worlds" in cui ci sarà il vostro mondo.

Ciò significa che prima dovete creare in Minetest il vostro mondo che si chiama `<nome del mondo>`, altrimenti quella directory non esiste.
In questa directory dovete creare una sotto-directory che si chiama "worldmods"; quindi la situazione sarà:

    ~/.minetest/worlds/<nome del mondo>/worldmods

In questa directory dovete copiare la directory della mod, ovvero quella in cui si trova questo file che state leggendo. Dovete copiare anche la directory, quindi la situazione alla fine sarà:

    ~/.minetest/worlds/<nome del mondo>/worldmods/modbase

## Gioco

Se avete fatto tutto correttamente potete aprire il vostro mondo in Minetest: la mod verrà caricata automaticamente.

La mod installa tre comandi nella chat, quindi per verificare che stia funzionando aprite la chat (normalmente premendo "T"). I comandi che potete digitare sono:

- `/crea_blocco`: fa comparire un blocco di mattoni vicino al giocatore; se non lo vedete subito girate la vista attorno a voi perché viene creato in una posizione fissa, quindi non necessariamente nella direzione verso cui state guardando;
- `/crea_assi`: disegna con i blocchi gli assi cartesiani del mondo: l'asse x è quello fatto di legno, l'asse z è di cactus e l'asse y è quello rivolto verso l'alto;
- `/canc_assi`: cancella gli assi cartesiani appena disegnati.

## Note

Se volete cambiare il nome della mod (il nome standard è effettivamente poco divertente) sostituite "modbase" ovunque con il nuovo nome che scegliete. "modbase" compare molte volte nel file "init.lua", quindi usate un editor di testo ed eseguite un "cerca e sostituisci tutto". "modbase" compare anche nel file "mod.conf": in questo file trovate anche la descrizione della mod (riga con "description"): potete modificarla a vostro piacimento.
Ricordatevi di cambiare anche il nome della directory "modbase".

Cambiare il nome della mod e darle un nome unico è importante per non entrare in conflitto con altre mod che potrebbero avere lo stesso nome della vostra e quindi potrebbero non farla più funzionare.
