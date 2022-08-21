 import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import {useParams} from 'react-router-dom'

function EditContact({contacts, updateContact}) {
  // console.log(contacts, '............all contacts from edit page')

    const { id } =  useParams(); // destractive Param to get the 'id' which sent from route like id:2
    const numID = Number(id);
    const foundContact = contacts.find((contact) => contact.id === numID)
    // const result = arr.find(item => item.customId === 'user1')

    // console.log(foundContact, '............Found Contact by "Barbette"')
  return (
    <ContactForm updateContact={updateContact} foundContact={foundContact} />
  )
}

export default EditContact
