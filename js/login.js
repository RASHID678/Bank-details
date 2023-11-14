document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if(email === 'harun@gmail.com' && password ==='password678'){
        window.location. href = 'bank.html';
    }
    else{
        alert('Type a valid emale and password');
        
    }
})