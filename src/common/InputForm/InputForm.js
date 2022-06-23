import React from "react";


export const InputForm = ({field, form, ...props}) => {
    console.log();
    return (
        <div>
            <input {...field} {...form} {...props} />
            {form.errors && form.touched && <div>{form.errors.newMessage}</div>}
        </div>
        
    )
}