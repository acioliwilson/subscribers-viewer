<template>
<header>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <router-link to="/">
                <img src="data:image/webp;base64,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" class="logo">
            </router-link>
            <div class="search">
                <input type="text" class="search-input" placeholder="Buscar..." />
                <button class="find-btn">
                    <i class="bi bi-search"></i>
                </button>
            </div>
            <button class="btn-custom-light" @click="logout">Sair</button>
        </div>
    </div>
</header>
<div class="container my-5">
    <div class="row">
        <div class="col-md-9">
            <div v-if="loading" class="loading">
                <img src="@/assets/loading.gif" style="width: 30px; height: auto; margin: 150px auto; display: table;" />
            </div>
            <div class="contact-list" v-if="!loading">
                <div class="d-flex justify-between align-items-center header-list">
                    <h2>Lista de inscritos</h2>
                    <div class="custom-badge">
                        <span v-if="newSubscribersCount > 1">{{ newSubscribersCount  }} novos inscritos</span>
                        <span v-else>{{ newSubscribersCount  }} novo inscrito</span>
                    </div>
                </div>
                <div class="body-list px-3">
                    <table class="table table-striped" v-if="!loading">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user._id">
                                <td>{{ index+1 }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <button class="btn-remove" @click="removeUser(user._id)">
                                        <i class="bi bi-x"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="status">
                <div class="new-subscribers">
                    <h2>Novos inscritos</h2>
                    <div class="bar">
                        <div class="progress" :style="{ width: `${newSubscribersCount}%` }"></div>
                    </div>
                    <span class="percentual mt-1">{{ newSubscribersCount }}% de 100%</span>
                    <button class="export-contacts" @click="exportContacts">Exportar Contatos</button>
                    <!-- <a v-if="downloadLink" :href="downloadLink" download="contatos.csv">Baixar Arquivo CSV</a> -->
                </div>
            </div>
            <div class="popup-toggle">
                <button class="link-default" @click="hidePopup">
                    Desativar popup de assinaturas na página inicial.
                </button>
            </div>
        </div>
    </div>
    <div class="footer">
        <span>Copyright {{ new Date().getFullYear() }} - Investloto Serviços LTDA</span>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            users: [],
            loading: true,
            downloadLink: null,
        }
    },
    async mounted() {
        try {
            await axios.get('https://subscribers-git-master-acioliwilson.vercel.app/subscribers')
                .then((response) => {
                    this.users = response.data
                    this.loading = false
                })

        } catch (error) {
            console.error(error)
            this.loading = false
        }
    },
    methods: {
        logout() {
            try {
                localStorage.removeItem('token')
                this.$router.push('/')
            } catch (error) {
                console.error(error)
            }
        },
        async removeUser(userId) {
            try {
                await axios.delete(`https://subscribers-git-master-acioliwilson.vercel.app/subscribers/${userId}`);
                this.users = this.users.filter(user => user._id !== userId);
            } catch (error) {
                console.error(error);
            }
        },
        // async exportContacts() {
        //     try {
        //         const response = await axios.get('https://subscribers-git-master-acioliwilson.vercel.app/export-subscribers')
        //         const csvData = response.data
        //         const blob = new Blob([csvData], {
        //             type: 'text/csv'
        //         });
        //         const url = window.URL.createObjectURL(blob)
        //         this.downloadLink = url
        //     } catch (error) {
        //         console.error('Erro ao exportar contatos:', error)
        //         // Trate o erro conforme necessário
        //     }
        // },
        async exportContacts() {
            try {
                const response = await axios.get('https://subscribers-git-master-acioliwilson.vercel.app/export-subscribers', {
                    responseType: 'blob' // Especifica o tipo de resposta como blob (para download de arquivo)
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'subscribers.csv');
                document.body.appendChild(link);
                link.click();
            } catch (error) {
                console.error('Failed to export contacts:', error);
                // Trate o erro adequadamente
            }
        }
    },
    computed: {
        newSubscribersCount() {
            const lastTenSubscribers = this.users.slice(-10)
            return lastTenSubscribers.length
        }
    },
}
</script>

<style>
header {
    width: 100%;
    display: flex;
    padding: 12px 0;
    background: linear-gradient(90deg, #2b6384 22.03%, #235273 85.57%);
}

.logo {
    width: auto;
    height: 70px;
}

.search {
    background: #FFF;
    border-radius: 100px;
}

.search-input {
    background: none;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    color: #666;
    min-width: 300px;
}

.find-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    font-size: 17px;
    margin-right: 15px;
}

.btn-custom-light {
    border-radius: 100px;
    padding: 10px 20px;
    background: #FFF;
    cursor: pointer;
    border: none;
    color: #333;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
}

.contact-list {
    width: 100%;
    min-height: 300px;
    display: table;
    background: #FFF;
    border-radius: 15px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, .1);
}

.contact-list div.header-list {
    border-bottom: 1px solid #EAEAEA;
    padding: 20px 20px 30px 20px !important;
    justify-content: space-between;
}

.contact-list div.header-list h2 {
    font-size: 19px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin: 0;
}

.custom-badge {
    border-radius: 100px;
    border: 1.5px solid #000;
    color: #000;
    background: #FFD80E;
    box-shadow: 2px 2px 0px #FFD80E;
    padding: 10px 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
}

th {
    color: #666666 !important;
    font-size: 17px !important;
    font-family: 'Raleway', sans-serif !important;
    font-weight: 600 !important;
}

.btn-remove {
    background: #E72828;
    color: #FFF;
    font-size: 17px;
    border: none;
    border-radius: 100px;
}

.status {
    width: 100%;
    background: #FFF;
    border-radius: 15px 15px 0 0;
    display: table;
    padding: 30px 30px 0 30px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, .1);
}

.bar {
    width: 100%;
    height: 6px;
    border-radius: 100px;
    display: table;
    background: #EAEAEA;
    margin-top: 12px;
}

.progress {
    height: 100%;
    display: table;
    background: #2B6384;
}

.new-subscribers h2 {
    font-size: 19px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin: 0;
}

.percentual {
    display: table;
}

.export-contacts {
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
    color: #FFF;
    background: #26597A;
    border-radius: 100px;
    display: table;
    padding: 10px 20px;
    margin: 30px auto;
    transition: .3s ease all;
}

.export-contacts:hover {
    background: #1c445f;
}

.popup-toggle {
    width: 100%;
    background: #FFF;
    border-radius: 0 0 15px 15px;
    display: table;
    padding: 30px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, .1);
    margin-top: 12px;
}

.link-default {
    background: none;
    border: none;
    color: #3270E0;
    font-style: italic;
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    text-decoration: underline !important;
}

.container { position: relative !important; }

.footer {
    width: 100%;
    background: #255677;
    color: #FFF;
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    padding: 40px 0;
    text-align: center;
    margin-top: 50px;
    border-radius: 15px;
}

@media screen and (max-width: 600px) {
  .search {
    display: none;
  }
  .status {
    margin-top: 12px;
  }
}
</style>
