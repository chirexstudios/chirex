fetch("bookshoot.html")
  .then((res) => {
    if (!res.ok) {
      throw new Error("bookshoot.html not found");
    }
    return res.text();
  })
  .then((data) => {
    document.getElementById("bookshoot-container").innerHTML = data;

    emailjs.init("YFP_ns1_d7QVwtmQj");

    const form = document.querySelector("#book-form");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
          "Service_Chirex",
          "template_5a1ckjp",
          this
        ).then(
          () => {
            alert("Inquiry Sent Successfully!");
          },
          (error) => {
            console.log(error);
            alert("Failed to send message");
          }
        );
      });
    }
  })
  .catch((err) => console.error(err));