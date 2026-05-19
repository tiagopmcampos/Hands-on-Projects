const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const job = document.getElementById('job')
const message = document.getElementById('message')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form)

    //verifica se o nome está vazio
    if(name.value === ''){
        alert("Por favor, preencha seu nome.")
        return;
    }

    //verifica se o email é valido
    if(email.value === '' || !isEmailValid(email.value)){
        alert("Por favor, preencha seu e-mail corretamente.")
        return;
    }

    //verifica caracteres 
    if(password.value === "" || !isPasswordValid(password.value, 8)){
        alert('Sua senha pode conter somente letras, números e estes caracteres . ! ? @ _ -. Minimo de 8 caracteres')
        return;
    }


    //verifica se a mensagem foi preenchida
    if(message.value === "" ){
        alert("Preencha sua mensagem de apresentação.")
    }

    //valida se o valor do Select é sim ou não
    if(job.value === ''){
        alert('Selecione uma situação de trabalho')
        return
    }

    const dataToSave = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        job: formData.get('job'),
        message: formData.get('message'),
    }

    console.log({dataToSave})
    //Se todos os campos estiverem preenchidos corretamente, envie o form
    //form.submit();


})

//função que valida senha
function isPasswordValid(password, minDigits){
    const passwordRegex = new RegExp(
        /^[a-zA-Z0-9.!?@_-]+$/
    )

    if(password.length >= minDigits && passwordRegex.test(password)){
        return true;
    }

    return false;
}

//função que valida email
function isEmailValid(email) {
    //cria regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}