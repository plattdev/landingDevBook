//Formulario de inscripción para que llegue un correo de Neltify al usuario

const form = document.getElementById('form1');

form.addEventListener('submit', function(event) {
    //event.preventDefault(); // Evita el envío del formulario por defecto, es decir, recargar la página, esto no es necesario para Netlify Forms, si no quieres que se recargue la página, descomenta esta línea

    const formData = new FormData(form);
    const email = formData.get('email');

    // Aquí puedes agregar la lógica para enviar el correo o almacenar el email
    console.log('Formulario enviado con el email:', email);
    
    form.reset(); // Reinicia el formulario después del envío
});

