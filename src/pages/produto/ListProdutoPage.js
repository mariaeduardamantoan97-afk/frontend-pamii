import './ListProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Produto';

class ListProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content>
            <div class="list-produto"></div>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);

        // Buscando os produtos 
        const produtos = this.fetchProdutos() || [];
        
        //Renderizando os produtos no HTML
        this.renderProdutos(produtos);
    }

  fetchProdutos() {
    return [
            {
                "id": 1,
                "dsc_produto":"Macarronada",
                "valor_unit": 20.99,
                "status": 1
            },
            {
                "id": 2,
                "dsc_produto":"Feijoada",
                "valor_unit": 30.99,
                "status": 1
            },
        
         {
                "id": 3,
                "dsc_produto":"Strogonoff de Frango",
                "valor_unit":"14.99",
                "status": 3
            }]
        
    }

    renderProdutos(produtos) {
        const container = this.querySelector(".list-produto");

        if (produtos.lenght == 0){
            container.innerHTML = '<p> Nenhum Produto Encontrado </p>'
            return;
    
        }
        //fornatando valores em reais 
        const formatMoedas = (value) => {
            return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        }
        const produtoItems = produtos.map(produto => `
            <ion-item>
            <ion-label>
            <h2 style="display: flex; align-items: center; gap: 8px;">
            <ion-icon name="${produto.status == 1 ? 'checkmark-circle' : 'close-circle' }"
            color=" ${produto.status == 1 ? 'success' : 'danger'}"
            style="flex-shrink: 0;" >
            </ion-icon>
            <span>${produto.dsc_produto}</span>
            </h2>
            <p>${formatMoedas(produto.valor_unit)}</p>
            </ion-label>

            <ion-buttons slot="end">
            <ion-button fill="clear" class="btn-edit" data-id="${produto.id}">
                <ion-icon slot="icon-only" name="create-outline"></ion-icon>
            </ion-button>
            <ion-button fill="clear" color="danger" class="btn-delete" data-id="${produto.id}">
                <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
            </ion-button>
            </ion-buttons>
            </ion-item>
            `).join('');

        container.innerHTML = `<ion-list>${produtoItems}</ion-list>`;
    }

}

customElements.define('list-produto-page', ListProdutoPage);