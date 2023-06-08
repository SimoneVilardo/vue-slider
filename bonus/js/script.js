const {createApp} = Vue;




createApp({
    data() {
        return {
            // Array delle immagini
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ], 
            // Indice dell' immagine attualmente visualizzata
            attivaImmagine : 0           
        }
    },
    created() {
        this.avviaAutoScroll();
    },
    methods: {
         // Funzione per cambiare l'immagine attiva in base all'indice passato come parametro
        cambiaImmagine(index){
            this.attivaImmagine = index;
        },
        // Funzione per passare all'immagine successiva
        imgSuccessiva(){
            this.attivaImmagine++;
            // Se l'indice supera la lunghezza dell'array delle slides, torna alla prima immagine
            if(this.attivaImmagine > this.slides.length - 1){
                this.attivaImmagine = 0
            }
        },
        // Funzione per tornare all'immagine precedente
        imgPrecedente(){
            this.attivaImmagine--;
            // Se l'indice diventa negativo, torna all'ultima immagine dell'array
            if(this.attivaImmagine < 0){
                this.attivaImmagine = this.slides.length - 1
            }
        },
        //Funzione per avviare l'autoscroll
        avviaAutoScroll(){
            this.autoScroll = setInterval(() =>{
                this.imgSuccessiva()
            }, 3000);
        },
        //Funzione per fermare l'autoscroll
        fermaAutoScroll(){
            clearInterval(this.autoScroll);
        }
        
    },
}).mount('#app')