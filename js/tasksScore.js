
var container = {
  data(){
    return{
      totalScore:0,
      scoreColor:"#FFFFFF",
      overlayDisplay:0,
      overlay2Display:0,
    }
  },  
  methods:{
    clear(){
      this.overlayDisplay = 0;
      this.overlay2Display = 0;
    }
  },
};

var vm = Vue.createApp(container).mount('#container');


const scorePackageDOM = document.querySelector(".packageArea .scorePackage");
const doPackage1DOM = document.querySelector(".packageArea .doPackage1");
const doPackage2DOM = document.querySelector(".packageArea .doPackage2");
const doPackage3DOM = document.querySelector(".packageArea .doPackage3");
const doPackage4DOM = document.querySelector(".packageArea .doPackage4");

var scorePackage = Sortable.create(scorePackageDOM, {
  group:'score',
  animation: 500,  
  dataIdAttr: "data-score",
  onAdd: (event) => {
    var score = parseInt(scorePackage.toArray()[event.newIndex]);
	  vm.totalScore = vm.totalScore - score;
    if(vm.totalScore > 20 ){
      vm.scoreColor = "#9C0700";
    }
    else{
      vm.scoreColor = "#FFFFFF";
    };
  }
});

var doPackage1 = Sortable.create(doPackage1DOM, {
  group:'score',
  animation: 500,  
  dataIdAttr: "data-score",
  onAdd: (event) => {
    var score = parseInt(doPackage1.toArray()[0]);
	  vm.totalScore = vm.totalScore + score;
    if(vm.totalScore > 20 ){
      vm.scoreColor = "#9C0700";
    }
    else{
      vm.scoreColor = "#FFFFFF";
    };
  }
});
var doPackage2 = Sortable.create(doPackage2DOM, {
  group:'score',
  animation: 500,  
  dataIdAttr: "data-score",
  onAdd: (event) => {
    var score = parseInt(doPackage2.toArray()[0]);
	  vm.totalScore = vm.totalScore + score;
    if(vm.totalScore > 20 ){
      vm.scoreColor = "#9C0700";
    }
    else{
      vm.scoreColor = "#FFFFFF";
    };
  }
});
var doPackage3 = Sortable.create(doPackage3DOM, {
  group:'score',
  animation: 500,  
  dataIdAttr: "data-score",
  onAdd: (event) => {
    var score = parseInt(doPackage3.toArray()[0]);
	  vm.totalScore = vm.totalScore + score;
    if(vm.totalScore > 20 ){
      vm.scoreColor = "#9C0700";
    }
    else{
      vm.scoreColor = "#FFFFFF";
    };
  }
});
var doPackage4 = Sortable.create(doPackage4DOM, {
  group:'score',
  animation: 500,  
  dataIdAttr: "data-score",
  onAdd: (event) => {
    var score = parseInt(doPackage4.toArray()[0]);
	  vm.totalScore = vm.totalScore + score;
    if(vm.totalScore > 20 ){
      vm.scoreColor = "#9C0700";
    }
    else{
      vm.scoreColor = "#FFFFFF";
    };
  }
});

$('.finish').on('click' , function(){
  if(vm.totalScore > 20){
    vm.overlayDisplay = 1;    
  }
  else if(vm.totalScore == 0){
    vm.overlay2Display = 1;
  }
  else{
    window.location.href = "learn.html";
  };  
});
