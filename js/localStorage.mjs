import {LocalStorage} from './node-localstorage';
const localStorage = new LocalStorage('./scratch');

// Após o login bem-sucedido
localStorage.setItem('user', 'John Doe');
sessionStorage.setItem('token', 'abc123');

// Em outra parte da aplicação (por exemplo, em outra página ou em outro momento)
let user = localStorage.getItem('user');
let token = sessionStorage.getItem('token');

// Verificação se o usuário está autenticado
if (user && token){
    console.log(`Authenticated user: ${user}`);
      // Realizar ações autenticadas, como exibir conteúdo restrito
} else {
    console.log(`User doesn't authenticated: redirecting to login page.`);
      // Redirecionar para a página de login
}