const form= document.getElementById('form');
const email= document.getElementById('email');

form.addEventListener('submit', e=>{
    e.preventDefault();
    const emailVal= email.value;
    if(!validateEmail(email)){
        form.classList.add('error');
        form.classList.remove('success');
    }else{
        form.classList.remove('error'); 
        document.body.innerHTML=`Gracias Milos`;
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };