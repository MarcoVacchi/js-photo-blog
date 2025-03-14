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










////////////////////////////////FUNCTION///////////////////////////////////

function myFunction(){  // salvo tutto in una funzione in caso voglia riutilizzarla
    const endPoint = "  /"; //creo una variabile che aggancia il server;
    const container = document.getElementById("container-photo"); // salvo in una variabile l'HTML in cui inserirò il js;
    let myPhoto = ''; // creo una variabile che diventerà il nuovo array;
    //console.log(endPoint);

    axios.get(endPoint) // chiamo l'API;
        .then(response => { // risposta dal server;

            myPhoto = response.data; // salvo la chiave "data" dell'oggetto in una variabile;
            let images = '';  // creo una variabile per portare fuori il risultato, e stampare una sola volta tutto insieme;

            //console.log(myPhoto);
            //console.log(response.data);
            myPhoto.forEach(result => { // itero l'array con un ciclo forEach
                console.log(result.url) // verifico cosa ottengo stampando la mia variabile + chiave url
                //console.log(result.url);
                //console.log(result);
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

        })
        .catch(error => {                      // dichiaro in caso di erroe
            console.error("error", error)
    })

};