import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Usuário';

class UsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content padding>
                <div class="list-usuario"></div>
            </ion-content>
        `;
        const logoutBtn = this.querySelector('#logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }
        const usuarios = this.fetchUsuarios() || [];
        this.renderUsuarios(usuarios);
    }
    fetchUsuarios() {
        return [
            {
                id: 1, nome: "Julio Cezar",
                usuario: "Juninho",
                senha: 1234,
                perfil: 1
            },
            {
                id: 2,
                nome: "Maria Eduarda",
                usuario: "Duda",
                senha: 4321,
                perfil: 2
            },

            {
                id: 3,
                nome: "Pedro Souza",
                usuario: "Pedra",
                senha: 104201,
                perfil: 3
            }
        ];
    }
    renderUsuarios(listaUsuarios) {
        const container = this.querySelector(".list-usuario");
        if (!listaUsuarios || listaUsuarios.length === 0) {
            container.innerHTML = '<p> Nenhum Usuário Encontrado </p>';
            return;
        }
        const formatMoedas = (value) => {
            return `Código: ${value}`; 
        };
        const usuarioItems = listaUsuarios.map(user => `
            <ion-item>
                <ion-label>
                    <h2 style="display: flex; align-items: center; gap: 8px;">
                        <ion-icon 
                            name="${user.perfil === 1 ? 'checkmark-circle' : 'person-circle-outline'}"
                            color="${user.perfil === 1 ? 'success' : 'primary'}"
                            style="flex-shrink: 0;">
                        </ion-icon>
                        <span>${user.nome}</span>
                    </h2>
                    <p>Login: <strong>${user.usuario}</strong></p>
                    <p>${formatMoedas(user.id)}</p>
                </ion-label>

                <ion-buttons slot="end">
                    <ion-button fill="clear" class="btn-edit" data-id="${user.id}">
                        <ion-icon slot="icon-only" name="create-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" color="danger" class="btn-delete" data-id="${user.id}">
                        <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-item>
        `).join('');

        container.innerHTML = `<ion-list>${usuarioItems}</ion-list>`;
    }
}
customElements.define('usuario-page', UsuarioPage);
export default UsuarioPage;