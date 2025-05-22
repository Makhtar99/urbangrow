document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name.value || !email.value || !message.value) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      alert("Merci pour votre message !");
      contactForm.reset();
    });
  }
});