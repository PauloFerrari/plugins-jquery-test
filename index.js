$(document).ready(function(){
   
   $('#button-test').on('click', function(){
      //$(this).alertFunction({message:'index'});
      $(this).showDataId();
   });
   
   $('#input-test').on('input', function(){
       $(this).removeClassError();
   })
    
});