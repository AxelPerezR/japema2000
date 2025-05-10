document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the default redirect

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        thankYou.style.display = "block";
      } else {
        alert("Hubo un problema al enviar el formulario. Inténtalo de nuevo.");
      }
    }).catch(error => {
      alert("Error de red. Por favor, inténtalo más tarde.");
    });
  });
});
