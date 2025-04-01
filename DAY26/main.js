const login = () => {
  let username = usernameInput.value;
  let password = passwordInput.value;
  if (username && password) {
    localStorage.setItem("username", username)
    window.location = 'main.html'
  
  } else {
     alert("Please fill form correctly")
}
 
}