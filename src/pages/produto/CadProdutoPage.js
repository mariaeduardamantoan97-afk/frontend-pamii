import './CadProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Cadastrar Produto';

class CadProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}

            <ion-content class= "ion-podding">
                <form id="form-produto">
                <ion-list>
                    <ion-item>
                    <ion-input type="text" name="dsc_produto" label="descrição do produto" label="floting" required"></ion-input>
                    </ion-item>
                <ion-item>
                    <ion-input type="number" step= "0.01"name="valor_unit" label="valor unitario" label-placment="floating" required"></ion-input>
                    </ion-item>
                     <ion-item>
                    <ion-label>Ativo</ion-label>
                    <ion-toggle stot="end" nome="status"checked></ion-toggle> 
                     </ion-item>
                </ion-list>
                <div class="ion-padding">
                    <ion-button expand="block" type="submit" class="ion-margin-top">
                    salvar produto
                    </ion-button>
                    <ion-button expand="block" color="danger" id="btn-cancelar">
                    cancelar
                    </ion-button>
                </div>
                   </form> 
           </ion-content> 

        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);
        this.querySelector('#bnt-cancelar').addEventListener('click', () => windows.history.back());
    }
}

customElements.define('cad-produto-page', CadProdutoPage);