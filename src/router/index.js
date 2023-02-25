import { createRouter, createWebHashHistory } from "vue-router";
import db_access from '../Helpers.js';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/auth",
            component: () => import("../components/AuthLayout"),
            children: [
                {
                    path: '',
                    name: 'Login',
                    component: () => import('../components/LoginComponent.vue'),
                },
            ]
        },
        {
            path: '/',
            name: "MainLayout",
            component: () => import("../components/MainLayout"),
            children: [
                {
                    path: '/servicos',
                    name: 'Servicos',
                    component: () => import('../components/ServicosComponent'),
                  //  beforeEnter: db_access.ValidarToken
                },
                {
                    path: '/clientes',
                    name: 'Clientes',
                    component: () => import('../components/ClientesComponent'),
                  // beforeEnter: db_access.ValidarToken
                },

                {
                    path: '/produtos',
                    name: 'Produtos',
                    component: () => import('../components/ProdutosComponent'),
                   // beforeEnter: db_access.ValidarToken

                }
            ]
        }]

})

router.beforeEach((to, from, next) => {   
    if (to.path === "/auth") {        
        next();
      } else if (db_access.TokenExpeirado()===true) {        
        next("/auth");
        
      } else {        
        next();
      }



})

export default router;