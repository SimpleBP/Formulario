$(document).ready( function () {
	var guardar =$('#guardar');
	var contador =0;
	


	$(guardar).on('click', function (e) {
		e.preventDefault();

		var nombre = $("#nombre").val();
		var correo = $("#correo").val();
		var u1 = new Usuario(nombre, correo);
	    u1.mostrarDatos();
	    
	    $("#nombre").val('');
	    $("#correo").val('');
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

		    var cNombre ='<td>'+this.n+'</td>';
		    fila.append(cNombre);

		    var cCorreo = '<td>'+this.c+'</td>';
		    fila.append(cCorreo);

		     // var botonEditar= '<button>EDITAR</button>';
       //       fila.append(botonEditar);
			// var botonEliminar = '<button>ELIMINAR</button>';
		 //    fila.append(botonEliminar);

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

		    
		    var us = this;

		    $(botonEliminar).on('click', function (e){
		    	console.log('acas ');
		    	var mensaje = confirm('¿Esta seguro de eliminar al usuario '+us.n +'?');
		    	if(mensaje){
		    		fila.remove();
		    		window.alert('El usuario '+us.n + ' ha sido eliminado');
		    	}else{
                    window.alert('El usuario no ha sido eliminado');
		    	}
		    });

		    $(botonEditar).on('click', function (e){
		    	$("#nombre").val(us.n);
		    	console.log('acaca');
		    	$("#correo").val(us.c);
		    	fila.remove();
		    });
		}
});




