import { buscarCep } from './module/require/require.js';
import { validate } from './module/validation/validation.js';
import { populateResults } from './module/view-update/update-view.js';
import { renderMap } from '../js/module/map/maps-function.js';
import { searchLatLong } from '../js/urlKey.js';

const btnPesquisar = document.querySelector('[data-search]');
const cepInput = document.querySelector('[data-input-cep]');

window.addEventListener('load', ()=>{
    navigator.geolocation.getCurrentPosition(position => {
        renderMap(position.coords.latitude, position.coords.longitude);
    })
})


btnPesquisar.addEventListener('click', ()=>{
    event.preventDefault();
    if(validate(cepInput.value)){
        buscarCep(cepInput.value)
        .then(result => {
            populateResults(result);
            searchLatLong(cepInput.value).then(position =>{
                renderMap(position.lat, position.lng);                
            })
            .catch(erro=>{                
                console.log(erro);                
            })            
        }).catch((err) => {
           console.log(err);
        });
    }
})