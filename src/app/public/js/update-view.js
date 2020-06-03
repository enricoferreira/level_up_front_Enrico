const address = document.querySelector('[data-address]');
const hood = document.querySelector('[data-hood]');
const city = document.querySelector('[data-city]');
const cepResult = document.querySelector('[data-cep-result]');

export const populateResults = (dados) =>{
    const { cep, bairro, localidade, logradouro, uf } = dados;
    
    address.innerHTML = logradouro;
    hood.innerHTML = bairro;
    city.innerHTML = `${localidade} - ${uf}`;
    cepResult.innerHTML = cep;
}