
// roblem Statement

// The code works, but it's old-school. We would like to refactor the legacy code to something more modern.
// 🛑 Notes:

//     This test is designed to be done without testing, so we do not implement an IDE or a way to see the behaviour of your code.

// 🛑 Refactor the code:

//     Use modern ES methods/features/apis
//     new Promise() is not needed
//     use async await instead of promises
//     all .then() and .catch(), statements are not needed
//     function() {} should be replaced with something that has a smaller code footprint
//     the code size should be reduced to less then half of the original code
//     you can still use Promise.all or equivalent

// 🛑 Acceptance criteria:

//     The code should output no errors or warnings when run.
//     If your code works, you should see a list of customer names along with the ID in the following format. {id}: {FirstName} {LastName}


import axios from 'axios';

const findAllUserData = async () =>{
    const response = await axios
    .get('https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com')
}
            
(()=>{
    findAllUserData()
    .then((customers)=>{
        customers.forEach((customer)=>{
            console.log(
                customer.id +
                ': ' +
                customer.first_name +
                ' ' +
                customer.last_name
            )
        })
    })
})();

// function findAllCustomerData() {
//   var baseURL = 'https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com';
//   return new Promise(function (resolve, reject) {
//     axios
//       .post('customers', {}, { baseURL: baseURL })
//       .then(function (result) {
//         var dataPromises = result.data.customerIds.map(function (customerId) {
//           return axios.get('customers/' + customerId, { baseURL: baseURL });
//         });

//         Promise.all(dataPromises)
//           .then(function (res) {
//             resolve(
//               res.map(function (result) {
//                 return result.data;
//               })
//             );
//           })
//           .catch(function (err) {
//             reject(err);
//           });
//       })
//       .catch(function (err) {
//         console.log('fails', err.toString());
//         reject(err);
//       });
//   });
// }

// (() => {
//   findAllCustomerData()
//     .then(function (customers) {
//       customers.forEach(function (customer) {
//         console.log(
//           customer.id +
//           ': ' +
//           customer.first_name +
//           ' ' +
//           customer.last_name
//           );
//       });
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
// })();
