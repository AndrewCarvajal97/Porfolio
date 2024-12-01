<template>
    <div class="contact-form-container">
      <form @submit.prevent="enviarCorreos" class="contact-form" action="https://getform.io/f/agddvzjb" method="POST">
        <label for="Nombre">Nombre O Empresa</label>
        <input type="text" name="name" id="Nombre" v-model="form.name" required />
        
        <label for="Email">Correo Electrónico</label>
        <input type="email" name="email" id="Email" v-model="form.email" required />
        
        <label for="subjet">Asunto</label>
        <input type="text" name="message" id="subjet" v-model="form.message" required />
        
        <label for="phone">Teléfono</label>
        <input type="text" name="phone" id="phone" v-model="form.phone" required />
        
        <label for="comments">Comentarios</label>
        <textarea cols="15" rows="5" name="comments" id="comments" v-model="form.comments" required></textarea>
        
        <!-- HoneyPot field to prevent spam -->
        <input type="hidden" name="_gotcha" style="display:none !important" />
        
        <button type="submit" :disabled="isSending">Enviar</button>
      </form>
  
      <div v-if="isSending" class="modal">
        <div class="modal-content">
          <p>Enviando correo, por favor espera...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSending = ref(false);
  const form = ref({
    name: '',
    email: '',
    message: '',
    phone: '',
    comments: '',
  });
  
  // Función para validar el teléfono
  const validarTelefono = (telefono) => {
    const telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(telefono);
  };
  
  // Función para enviar el formulario
  const enviarCorreos = async () => {
    if (!form.value.name || !form.value.email || !form.value.message || !form.value.phone || !form.value.comments) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Validación de correo
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(form.value.email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
  
    // Validación del teléfono
    if (!validarTelefono(form.value.phone)) {
      alert('El número de teléfono debe contener exactamente 10 dígitos.');
      return;
    }
  
    isSending.value = true;
  
    // Enviar el formulario a Getform
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('message', form.value.message);
    formData.append('phone', form.value.phone);
    formData.append('comments', form.value.comments);
  
    // Espera la respuesta de Getform
    const response = await fetch('https://getform.io/f/agddvzjb', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      alert('Correo enviado exitosamente');
      form.value = { name: '', email: '', message: '', phone: '', comments: '' }; // Reset form
    } else {
      alert('Hubo un problema al enviar el correo');
    }
  
    isSending.value = false;
  };
  </script>
  
  <style scoped>
  .contact-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    padding: 2.5rem;
    box-sizing: border-box;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 500px;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    color: #fff;
    font-family: 'Arima', system-ui;
  }
  
  .contact-form label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #ffdd57;
  }
  
  .contact-form input,
  .contact-form textarea {
    margin-bottom: 0.2rem;
    padding: 0.5rem;
    border: 2px solid #444;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #ffdd57;
  }
  
  .contact-form button {
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: #ffdd57;
    color: #2c3e50;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .contact-form button:hover {
    background-color: #ffc107;
    transform: scale(1.05);
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    color: #2c3e50;
    text-align: center;
  }
  
  @media (max-width: 600px) {
    .contact-form {
      padding: 1.5rem;
    }
  }
  </style>
  