const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
const login = () => {
  document.location.replace('/login');
}

const home = () =>{
  document.location.replace('/');
}

const dashboard = () =>{
  document.location.replace('/dashboard');
} 

document.querySelector("#homebtn").addEventListener('click', home)
document.querySelector('#logoutbtn').addEventListener('click', logout);
document.querySelector('#loginbtn').addEventListener('click', login);
document.querySelector('#dashboardbtn').addEventListener('click', dashboard);