const submitButtonHandler = async (event) =>{
    event.preventDefault();

    const strainName = document.querySelector('#strain').value;
    const description = document.querySelector('#description').value;

    console.log(strainName, description);

    if(strainName && description){
        const response = await fetch('/api/recipes/', {
            method: "POST",
            body: JSON.stringify({strainName, description}) ,
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location.replace('/dashboard');
        }else{
            alert(response.statusText);
        }
    }
     
}

document.querySelector('#submitBtn').addEventListener('click', submitButtonHandler);