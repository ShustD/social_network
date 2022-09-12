import { Field, Form, Formik } from "formik";




export const InfoProfileForm = ({ props, exitEditMode }) => {
    
    const submitForm = (value) => {
     props.putFormOnServer(value)
     exitEditMode()
    }
    return (
        <div>
            <Formik
                initialValues={{ aboutMe: props.profile.aboutMe, 
                                fullName: props.profile.fullName, 
                                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                                contacts: props.profile.contacts
                                 }}
                onSubmit={(value) => {
                    submitForm(value)
                }}
            >
                {( errors, touched) => (
                    <Form>
                        <div>
                            <div>About me:</div>
                            <div><Field type="text" name="aboutMe" component="textarea" /></div>
                        </div>
                        <div>
                            <div>Full name:</div>
                            <div><Field type="text" name="fullName" component="textarea" /></div>
                        </div>
                        <div>
                            Looking for a job: <Field type="checkbox" name="lookingForAJob" component="input" />
                        </div>
                        <div>
                            <div>Description:</div>
                            <div><Field type="text" name="lookingForAJobDescription" component="textarea" /></div>
                        </div>
                        <div>
                        <div>Contacts:</div>
                        {Object.keys(props.profile.contacts).map((p, key) => 
                            <div key={key}>
                                <b>{p}</b> <Field type="text" name={'contacts.' + p} component="input"
                                 key={`${key}contatct`} />
                            </div>)}
                            {props.apiError ? <div>{props.apiError}</div> : null}
                        </div>
                        <button type="submit">
                            Save
                        </button>
                           
                    </Form>
                )}

            </Formik>
        </div>

    )
}