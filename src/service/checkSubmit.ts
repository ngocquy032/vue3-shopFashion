import { ref } from "vue";
const fullName = ref('');

const checkName = () =>{
    if(fullName.value.trim() === ''){
        return false;
    }else{
        return true;
    }
}


export{
    checkName,
    fullName
}