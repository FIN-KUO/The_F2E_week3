var container = {
  data(){
    return{
      overlayDisplay:0,
      overlay2Display:0,
    }
  },  
  methods:{
    clear(){
      this.overlayDisplay = 0;
      window.location.reload();
    },
    clear2(){
      this.overlay2Display = 0;
    }
  },
};

var vm = Vue.createApp(container).mount('#container');


const testPackageDOM = document.querySelector(".testPackage");
const answerPackage1DOM = document.querySelector(".answerPackage1");
const answerPackage2DOM = document.querySelector(".answerPackage2");

var testPackage = Sortable.create(testPackageDOM, {
  group:'test',
  animation: 500,  
  dataIdAttr: "data-id",  
});

var answerPackage1 = Sortable.create(answerPackage1DOM, {
  group:'test',
  animation: 500,  
  dataIdAttr: "data-id",
  onAdd: (event) => {
    var id = parseInt(answerPackage1.toArray()[0]);
    if(id != 1){
      vm.overlayDisplay = 1;      
    };
  }
});
var answerPackage2 = Sortable.create(answerPackage2DOM, {
  group:'test',
  animation: 500,  
  dataIdAttr: "data-id",
  onAdd: (event) => {
    var id = parseInt(answerPackage2.toArray()[0]);
    if(id != 2){
      vm.overlayDisplay = 1;
    };
  }
});
$('.finish').on('click' , function(){
  if(testPackage.toArray().length > 0){
    vm.overlay2Display = 1;    
  }
  else{
    window.location.href = "giveBack.html";
  };
});