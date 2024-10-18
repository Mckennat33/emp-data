

function handleForm(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value
    const title = document.getElementById('title').value
    const email = document.getElementById('email').value
    const hireDate = document.getElementById('hire-date').value
    
    // if (name === '') {
    //     alert('need your name')
    // }   
    // if (id === '') {
    //     console.log('need your id')
    // }
    // if (title === '') {
    //     console.log('need your title')
    // }
    // if (email === '') {
    //     console.log('need your email')
    // }
    // if (hireDate === '') {
    //     console.log('need your hire date')
    // }

    const formFields = [
        { id: 'name', message: "Need your name"},
        { id: 'id', message: "Need your employee id"},
        { id: 'title', message: "Need your title"},
        { id: 'email', message: "Need your email"},
        { id: 'hire-date', message: "Need your hire date"}
    ]


    formFields.forEach(field => {
        const value = document.getElementById(field.id).value;
        if (value === '') {
            alert(field.message)
            allValid = false;
        }
    })

    if (allValid) {
        console.log('form submitted successfully')
    }

}