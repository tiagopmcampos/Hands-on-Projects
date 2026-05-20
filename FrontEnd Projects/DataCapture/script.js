const formulario = document.getElementById('form')
const p = document.getElementById('p')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formulario)

    console.log(formData)

    const dataToSave = {
        name: formData.get('name'),
        email: formData.get('email'),
    }

    p.innerHTML = `Os dados enviados foram: ${dataToSave.name}, ${dataToSave.email}`
    const convertToJson = JSON.stringify(dataToSave)

    localStorage.setItem("usuario", convertToJson)

    console.log(dataToSave)
    //console.log(convertToJson)
    //console.log(typeof convertToJson)
    console.log(localStorage)
});