const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#uname').value.trim();
  const password = document.querySelector('#pword').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#uname-su').value.trim();
  const email = document.querySelector('#email-su').value.trim();
  const password = document.querySelector('#pword-su').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signUp', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-container')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-container')
  .addEventListener('submit', signupFormHandler); 

  



