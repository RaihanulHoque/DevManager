import React from 'react'
import { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

export default function AddContact() {
    const [contact, setContact] = useState({
        firstName:'',
        lastName:'',
        email:'',
        profession:'',
        bio:'',
        dateOfBirth:new Date(),
        gender:'male'
    })

    const {firstName, lastName, email, profession, bio, dateOfBirth, gender}= contact;
    const handleSubmit =() =>{

    }
    const handleChange =() =>{
        
    }

  return (
    <>
    <h2 className='text-center'>Add Contact</h2>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='firstName'>First Name</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                value={firstName}
                name="firstName"
                id='firstName'
                placeholder='firstName'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
    </Form>
    </>
  )
}
