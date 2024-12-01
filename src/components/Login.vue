<template>
    <div class="login-container">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            placeholder="Ingrese su correo"
          />
        </div>
        <div class="input-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Cargando...' : 'Iniciar sesión' }}
        </button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'LoginForm',
    setup() {
      const form = ref({
        email: '',
        password: '',
      });
      const loading = ref(false);
      const errorMessage = ref('');
  
      const handleSubmit = () => {
        loading.value = true;
        errorMessage.value = ''; // Reset error message
  
        // Simulamos una solicitud de autenticación
        setTimeout(() => {
          if (form.value.email === 'user@example.com' && form.value.password === 'password123') {
            // Aquí iría la lógica para redirigir o almacenar el estado del usuario autenticado
            console.log('Usuario autenticado');
          } else {
            errorMessage.value = 'Correo electrónico o contraseña incorrectos';
          }
          loading.value = false;
        }, 1500); // Simulación de espera de 1.5 segundos
      };
  
      return {
        form,
        loading,
        errorMessage,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  .error {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  