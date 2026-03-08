fetch("Book_shoot.html")
.then(response => response.text())
.then(data => {
document.getElementById("bookshoot-section").innerHTML = data;
});