export const buscarCep = (cep) =>    
        fetch(`http://viacep.com.br/ws/${cep}/json`)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))