let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value
    name.value = '';
    email.value = '';
    message.value = '';

});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage

    name = name.value;
    //localStorage.setItem('name', name);

    email = email.value;
    //localStorage.setItem('email', email);

    message = message.value;
    //localStorage.setItem('message', message);

    const obj={
        name,
        email,
        message
    }

    axios.post("https://crudcrud.com/api/dfa0e737bdba4d6299ef9bcf7d56eca6/appoint",obj)
        .then((Response)=>{console.log(Response)})
        .catch((err)=>{
            console.log(err);
        })

    axios.delete("https://crudcrud.com/api/dfa0e737bdba4d6299ef9bcf7d56eca6/appoint")
            .then((response) => {console.log(response)})
            .catch((err)=>{
                console.log(err);
            })

    window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/dfa0e737bdba4d6299ef9bcf7d56eca6/appoint")
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    })




});
