const app = new Vue({
  el: '#app',
  data: {
    resolucion: null
  },
  created(){
    this.resolucion = screen.width;
  }
});
