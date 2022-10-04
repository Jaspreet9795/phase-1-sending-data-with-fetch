function submitData(name, email){
    fetch ("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name , 
            email: email, 
            
    }),
    })
    .then (res=>res.json())
    .then (data=> {
        console.log(data);
        document.body.innerHTML = data.id;
    })

    .catch ((e) => {
        alert("error message");
        console.log (e.message);
        document.body.innerHTML =  e.message ; 
    })
}

// submitData ()
