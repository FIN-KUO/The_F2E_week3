
const orderPackageDOM = document.querySelector(".packageArea .orderPackage");
var orderPackage = Sortable.create(orderPackageDOM, {
  animation: 500,  
});


var container = {
  data(){
    return{
      overlayDisplay:0,
      totalScore:0,
    }
  },
  methods:{
    clear(){
      this.overlayDisplay = 0;
    }
  },
};

var vm = Vue.createApp(container).mount('#container');

$('.undone_finish').on('click' , function(){
  var arr = orderPackage.toArray().toString();
  if(arr == "1,2,3,4"){
    window.location.href = "tasks.html";
  }
  else{
    vm.overlayDisplay = 1;
  };  
});