const axios = require('axios');

const data = {
    header: {
      name: 'John Doe',
      location: {
        city: 'New York',
        state: 'NY',
      },
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
  };

axios.post('http://localhost:3000/resume', data)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
