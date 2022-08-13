import React, { useEffect } from 'react'
import { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName:yup
    .string()
    .required('FirstName is Required!')
    .min(3, 'FirstName must be 3 or more in length'),
    lastName:yup
    .string()
    .required('LastName is needed')
    .min(3, "at least 3 characters needed"),
    email:yup
    .string()
    .email()
    .required("A valid Email address is required"),
    profession:yup
    .string()
    .required('Professional is Required'),
    image:yup
    .string()
    .required('image URL is Required'),
    bio:yup
    .string()
    .required('Biography is Required')
    .min(10, "Biography must be at-least 10 characters")
    .max(300, "Biography must be within 300 characters!"),    
    gender:yup
    .string()
    .required('Please select your Gender type')

})
export default function AddContact({addContact}) {
 
    const { 
        register, 
        handleSubmit, 
        watch, 
        setValue, 
        reset,
        formState:{errors, isSubmitting, isSubmitSuccessful} } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) =>{
        console.log(data);
    }
    // console.log(errors)

    const [birthYear, setBirthYear] = useState(new Date());

    useEffect(()=>{
        setValue('dateOfBirth', birthYear)
    }, [birthYear])

    useEffect(() =>{
        reset({
            firstName:'',
            lastName:'',
            email:'',
            profession:'',
            bio:'',
            gender:'male',
            image:'',


        })
    },[isSubmitSuccessful])
  return (
    <>
    <h2 className='text-center'>Add Contact</h2>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='firstName' column>First Name</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                name='firstName'
                id='firstName'
                // Using useForm hock to validate HTML5 Forms
                // {...register('firstName', {required:'First Name is Required', minLength:{value:3, message:"Length must be 3 characters!"}})}
                placeholder='Enter your First name'
                defaultValue=''
                
                //Validating with YUP
                {...register('firstName')}
                isInvalid={errors?.firstName}
                >
                </Form.Control>
                {/* Using useForm hock to validate HTML5 Forms */}
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.firstName?.message}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='lastName' column>Last Name</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                name="lastName"
                defaultValue=''
                id='lastName'
                placeholder='Enter your Last name'
                {...register('lastName')}
                isInvalid={errors?.lastName}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.lastName?.message}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='email' column>Email</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='email'
                name="email"
                id='email'
                placeholder='Enter your email'
                defaultValue=''
                {...register('email')}
                isInvalid={errors?.email}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.email?.message}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='profession' column>Profession</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                name="profession"
                id='profession'
                placeholder='Enter your profession'
                {...register('profession')}
                defaultValue=''
                isInvalid={errors?.profession}
                >                    
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.profession?.message}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
         <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='image' column>Profile Picture</Form.Label>
            </Col>
            <Col sm={9}>
                <Form.Control
                type='text'
                name="image"
                id='image'
                placeholder='Enter your image URL'
                defaultValue=''
                {...register('image')}
                isInvalid={errors?.image}
                > 
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.image?.message}
                </Form.Control.Feedback>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='dateOfBirth2' column>Date of Birth</Form.Label>
            </Col>
            <Col sm={9}>
                <DatePicker 
                    selected={birthYear}
                    onChange={(date) => setBirthYear(date)
                    }
                    // maxDate={addDays(new Date(), 5)}
                    maxDate={new Date()}
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder='Enter your DOB'
                    showYearDropdown 
                />
            </Col>
        </Form.Group>
         <Form.Group as={Row} className='mb-3'>
            <Col sm={3}>
                <Form.Label htmlFor='gender' column>Gender</Form.Label>
            </Col>
            <Col xs='auto'>
                <Form.Check
                type='radio'
                id='gender'
                defaultChecked={true}
                value="male"
                label="Male"
                {...register('gender')}
                />
                </Col>    
            <Col xs='auto'    >
                <Form.Check
                type='radio'
                id='gender' 
                value="female"
                label="Female"
                {...register('gender')}
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
                name="bio"
                id='bio'
                placeholder='Enter your Bio'
                defaultValue=''
                {...register('bio')}
                isInvalid={errors?.bio}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid' className='d-block'>
                    {errors?.bio?.message}
                </Form.Control.Feedback>
            </Col>
                </Form.Group> 
               
        <Button variant='primary' size='md' type='submit' disabled={isSubmitting ? 'disabled' : ''}>Add Contact</Button>
    </Form>
    </>
  )
}
