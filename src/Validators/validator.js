import * as Yup from 'yup';

export const validatorPost = Yup.object().shape({
   newTextPost: Yup.string()
      .max(10, 'Max length is 10 symbols')
      .required('Field is required'),

});

export const validatorMessages = Yup.object({
   newMessage: Yup.string()
      .max(10, 'Max length is 10 symbols')
      .required('Field is required'),
});

export const validatorLogin = Yup.object().shape({
      password: Yup.string()
      .min(6, 'Min length is 6 symbols').required('Field is required'),
      email: Yup.string().required('Field is required'),
});


   export const required = (value) => {
      if (!value) return 'Field is reauired'
      return undefined
   }
   export const maxLengthCreator = (maxLength) => value => {
         if (value.length > maxLength) {return `Max length is ${maxLength} symbols`}
         else if (!value) return 'Field is required'
         return undefined
      }
   
 