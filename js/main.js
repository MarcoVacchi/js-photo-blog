/*Ciao ragazzi,
esercizio di oggi: Photo Blog
repo: js-photo-blog
CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli:  ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Note
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :faccia_leggermente_sorridente:
Buon Lavoro e buon divertimento!*/

// richiamo la funzione che racchiude tutto il programma;

myFunction(); // invoco la mia funzione

//////////////////////////////FUNCTION///////////////////////////////////
const currentImg = document.getElementById("current-img");
const button = document.getElementById("btn-stop");
function myFunction() {  // salvo tutto in una funzione in caso voglia riutilizzarla
   const endPoint = "https://lanciweb.github.io/demo/api/pictures/"; // creo una variabile che aggancia il server;
    const container = document.getElementById("container-photo"); // salvo in una variabile l'HTML in cui inserirò il js;
    let myPhoto = ''; // creo una variabile che diventerà il nuovo array;
    console.log(endPoint);

    axios.get(endPoint) // chiamo l'API;
       .then(response => { // risposta dal server;

           myPhoto = response.data; // salvo la chiave "data" dell'oggetto in una variabile;
           let images = '';  // creo una variabile per portare fuori il risultato, e stampare una sola volta tutto insieme;

        console.log(myPhoto);
        console.log(response.data);
        myPhoto.forEach(result => { // itero l'array con un ciclo forEach
  
            console.log(result.url) // verifico cosa ottengo stampando la mia variabile + chiave url
            // console.log(result.url);
            // console.log(result);
            // inserisco l HTML da mettere DOM;
            images += `<div class="card col-lg-4 col-md-6 col-sm-12" style="width: 18rem;">
                    <div class="p-4 position-static bg-light">
                        <div class="position-absolute top-0 start-50 translate-middle">
                            <img src="img/pin.svg" alt="puntine">
                        </div>
                        <img class= "card-img-top" src="${result.url}"alt="puntine">
                    </div>
                    <div class="card-body">
                        <p class="card-text">${result.title}</p>
                        <p class="card-text f-family">${result.date}</p>
                    </div>
                </div>`
        });

        container.innerHTML = images; //inserisco l HTML nel DOM;

        const cardClick = document.querySelectorAll(".card");
        const myOverlay = document.getElementById("overlay");
        cardClick.forEach(result =>{
          result.addEventListener("click", function(){
            const imgSrc = this.querySelector(".card-img-top");
            //console.log(imgSrc)
            currentImg.src = imgSrc.src;
            myOverlay.style.display = "flex";
            //myOverlay.classList.replace("display-block");
           })
           button.addEventListener("click", function(){
            myOverlay.style.display = "none";
           });
          
        })
       console.log(cardClick);
        
        })
        .catch(error => {                      // dichiaro in caso di erroe
        console.error("error", error)
       })
 };







        
// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.





// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, provate a sperimentare :faccia_leggermente_sorridente:

// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

