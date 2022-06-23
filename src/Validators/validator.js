 import * as Yup from 'yup';
 
 export const validatorPost = Yup.object().shape({
    newTextPost: Yup.string()
     .max(10, 'Max length is 10 symbols')
     .required('Field is required')
    });



