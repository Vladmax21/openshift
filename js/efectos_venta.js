$(document).ready(function(){

// Scroll Elementos Menu
	var compactacion = $('#compactacion').offset().top,
		concreto = $('#concreto').offset().top,
		corte = $('#corte').offset().top,
		electricidad = $('#electricidad').offset().top;
		elevacion = $('#elevacion').offset().top;


// Boton Acerca de
	$('#btn-compactacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-concreto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: concreto - 40
		});
	});

	$('#btn-corte').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: corte - 40
		});
	});

	$('#btn-electricidad').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: electricidad - 40
		});
	});

	$('#btn-elevacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: elevacion - 40
		});
	});




});