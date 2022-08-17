import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import {useParams} from 'react-router-dom'

function EditContact() {
    const params =  useParams();
    console.log(params,'.............Edit Contact ID')
  return (
    <ContactForm />
  )
}

export default EditContact
