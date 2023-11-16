import React from 'react';
import { ContactContainer, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from './ContactStyleComponents';
import { useRef } from 'react';
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        await addDoc(collection(db, "contacts"), { name, email, phoneNumber, message });
        toast.success("Form Submitted Successfully", { duration: 4000 });
    }


    return (
        <ContactContainer id='contact-container'>
            <Title>Contact</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>

            <ContactForm ref={form} onSubmit={handleSubmit}>
                <ContactTitle>Let's Talk 🚀</ContactTitle>
                <ContactInput placeholder="Enter Your Name" type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <ContactInput placeholder="Enter Your Email" type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <ContactInput placeholder="Enter Your Phone Number" type='text' name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <ContactInputMessage placeholder="Enter Your Message" rows="4" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <ContactButton type="submit" value="Send" />
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact;