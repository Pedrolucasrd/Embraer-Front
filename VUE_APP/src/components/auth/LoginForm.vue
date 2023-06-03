<template>
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Username</v-label>
        <v-text-field v-model="username" variant="outlined" hide-details color="primary"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Password</v-label>
        <v-text-field v-model="password" variant="outlined" type="password" hide-details color="primary"></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <v-checkbox v-model="rememberDevice" color="primary" hide-details>
            <template v-slot:label class="text-body-1">Remember this Device</template>
          </v-checkbox>
          <div class="ml-sm-auto">
            <RouterLink to="/" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Forgot Password?</RouterLink>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn @click="signIn" color="primary" size="large" block flat>Sign in</v-btn>
      </v-col>
    </v-row>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const rememberDevice = ref(true);
  const router = useRouter();
  
  async function signIn() {
    const formData = new FormData();
    formData.append('username', username.value);
    formData.append('password', password.value);
  
    try {
      const response = await fetch('http://localhost:8081/users/login', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        console.log('Login bem sucedido');
        // Lógica a ser executada quando o login é bem-sucedido
        router.push('/');
      } else {
        // Lógica a ser executada quando ocorre um erro no login
        alert('Invalid login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  </script>
  