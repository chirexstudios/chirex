fetch("components/contact.html")
.then(response => response.text())
.then(data => {
document.getElementById("contact-section").innerHTML = data;
});
