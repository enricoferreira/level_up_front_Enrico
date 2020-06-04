const resultDiv = document.querySelector('.result-search');
const cepDiv = document.querySelector('[data-info]');

export const populateResults = (dados) =>{    
    const { cep, bairro, localidade, logradouro, uf } = dados;
    const results = `${!dados.erro ? 
    `<div class="card fluid shadow">
        <div class="header-card">
            <h3 class="header">Location</h3>
        </div>
        <div class="body-card  d-flex direction-column p-20">        
            <h2>${logradouro}</h2>
            <p>${bairro}</p>
            <p>${localidade} - ${uf}</p>
            <p>${cep}</p>
            <a class="btn" data-btn-voltar>Voltar</a>
        </div>
    </div>`:
     `
     <div class="fluid alert error shake-horizontal">
        <h4 class="header">CEP Não Identificado</h4>
     </div>
     <a class="btn" data-btn-voltar>Voltar</a>
     ` }
     
    
    `
    // const elementVoltar = `
    // <a class="btn" data-btn-voltar>Voltar</a>
    // `

    resultDiv.innerHTML = results;

    toggleElements();

    function toggleElements(){
        resultDiv.parentElement.classList.toggle('d-none');
        cepDiv.classList.toggle('d-none');
    }


    const btnVoltar = document.querySelector('[data-btn-voltar]');
    btnVoltar.addEventListener('click', ()=>{        
        toggleElements();
    })
}
