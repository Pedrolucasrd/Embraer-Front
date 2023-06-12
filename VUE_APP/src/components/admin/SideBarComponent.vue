<template>
    <div class="sidebar">
      <button id="cadastro" class="square" @click="showComponent(1)">Cadastro</button>
      <button class="square" @click="showComponent(2)">Componente 2</button>
      <button class="square">3</button>
      <button class="square">4</button>
      <button class="square">5</button>
    </div>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'
  
  export default {
    name: 'Sidebar',
    data() {
    return {
      activeComponent: null
    };
  },
  methods: {
    showComponent(componentNumber) {
      this.activeComponent = componentNumber;
      console.log(this.activeComponent);
    }
  }
};
  </script>
  
  <style>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 150px; /* Ajuste a largura conforme necessário */
    background-color: #ffffff; /* Cor de fundo da sidebar */
    padding: 10px;
  }
  
  .square {
    width: 100%;
    height: 50px;
    background-color: #0066b1;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  </style>
  