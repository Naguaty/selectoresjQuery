

var $checkbox = $('input[type="checkbox"]');

$checkbox.click(function(){
	var $div, activo, $div, $input;
  
  activo = $checkbox.is(':checked');
  $div = $checkbox.closest('div');
  $input = $div.find('input[type="text"]');
  console.log($input);
  if(activo){
    $input.removeAttr('disabled').focus();
  }else{
    $input.attr('disabled','disabled');
  }
});





function leerDatos (){
  var $arrInputs = [], queryString = '?', arrValores=[];
  
  $arrInputs = $('.form-control');
  for(var i = 0; i < $arrInputs.length; i++){
    var nombre = '', valor = '', $elemento;
    $elemento = $($arrInputs[i]);
    nombre = $elemento.attr('name');
    valor = $elemento.val();
    if(nombre){
      arrValores.push(nombre + '=' + encodeURIComponent(valor) );
    	 
    }
  }
  queryString += arrValores.join('&'); 
	console.log( queryString);
  return queryString;
}



function limpiarDatos (){
  var $arrInputs = [];
  
  $arrInputs = $('.form-control');
  for(var i = 0; i < $arrInputs.length; i++){
    var $elemento;
    $elemento = $($arrInputs[i]);
    $elemento.val('');
  }
}









