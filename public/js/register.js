const button = document.querySelector('#register_button')

button.addEventListener('click', async() => {
        
        const apiData = await fetch("http://localhost:3000/api/user", {
            Accept: 'application/json',
            method: "POST",
            body: JSON.stringify({
                    'name': document.getElementById('name').value,
                    'email': document.getElementById('mail').value,
                    'password': document.getElementById('password').value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await apiData.json();
        console.log(data)
        return data;
    
})


