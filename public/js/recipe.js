const submitButtonHandler = async (event) =>{
    event.preventDefault();

    const strainName = document.querySelector('#strain').value;
    const description = document.querySelector('#description').value;
    const growTime = document.querySelector('#growTime').value;
    const weedType = document.querySelector('#weedType').value;

    console.log(strainName, description, growTime, weedType);

    if(strainName && description && growTime && weedType){
        const response = await fetch('/api/recipes/', {
            method: "POST",
            body: JSON.stringify({strainName, description, growTime, weedType}) ,
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