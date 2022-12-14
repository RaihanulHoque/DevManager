import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
import {format} from 'date-fns'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function Contact({contact, deleteContact, updateContact}) {
    // console.log(contact, '.........Each Contact')
    const {id, firstName, LastName, email, gender, profession, bio, image, dateOfBirth } =contact;
    
    const handleUpdate = (id) =>{
        toast.success('Contact is deleted successfully!')
        updateContact(id)
    }
    
    const handleDelete = (id) =>{
        toast.success('Contact is deleted successfully!')
        deleteContact(id)
    }
    
    return (
    <>
    <Card className='mb-3'>
        <div className='d-flex'>
            <Card.Img className='card-image'   src={image} />
            <Card.Body>
                <Card.Title>
                    <span className='text-dark'>
                        {firstName} {LastName}
                    </span>
                </Card.Title>
                <Card.Subtitle>
                    <span className='text-muted'>
                    {profession}
                    </span>    
                </Card.Subtitle>
                <Card.Text className='mt-2'>
                {bio}
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                    {/* Checking the Date is an Object or not, if its an Object then we need to make it String */}
                    <ListGroup.Item>Date of Birth: {dateOfBirth instanceof Object ? format(dateOfBirth, 'dd/MM/yyyy') : dateOfBirth}</ListGroup.Item>
                </ListGroup>
                <div className='card-btn mt-3'>
                    <Card.Link as={Link} to={`/contact/${id}`}>
                        <Button variant='warning ms-3' size='md' type='view'>
                            <FaEye />
                        </Button>
                    </Card.Link>
                    <Card.Link as={Link} to={`/edit-contact/${id}`}>
                    <Button variant='primary ms-3' size='md' type='view'>
                            <FaPencilAlt />
                    </Button>
                    </Card.Link>
                    <Card.Link>
                    <Button variant='danger ms-3' size='md' type='view' onClick={()=>handleDelete(id)}>
                            <FaTrashAlt />
                    </Button>
                    </Card.Link>
                </div>
            </Card.Body>
            
        </div>
    </Card>
    </>
  )
}
