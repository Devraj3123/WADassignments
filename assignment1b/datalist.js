document.addEventListener("DOMContentLoaded" ,function () {
    const users = JSON.parse(localStorage.getItem('user')) || [];

    const userlist = document.getElementById('userlist');
    users.forEach(users => {
        const listitem = document.createElement('li');
<<<<<<< HEAD
        listitem.textContent = `Username: ${users.name}, email: ${users.email} ,  mobile: ${users.mobile} ,  password: ${users.password}`;
=======
        listitem.textContent = `Username: ${users.name}, email: ${users.email} ,  mobile: ${users.mobile} ,  password: ${users.password} , age: ${users.age} `;
>>>>>>> d2af8ac (all codes)
        userlist.appendChild(listitem);
    });
});