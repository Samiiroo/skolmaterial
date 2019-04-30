$(document).ready(function(){
  let player =1;

  $('.square').on('click', function(event) {

    let squareSelected = $(this);

    if(squareSelected.hasClass('ex') || squareSelected.hasclass('oh')) {
      alert('this square has already been selected! please select another.')
    } else {
      if(player === 1){
        squareSelected.addClass('ex');
      }else{
        squareSelected.addClass('oh');
      }
      //add all the rest of our logic.
    }

  });

});
