import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('gmail','template_zupzpjp', refForm.current, 'service_laq24r8')
        .then(
            () => {
                alert("Message sent to Dalton!")
                window.location.reload(false)
            },
            () => {
                alert("Failed to send message, please try again")
            }
        )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am actively looking for summer software engineernig internships,
                        as well as any opportunities to work on fun, innovative projects.
                        If you have any questions or are interested in getting in touch,
                        please fill out the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref = {refForm} onSubmit = {sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder = "Name " type = "text" name = "name" required />
                                </li>
                                <li className='half'>
                                    <input placeholder = "Email" type = "email" name = "email"  required />
                                </li>
                                <li>
                                    <input placeholder = "Subject" type = "text" name = "subject" required />
                                </li>
                                <li>
                                    <textarea placeholder = "Message" type = "text" name = "message" required />
                                </li>
                                <li>
                                    <input type = "submit" className='flat-button' value = "Submit" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact