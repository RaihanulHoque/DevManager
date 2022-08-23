// Create a coworker office status app with React
// 🛑 Problem Statement

// We would like to display if an employee is in the office or not. Anyone can should be able to click a button and mark any of coworker as "In office" or "Out of office".
// 🛑 Notes:

//     This test is designed to be done without testing, so we do not implement an IDE or a way to see the behaviour of your code.
//     In a real world scenario, this will be connected to a database, for the scope of this project, an array of coworkers is passed down as props.
//     State of this application is maintained locally
//     Preferably, use function components
// 🛑 User Stories:

//     As a coworker I want to see the status of my coworkers if they are "In office" or "Out of Office"
//     As a coworker I want to toggle the status of anyone in the list

// 🛑 Acceptance Criteria:

//     the first and lastname of a coworker should be displayed
//     the current status of the coworker should be displayed.
//     the component should maintain its own state
//     the code should output no errors or warnings when run

import * as React from 'react';
import { useEffect, useState } from "react";
import { getIn } from 'yup/lib/util/reach';

import axios from 'axios';


const CoworkerList = (props) => {



    // const findAllUserData = async () =>{
    //     const {response} = await axios('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple')
        
    // }
                
    // (()=>{
    //     findAllUserData()
    //     .then((response)=>{
    //         response.forEach((customer)=>{
    //             console.log(
    //                 customer.category +
    //                 ': ' +
    //                 customer.question +
    //                 ' ' +
    //                 customer.correct_answers
    //             )
    //         })
    //     })
    // })();


    // Todo
    // Add your code here
    const [coworkers, setCoworkers] = useState(props.coworkers);
    const [location, setLocation] = useState('inOffice')

    const setClgLocation = (current_location, fName, index) =>{
        const getIndex = coworkers.findIndex((coworker) => coworker.first_name === fName)
        if(getIndex === index){
            console.log(current_location, '....................location')
        }
        const locationUpdate = coworkers.map((coworker) =>{
            if(getIndex === index){
                setLocation(current_location)
                return{
                    ...coworkers,
                }
            }else{
                return coworker
            }
        })
        setCoworkers(locationUpdate)
    }
    // Should return your JSX
    return(
        <div>
            {
                coworkers.map((person, index)=>{
                    return (
                        <div>
                            <h2>
                                {person.first_name} {person.last_name} - 
                                {location === 'inOffice'? <span style={{color:"green", fontWeight:"bold"}}>In Office</span>:<span style={{color:"blue", fontWeight:"bold"}}>Out of Office</span>}
                            </h2>
                            <button onClick={()=>setClgLocation('inOffice', person.first_name,  index)}>In Office</button>
                            <button onClick={()=>setClgLocation('outOffice', person.first_name,  index)}>Out of Office</button>

                        </div>
                    )
                }
                )
            }
        </div>
    )
};
  
  CoworkerList.defaultProps = {
    coworkers: [
      { first_name: 'Max', last_name: 'Mustermann'},
      { first_name: 'Vladimir', last_name: 'Leles'},
      { first_name: 'Tobias', last_name: 'Anhalt'},
    ]
  };
  
  export default CoworkerList;