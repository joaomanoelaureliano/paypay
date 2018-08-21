import ListController from './list.controller'
import FormController from './form.controller'

export const fornecedorConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('app.fornecedor', {
      template: require('@views/default.html'),
      url: 'fornecedores',
      redirectTo:'app.fornecedor.list'
    })
    .state('app.fornecedor.list', {
      template: require('@views/fornecedores/list.html'),
      url: '/list',
      controller: ListController,
      controllerAs: 'vm'
    })
    .state('app.fornecedor.new', {
      template: require('@views/fornecedores/form.html'),
      url: '/new',
      controller: FormController,
      controllerAs: 'vm'
    })
    .state('app.fornecedor.edit', {
      template: require('@views/fornecedores/form.html'),
      url: '/{id}',
      controller: FormController,
      controllerAs: 'vm'
    });
};

fornecedorConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
