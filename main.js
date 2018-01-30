$(document).ready( function () {
	var guardar =$('#guardar');
	var contador =0;
	


$(guardar).on('click', function (e) {
	e.preventDefault();

	var nombre = $("#nombre").val();
	var correo = $("#correo").val();
	var u1 = new Usuario(nombre, correo);
	console.log('asd');
    u1.mostrarDatos();
    
	$("#nombre").attr("placeholder", "Nombre");
    $("#correo").attr("placeholder", "Correo");
    console.log('sii');
});


    /*------Objeto usuario------*/
	function Usuario (nombre, correo) {
	    	this.n= nombre;
	    	this.c=correo;
	    	this.mostrarDatos= mostrar;
	    	
	    	contador++;
	}


    /*------------Se muestran los datos de cualquier usuario---*/
	function mostrar () {
		    console.log('sad');
		    var fila= $((document).createElement('tr'));
		    fila.attr('id', 'fila'+contador);

		    var cNombre = $((document).createElement('td'));
		    var textoN = $((document).createTextNode(this.n));
		    cNombre.append(textoN);
		    fila.append(cNombre);

		    var cCorreo = $((document).createElement('td'));
		    var textoC = $((document).createTextNode(this.c));
		    cCorreo.append(textoC);
		    fila.append(cCorreo);

		    var botonEditar = $((document).createElement('button'));
		    botonEditar.attr('id','botones');
		    var textoEditar = $((document).createTextNode('EDITAR'));
		    botonEditar.append(textoEditar);
		    fila.append(botonEditar);

		    var botonEliminar = $((document).createElement('button'));
		    botonEliminar.attr('id','botones');
            var textoEliminar = $((document).createTextNode('ELIMINAR'));
		    botonEliminar.append(textoEliminar);
		    fila.append(botonEliminar);

		    



		    $('tbody').append(fila);

			$("#nombre").attr("placeholder", "Nombre");
		    $("#correo").attr("placeholder", "Correo");

		    $(botonEliminar).on('click', function (e){
		    	var mensaje = confirm('¿Esta seguro de eliminar al usuario '+this.n +'?');
		    	if(true){
		    		fila.remove();
		    		window.alert('El usuario '+this.n + ' ha sido eliminado');
		    		$("#nombre").val(this.n);
		    		$("#correo").val(this.c);
		    		
		    	}else{
                    window.alert('El usuario no ha sido eliminado');
		    	}
		    });




		    $(botonEditar).on('click', function (e){
		    	fila.remove();
		    	$("#nombre").val(this.n);
		    	$("#correo").val(this.c);
		    });
		}















});




