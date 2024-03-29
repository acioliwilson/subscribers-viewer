<template>
<div class="login">
    <div class="login__card">
        <div class="wrapper">
            <code class="success" v-if="success">Suas credenciais foram enviadas.</code>
            <code class="error" v-if="error">Email inválido.</code>
            <h3>Recuperar Conta</h3>
            <p>Enviaremos as credenciais para o seu email. Caso o email não esteja cadastrado, entre em contato com o desenvolvedor.</p>
            <div class="form-group mt-4">
                <input type="email" required placeholder="Email" v-model="email" class="form-control form-custom">
            </div>
            <div class="d-flex gap-2 align-items-center mt-2">
                <button class="btn-custom" @click="sendCredentials">Enviar</button>
                <router-link to="/" class="btn-custom-outline">Cancelar</router-link>
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
            email: '',
            success: false,
            error: false
        };
    },
    methods: {
        async sendCredentials() {
            if(this.email === 'w.aciolib@gmail.com') {
                await axios.post('https://subscribers-git-master-acioliwilson.vercel.app/send-credentials')
                this.success = true
                this.error = false
            } else {
                console.error('failed')
                this.error = true
                this.success = false
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

.wrapper {
    position: relative;
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

.success {
    background: #3270E0;
    border-radius: 15px;
    padding: 12px 20px;
    color: #FFF;
    font-weight: 600;
    margin-bottom: 20px;
    display: table;
    width: 100%;
}
.error {
    background: #e04632;
    border-radius: 15px;
    padding: 12px 20px;
    color: #FFF;
    font-weight: 600;
    margin-bottom: 20px;
    display: table;
    width: 100%;
}
</style>
