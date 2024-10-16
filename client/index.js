

function handleForm(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value
    const title = document.getElementById('title').value
    const email = document.getElementById('email').value
    const hireDate = document.getElementById('hire-date').value
    
    if (name === '') {
        alert('need your name')
    }   
    if (id === '') {
        console.log('need your id')
    }
    if (title === '') {
        console.log('need your title')
    }
    if (email === '') {
        console.log('need your email')
    }
    if (hireDate === '') {
        console.log('need your hire date')
    }
}