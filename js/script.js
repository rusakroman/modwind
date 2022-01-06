const modalBtn = $('.butclick__button')

const modalBtn2 = $('.helper__button')

const modalBtn3 = $('.header__button')

const modalClose = $('.modal__button')

modalBtn.click(function(){
  $('.container_form2').show(1000); 
});

modalBtn2.click(function(){
  console.log("Привет!");
  $('.container_form3').show(1000); 
});

modalBtn3.click(function(){
  $('.burger-menu').show(1000); 
});

modalBtn3.dblclick(function(){
  $('.burger-menu').hide(1000); 
});



modalClose.click(function(){
  $('.container_form2').hide(500); 
});

modalClose.click(function(){
  $('.container_form3').hide(500); 
});


