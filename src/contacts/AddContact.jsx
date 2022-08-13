import React from 'react'
import { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'



export default function AddContact({addContact}) {
    const [contact, setContact] = useState({
        firstName:'',
        lastName:'',
        email:'',
        profession:'',
        image:'',
        bio:'',
        dateOfBirth:new Date(),
        gender:'male'
    })

    const {firstName, lastName, email, profession, image, bio, dateOfBirth, gender}= contact;
    const handleSubmit =(evt) =>{
        evt.preventDefault()
        console.log(contact)
        //checking validation


        //Form Submission
        addContact(contact)

    }
    const handleChange =(evt) =>{
        setContact({
            ...contact,
            [evt.target.name]:evt.target.value,
        })
        
    }

  return (
    <>
    <h2 className='text-center'>Add Contact</h2>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='firstName' column>First Name</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                value={firstName}
                name="firstName"
                id='firstName'
                placeholder='Enter your first name'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='lastName' column>Last Name</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                value={lastName}
                name="lastName"
                id='lastName'
                placeholder='Enter your Last name'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='email' column>Email</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='email'
                value={email}
                name="email"
                id='email'
                placeholder='Enter your email'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='profession' column>Profession</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                value={profession}
                name="profession"
                id='profession'
                placeholder='Enter your profession'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='image' column>Profile Picture</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                value={image}
                name="image"
                id='image'
                placeholder='Enter your image URL'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='dateOfBirth' column>Date of Birth</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='date'
                value={dateOfBirth}
                name="dateOfBirth"
                id='dateOfBirth'
                placeholder='Select your dateOfBirth'
                onChange={handleChange}
                >
                    
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='gender' column>Gender</Form.Label>
            </Col>
            <Col xs='auto'>
                <Form.Check
                type='radio'
                name="gender"
                id='gender'
                checked={gender === "male"}
                value="male"
                label="Male"
                onChange={handleChange}
                />
                </Col>    
            <Col xs='auto'    >
                <Form.Check
                type='radio'
                name="gender"
                id='gender'
                checked={gender === "female"}
                value="female"
                label="Female"
                onChange={handleChange}
                />
                 
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='bio' column>Bio</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                as = 'textarea'
                type='text'
                value={bio}
                name="bio"
                id='bio'
                placeholder='Enter your Bio'
                onChange={handleChange}
                >
                </Form.Control>
            </Col>
        </Form.Group>
        <Button variant='primary' size='md' type='submit'>Add Contact</Button>
    </Form>
    </>
  )
}
