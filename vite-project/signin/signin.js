const form = document.forms.namedItem("signin");
const emailinp = document.querySelector(".email");
const passinp = document.querySelector(".pass");

form.onsubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        const foundUser = data.find(user => user.email === emailinp.value && user.password === passinp.value);
        if (foundUser) {
            localStorage.setItem('user', JSON.stringify(foundUser));
            location.assign('/vite-project/userpage/userpage.html')
            form.reset();
        } else {
            alert("Неправильная почта или пароль");
        }
    })
    
};
