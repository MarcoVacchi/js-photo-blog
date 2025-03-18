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
const body = document.querySelector("body")
function myFunction() {  // salvo tutto in una funzione in caso voglia riutilizzarla un giorno;
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
                            <img src="img/pin.svg" class="pin" alt="puntine">
                        </div>
                        <img class= "card-img-top" src="${result.url}"alt="puntine">
                    </div>
                    <div class="card-body">
                        <p class="card-text f-family">${result.date}</p>
                        <p class="card-text">${result.title}</p>
                    </div>
                </div>`
            });

            container.innerHTML = images; //inserisco l HTML nel DOM;

            // const cardClick = document.querySelectorAll(".card");
            // const myOverlay = document.getElementById("overlay");
            // cardClick.forEach(result => {
            //     result.addEventListener("click", function () {
            //         const imgSrc = this.querySelector(".card-img-top");
            //         //console.log(imgSrc)
            //         currentImg.src = imgSrc.src;
            //         myOverlay.style.display = "flex";
            //         body.classList.add("overflow-hidden");
            //         //myOverlay.classList.replace("display-block");
            //     })
        //due diversi modi per creare il programma;
            const cardClick = document.querySelectorAll(".card"); // prendo le mie card salvandole in una variabile;
            const myOverlay = document.getElementById("overlay"); // prendo il mio contenitore overlay con la classe inizializzata d none;
            for (let index = 0; index < cardClick.length; index++) { // ciclo le mie card;
               cardClick[index].addEventListener("click", function () { // aggiungo l evendo del click;
                    const currentCard = cardClick[index].querySelector(".card-img-top"); // salvo in una variabile il click della card corrente che ho creato nel mio html;
                    currentImg.src = currentCard.src; // current img è il mio contenitore vuoto immagini creato in html, a cui collego questo appena creato;
                    myOverlay.style.display = "flex"; // rendo flex il mio overlay display inizializzato in d-none su css;
                    body.classList.add("overflow-hidden"); // aggiungo la classe hidden al body per togliere la scrollbar quando la card viene cliccata;
                    myOverlay.classList.replace("d-block", "d-none"); // utilizzo replace per cambiare da d-none a d-block;
                })
            }
                button.addEventListener("click", function () { // secondo evento per quando chiudo il bottone; 
                    myOverlay.style.display = "none"; // cambio nuovamente la card cliccata settandola a display-none;
                    body.classList.remove("overflow-hidden");  // tolgo la classe hidden al body per rimettere la scrollbar quando la card viene chiusa;
                });
            })      
        .catch(error => {                      // dichiaro in caso ci sia un erroe; 
            console.error("error", error)
        })

};








