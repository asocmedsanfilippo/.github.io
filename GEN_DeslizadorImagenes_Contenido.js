function creaImagenes(textoBase,lista) {
	var numSlides = lista.length;
	document.write('<div class="w3-display-container slideshow-container">');  
	for (i = 1; i <= numSlides; i++) {
		document.write('<div class="mySlides ">');
		// var texto1 = '<div class="numbertext">'
		// texto1 = texto1.concat(i)
		// texto1 = texto1.concat(' / ')
		// texto1 = texto1.concat(numSlides)
		// texto1 = texto1.concat('</div>')
		// document.write(texto1);  
		var rutaImagenSinExt = 'images/'
		rutaImagenSinExt = rutaImagenSinExt.concat(textoBase)
		rutaImagenSinExt = rutaImagenSinExt.concat('_')
		rutaImagenSinExt = rutaImagenSinExt.concat(('0' + i).substr(-4))
		var texto2 = '<a href="'
		texto2 = texto2.concat(rutaImagenSinExt)
		texto2 = texto2.concat('.jpg" target="blank">')
		texto2 = texto2.concat('<img src="')
		texto2 = texto2.concat(rutaImagenSinExt)
		texto2 = texto2.concat('.jpg" style="width:100%">')
		texto2 = texto2.concat('</a>')
		// var texto3 = '<div class="text">'
		// texto3 = texto3.concat(lista[i - 1])
		// texto3 = texto3.concat('</div>')
		// document.write(texto3);
		if (i ==1)
		{
			document.write(texto2);  
			var textoDona = '';
			textoDona = textoDona.concat('<a href="Donar.html"><button class="btn der75centroV ">DONA</button></a>');
			document.write(textoDona);
		}
		else
		{
			document.write(texto2);  
		}
		document.write('</div>');  
	}
	document.write('<a class="prev" onclick="plusSlides(-1)">&#10094;</a>');  
	document.write('<a class="next" onclick="plusSlides(1)">&#10095;</a>');  
	document.write('</div>');  
	document.write('<br>');  
	// document.write('<div class="w3-display-container w3-content w3-center" >');  
	document.write('<div class="w3-display-container w3-content w3-center" style="max-width:800px">');  
	for (i = 1; i <= numSlides; i++) {
		var texto4 = '<span class="dot tooltip " onclick="currentSlide('
		texto4 = texto4.concat(i)
		texto4 = texto4.concat(')">')
		texto4 = texto4.concat('<span class="tooltiptext">')
		texto4 = texto4.concat(lista[i - 1])
		texto4 = texto4.concat('</span>')
		texto4 = texto4.concat('</span>')
		document.write(texto4);  
	}
	document.write('</div>');  
	document.write('<script type="text/javascript" src="GEN_DeslizadorImagenes.js"></script>');  
}
