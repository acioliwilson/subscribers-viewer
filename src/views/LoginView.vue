<template>
  <div class="login">
    <div class="login__card">
      <div class="wrapper">
        <h3>Login</h3>
        <p>
          Entre com as suas credenciais. Caso não lembre das credenciais, <router-link to="/recover-account">solicite ajuda ao suporte</router-link>.
        </p>
        <div class="form-group mt-4">
          <input type="text" placeholder="Usuário" v-model="username" class="form-control form-custom">
        </div>
        <div class="form-group mt-2">
          <input type="password" placeholder="Senha" v-model="password" class="form-control form-custom">
        </div>
        <div class="d-flex gap-2 align-items-center mt-2">
          <button class="btn-custom" @click="login">Entrar</button>
          <router-link to="/recover-account" class="btn-custom-outline">Recuperar Conta</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        const response = await axios.post('https://rmsauth.vercel.app/api/login', data);
        
        if (response.status === 200) {
          console.log('Login successful!');
          // Armazenar o token de autenticação no localStorage
          localStorage.setItem('token', response.data.token);
          // Redirecionar para a rota '/home'
          this.$router.push('/home');
        } else {
          console.error('Invalid credentials. Please try again.');
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F7F7F7;
}
.login__card {
  width: 100%;
  max-width: 450px;
  padding: 40px;
  background: #FFF;
  border-radius: 15px;
  display: table;
  text-align: center;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, .1);
}
.wrapper h3 {
  font-size: 30px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  color: #3270E0;
}
.wrapper p {
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  font-family: 'Raleway', sans-serif;
  color: #9CB2BF;
}
.form-custom {
  border-radius: 100px !important;
  border: 1px solid #EAEAEA !important;
  background: #FAFAFA !important;
  padding: 10px 20px !important;
  color: #000 !important;
  font-family: 'Raleway', sans-serif !important;
  font-size: 16px !important;
  font-style: italic !important;
  font-weight: 500 !important;
}
.form-custom:focus {
  outline: none !important;
}
.form-custom::placeholder {
  color: #AEAEAE !important;
  font-family: 'Raleway', sans-serif !important;
  font-size: 16px !important;
  font-style: italic !important;
  font-weight: 500 !important;
}
.btn-custom {
  padding: 10px 30px;
  border-radius: 100px;
  border: 1px solid #3270E0;
  background: #3270E0;
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  outline: none;
  transition: .3s ease all;
  text-decoration: none;
}
.btn-custom:hover {
  background: #333;
  border-color: #333;
}
.btn-custom-outline {
  padding: 10px 30px;
  border-radius: 100px;
  border: 1px solid #3270E0;
  background: #FFF;
  color: #3270E0;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  outline: none;
  transition: .3s ease all;
  text-decoration: none;
}
.btn-custom-outline:hover {
  background: #275dc0;
  color: #FFF;
}
</style>
