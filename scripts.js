let contact = document.querySelector('.contact')
let number = document.querySelector('.number')
let email = document.querySelector('.email')
let notfound = document.querySelector('.notfound')
let input = document.querySelector('input')
let button = document.querySelector('button')


const contacts = [
    { name: 'Joao', number: '(31) 97852-4627', email: 'joao1502@gmail.com' },
    { name: 'Caio', number: '(31) 99252-7622', email: 'caio5211@gmail.com' },
    { name: 'Gustavo', number: '(31) 98802-4631', email: 'gustavo0021@gmail.com' },
    { name: 'Rian', number: '(31) 97862-4689', email: 'rian6780@gmail.com' },
    { name: 'Gabriel', number: '(31) 98052-2626', email: 'gabriel2097@gmail.com' },
]


function search() {

    for (let i = 0; i < contacts.length ;i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            contact.innerHTML = `Contato Encontrado Nome: ${contacts[i].name}`
            number.innerHTML = `Número: ${contacts[i].number}`
            email.innerHTML = `Email: ${contacts[i].email}`
            notfound.innerHTML = ''

            break
        } else {
            contact.innerHTML = ''
            number.innerHTML = ''
            email.innerHTML = ''
            notfound.innerHTML = 'Contato não encontrado, tente novamente!'
        }
    }
}


button.addEventListener("click", search)