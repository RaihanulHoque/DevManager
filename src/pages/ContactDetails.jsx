import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import {format } from 'date-fns'


function ContactDetails({contacts, deleteContact}) {
  const [contact, setContact] = useState({})
  const {id} = useParams();
  // const numID = Number(id);
  const foundContact = contacts.find((contact) => contact.id === id)

  useEffect(() =>{
    console.log(foundContact)
    if(id && foundContact){
      setContact(foundContact)
    }
  }, [id])
      
  const navigate = useNavigate();

const handleDelete = (id) =>{
    toast.success('Contact is deleted successfully!')
    deleteContact(id)
    navigate('/contacts')
}
  const {firstName, lastName, email, gender, profession, bio, image, dateOfBirth } = contact;
  return (
    <>
      {
        Object.keys(contact).length===0? <h2>No contact found!</h2> :
        <>
          <h2>{firstName} {lastName}</h2>
          <Card className='mb-3'>
            <div className='d-flex'>
                <Card.Img className='card-image'   src={image} />
                <Card.Body>
                    <Card.Title>
                        <span className='text-dark'>
                            {firstName} {lastName}
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
      }
      
    </>
  )
}

export default ContactDetails