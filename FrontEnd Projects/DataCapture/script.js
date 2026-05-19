const formulario = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formulario)

    console.log(formData)

    const dataToSave = {
        name: formData.get('name'),
        email: formData.get('email'),
    }

    console.log(dataToSave)
});