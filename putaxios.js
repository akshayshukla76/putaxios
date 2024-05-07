const axios = require('axios');

function handleEdit(event, userId) {
  event.preventDefault();


  const url = `https://crudcrud.com/api/your_endpoint/${userId}`;

  axios.get(url)
    .then(response => {
     
      populateFormData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

function handleFormSubmit(event, userId, userData) {
  event.preventDefault();

 
  const url = `https://crudcrud.com/api/your_endpoint/${userId}`;

  axios.delete(url)
    .then(() => {
      axios.post(url, userData)
        .then(() => {
        
          updateUserOnScreen(userId, userData);
        })
        .catch(error => {
          console.error('Error updating user:', error);
        });
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
}

// Do not touch the code below
module.exports = { handleEdit, handleFormSubmit };
