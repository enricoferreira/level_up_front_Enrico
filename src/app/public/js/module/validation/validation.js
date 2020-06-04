export const errorMsg = document.querySelector('.error-msg');
export const validate = (value) => {
    const result = /[0-9]{8}$/.test(value);
    return result ? true : showError(value) ;
    
    // if(value.length < 8){
    //     console.log('CEP INCOMPLETO');        
    //     return false;
    // }    
    // return true;
    // const char = e.key;
    //         const result = /[0-9]{8}$/.test(char);
}

function showError(value){
    if(value.length < 8){
        errorMsg.innerHTML = `<div class="alert error shake-horizontal mt-10"><h4 class="header">Cep Incompleto</h4></div>`
        return false;
    }
    errorMsg.innerHTML = `<div class="alert error shake-horizontal mt-10"><h4 class="header">Apenas números</h4></div>`
    return false;
}