

const { createApp } = Vue


createApp({
    data() {
        return {
     
            parola: "",
            
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        let random;

        axios.get('https://flynn.boolean.careers/exercises/api/random/word').then((result) => {

            // asincrono: esegue le istruzioni qui dentro SOLO quando riceve i dati,
            // nel frattempo il resto del codice viene eseguito come sempre
            console.log(result)

            // console.log(this.numeroCasuale)

            // ora salvo il numero casuale nei miei data
            // this.numeroCasuale = result.data.response
            this.parola = result.data.response
        });
    }
}).mount('#app');
