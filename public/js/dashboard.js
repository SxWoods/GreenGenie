const strainName = document.querySelector('#stain').trim();
const description = document.querySelector('#description').trim();

const strain = {strainName, description};

const submitButtonHandler = (strain) =>{
    fetch('api/recipies/', {
        method: "POST",
        body: JSON.stringify(strain) 
    }).then(res => {
        console.log('Request complete. Response:', res)
    });
}

//api/recipies/
document.querySelector('#submitBtn').addEventListener('click', submitButtonHandler(strain));