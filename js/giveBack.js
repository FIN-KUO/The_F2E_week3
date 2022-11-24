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


$('.understand').on('click' , function(){
  if($('.parker_active').length < 2){
    vm.overlay2Display = 1;    
  }
  else{
    window.location.href = "finish.html";
  };
});
$('#radio1').on('click' , function(){
  $('#radio1').addClass('parker_active');
  $('#radio2').removeClass('parker_active');
  vm.overlayDisplay = 1;
});
$('#radio2').on('click' , function(){
  $('#radio2').addClass('parker_active');
  $('#radio1').removeClass('parker_active');
});
$('#radio3').on('click' , function(){
  $('#radio3').addClass('parker_active');
  $('#radio4').removeClass('parker_active');
});
$('#radio4').on('click' , function(){
  $('#radio4').addClass('parker_active');
  $('#radio3').removeClass('parker_active');
  vm.overlayDisplay = 1;
});