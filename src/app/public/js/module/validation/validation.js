export const validate = (value) => {
    if(value.length < 8){
        console.log('CEP INCOMPLETO');        
        return false;
    }    
    return true;
    
}