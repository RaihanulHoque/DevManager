import React from 'react'
import { Navbar } from 'react-bootstrap'
import Contact from './Contact'

export default function Contacts({contacts, deleteContact}) {
    // console.log(contacts)
  return (
    <>
        <h2 className='mt-2 text-center'>All Contacts</h2>
        <Navbar bg="light" expand="lg">
        </Navbar>
        {contacts.map(contact =>(
            <Contact contact={contact} deleteContact={deleteContact} key={contact.id} />
        ))}
    </>
    
    
  )
}
