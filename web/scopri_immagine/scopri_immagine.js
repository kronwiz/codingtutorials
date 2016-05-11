
// numero di piastrelle visibili
var piastrelle = 16;
// numero dell'immagine visualizzata
var numero_immagine = 0;

/*
E' la prima cosa che viene eseguita quando viene aperta la pagina:
- mostra la prima immagine dell'elenco (indice 0) e
- la nasconde con le piastrelle
*/
function inizializza () {
	numero_immagine = 0;
	imposta_immagine ( numero_immagine );
	metti_piastrelle ();
}

/*
Rimuove la piastrella dalla cella di tabella contenuta in "elemento".

Se non ci sono piu' piastrelle visibili attiva il pulsante "successiva".
*/
function togli_piastrella ( elemento ) {
	/* controllo che la piastrella ci sia per non togliere 1 anche quando e' gia'
	stata rimossa */
	if ( elemento.style.backgroundImage != "" ) {
		elemento.style.backgroundImage = "";
		piastrelle = piastrelle - 1;
	}

	if ( piastrelle == 0 ) {
		var successiva = document.getElementById ( "successiva" );
		successiva.removeAttribute ( "disabled" );
	}
}

/*
Cambia l'immagine di sfondo della tabella con quella contenuta nella lista
di immagini alla posizione "num" (partendo da 0).
*/
function imposta_immagine ( num ) {
	var imm = document.getElementById ( "immagine" );
	if ( num == 0 )
		imm.style.backgroundImage = "url( 'immagini/img1.jpg' )";
	else if ( num == 1 )
		imm.style.backgroundImage = "url( 'immagini/img2.jpg' )";
	else if ( num == 2 )
		imm.style.backgroundImage = "url( 'immagini/img3.jpg' )";
}

/*
Copre l'immagine con le piastrelle impostando lo sfondo di tutte le celle di
tabella.
*/
function metti_piastrelle () {
	var celle = document.getElementsByTagName ( "td" );
	for ( var i = 0; i < celle.length; i++ ) {
		celle [ i ].style.backgroundImage = "url( 'immagini/piastrella.png' )";
	}

	piastrelle = 16;
}

/*
Mostra l'immagine successiva:
- incrementa il numero dell'immagine controllando che non superi il numero
  massimo;
- chiama "imposta_immagine" e "metti_piastrelle" per cambiare l'immagine e
  nasconderla;
- infine disattiva il pulsante "successiva".
*/
function successiva () {
	numero_immagine = numero_immagine + 1;

	if ( numero_immagine >= 3 ) numero_immagine = 0;

	imposta_immagine ( numero_immagine );
	metti_piastrelle ();

	var successiva = document.getElementById ( "successiva" );
	successiva.setAttribute ( "disabled", "disabled" );
}

