fetch("bookshoot.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("bookshoot-section").innerHTML = data;
  });
  