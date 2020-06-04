import { cepInput } from '../../main.js';
import { errorMsg } from '../validation/validation.js'

const resultDiv = document.querySelector('.result-search');
const cepDiv = document.querySelector('[data-info]');

export const populateResults = (dados) =>{    
    const { cep, bairro, localidade, logradouro, uf } = dados;
    const results = `${!dados.erro ? 
    `       
            <h2>${logradouro}</h2>
            <p>${bairro}</p>
            <p>${localidade} - ${uf}</p>
            <p>${cep}</p>
            <a class="btn" data-btn-voltar>Nova Pesquisa</a>
     `:
     `
     <div class="fluid alert error shake-horizontal">
        <h4 class="header">CEP Não Identificado</h4>
     </div>
     <a class="btn" data-btn-voltar>Nova Pesquisa</a>
     ` }
     
    
    `    

    resultDiv.innerHTML = results;

    toggleElements();

    function toggleElements(clean = false){
        resultDiv.parentElement.parentElement.classList.toggle('d-none');
        cepDiv.classList.toggle('d-none');           
        if(clean){
            cepInput.value = '';
            errorMsg.innerHTML = '';
        }        
    }

    const btnVoltar = document.querySelector('[data-btn-voltar]');
    btnVoltar.addEventListener('click', ()=>{        
        toggleElements(true);
    })
}
