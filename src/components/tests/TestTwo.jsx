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
//     import * as React from 'react';




        const EmployeeList = (props) => {
          // Add your code here
          
          // Should return your JSX
        };

        EmployeeList.defaultProps = {
          employees: [
            { first_name: 'Musa', last_name: 'Abran' },
            { first_name: 'Monir', last_name: 'Ahmed' },
            { first_name: 'Sumon', last_name: 'Alam' },
          ],
        };

        export default EmployeeList;

        