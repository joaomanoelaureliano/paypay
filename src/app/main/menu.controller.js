export default class MenuController {
    constructor() {
        this.itens = [
            {
                state:'app.dashboard',
                icon: 'icon-home',
                name: 'Dashboard'
            },{
                state:'app.fornecedor',
                icon: 'icon-users',
                name: 'fornecedores'
            },{
                state:'app.produto',
                icon: 'icon-shopping-cart',
                name: 'Produtos'
            },{
                state:'app.pedido',
                icon: 'icon-file',
                name: 'Pedidos'
            }
        ]
    }
}