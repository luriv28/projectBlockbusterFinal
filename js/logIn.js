const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {
    Swal.fire({
        title: "Log in",
        background: "url(./assets/fondoJuegoBody.jpg)",
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: "Log in",
        showDenyButton:true,
        denyButtonText: "Cancel",
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter a valid Username and Password`)
          }
          return { login: login, password: password }
        }
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Log in successful', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Thanks for your time!')
        }
      
      })
    
    })