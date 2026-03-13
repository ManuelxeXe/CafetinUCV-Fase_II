document.addEventListener('DOMContentLoaded', function() {
    
    const botonLogout = document.getElementById('logout');

    if (botonLogout) {
        
        botonLogout.addEventListener('click', function() {
            
               
                window.location.href = "Login.html";
            
        });
        
    }
});
