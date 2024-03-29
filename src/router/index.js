import { createRouter, createWebHistory } from 'vue-router';

// Função para verificar se o usuário está autenticado
function isAuthenticated() {
  // Implemente a lógica de verificação de autenticação aqui
  // Por exemplo, você pode verificar se há um token de autenticação válido armazenado no localStorage
  const token = localStorage.getItem('token');
  return !!token; // Retorna true se o token existir, caso contrário, retorna false
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/recover-account',
    name: 'recover-account',
    component: () => import('../views/RecoverAccount.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true } // Adicionando metadados para indicar que esta rota requer autenticação
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guarda de rota para verificar se o usuário está autenticado antes de acessar a rota protegida
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a rota de login
    next({ name: 'login' });
  } else {
    // Caso contrário, permita a navegação normalmente
    next();
  }
});

export default router;