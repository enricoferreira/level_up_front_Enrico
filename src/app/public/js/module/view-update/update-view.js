const resultDiv = document.querySelector('.result-search');
export const populateResults = (dados) =>{    
    const { cep, bairro, localidade, logradouro, uf } = dados;
    const results = `${!dados.erro ? 
    `<h2>${logradouro}</h2>
    <p>${bairro}</p>
    <p>${localidade} - ${uf}</p>
    <p>${cep}</p>`:
     `
     <div class="alert error shake-horizontal">
        <h4 class="header">CEP Não Identificado</h4>` }
     </div>
    
    `
    resultDiv.innerHTML = results;
}