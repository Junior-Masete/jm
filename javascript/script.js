const canExecute = () => {

    /*      Navigation for small devices         */
    const menubar = document.querySelector('.menubar');
    const navv = document.querySelector('.nav');
    
    menubar.addEventListener('click', () => {
        
        
        navv.classList.toggle("nav-visible");
        
    })
    
    document.querySelectorAll('.navBtn').forEach(i => 
        i.addEventListener('click', () => {
            navv.classList.remove('nav-visible');
        }))

    
    /*      form submission and Validation       */

    const form = document.querySelector('.formtosubmit');
    const names = document.querySelector('#name');
    const subjects = document.querySelector('#subject');
    const email = document.querySelector('#email');
    const messages = document.querySelector('#message');


    form.addEventListener('submit', function(e){
        if(!validateNames(names)){
            const error = form.querySelector('#thenames');
            error.style.color = "red";
            error.textContent = "Enter valid names"

            e.preventDefault();
        }

        if(!validateSubject(subjects)){
            const error = form.querySelector('#subj');
            error.style.color = "red";
            error.textContent = "Enter valid subject"

            e.preventDefault();
        }

        if(!validateEmail(email)){
            const error = form.querySelector('#themail');
            error.style.color = "red";
            error.textContent = "Enter valid email"
        }

        if(!validateSubject(messages)){
            const error = form.querySelector('#textmess');
            error.style.color = "red";
            error.textContent = "Enter valid message"
        }
    })


    const validateNames = function(names){ //validate 1st and lst name
        var regname = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
        if(names.value.match(regname)){
            return true;
        }
        else{
            return false;
        }
    }

    const validateSubject = function(subject) {  //Also for the Message
        var regsub = /^\w+$/;
        if(subject.value.match(regsub)){
            return true;
        }
        else{
            return false;
        }

    }

    const validateEmail = function(emaill){
        var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emaill.value.match(regemail)){
            return true;
        
        }
        else{
            return false;
        }

    }

    const sendMail = () => {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
}

document.addEventListener('DOMContentLoaded', canExecute);





