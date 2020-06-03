import { buscarCep } from '../js/req/require.js';
import { validate } from '../js/validation.js';
import { populateResults } from '../js/update-view.js';

const btnPesquisar = document.querySelector('[data-search]');
const cepInput = document.querySelector('[data-input-cep]');

btnPesquisar.addEventListener('click', ()=>{
    if(validate(cepInput.value)){
        buscarCep(cepInput.value)
        .then(result => {
        populateResults(result);
        }).catch((err) => {
           console.log(err);
        });
    }
})