// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "Pe&ccedil;a com 4 gavetas",
      "image" : "models/thumbnails/peca1.png",
      "model" : "models/js/peca1.js",
      "type" : "2"
    }, 
	 {
      "name" : "Base",
      "image" : "models/thumbnails/peca2.png",
      "model" : "models/js/peca2.js",
      "type" : "1"
    }, 
	 {
      "name" : "Pe&ccedil;a com 2 portas",
      "image" : "models/thumbnails/peca3.png",
      "model" : "models/js/peca3.js",
      "type" : "2"
    },
	{
      "name" : "2 portas parede",
      "image" : "models/thumbnails/peca6.png",
      "model" : "models/js/peca6.js",
      "type" : "2"
    },
	{
      "name" : "2 portas parede",
      "image" : "models/thumbnails/peca4.png",
      "model" : "models/js/peca4.js",
      "type" : "2"
    }, 
	{
      "name" : "02 portas de 01 pralileira",
      "image" : "models/thumbnails/peca5.png",
      "model" : "models/js/peca5.js",
      "type" : "2"
    },
    {
      "name" : "adega",
      "image" : "models/thumbnails/peca7.png",
      "model" : "models/js/peca7.js",
      "type" : "2"
    },
    {
      "name" : "porta de correr parede",
      "image" : "models/thumbnails/peca15.png",
      "model" : "models/js/peca15.js",
      "type" : "2"
    },		
	{
      "name" : "canto parede",
      "image" : "models/thumbnails/peca16.png",
      "model" : "models/js/peca16.js",
      "type" : "2"
    },
	{
      "name" : "tampo",
      "image" : "models/thumbnails/peca8.png",
      "model" : "models/js/peca8.js",
      "type" : "2"
    },
	{
      "name" : "porta com escoredor parede",
      "image" : "models/thumbnails/peca17.png",
      "model" : "models/js/peca17.js",
      "type" : "2"
    },
	{
      "name" : "porta com escoredor parede",
      "image" : "models/thumbnails/peca18.png",
      "model" : "models/js/peca18.js",
      "type" : "1"
    },
	{
      "name" : "porta copo parede",
      "image" : "models/thumbnails/peca19.png",
      "model" : "models/js/peca19.js",
      "type" : "2"
    },
	{
      "name" : "Geladeira",
      "image" : "models/thumbnails/peca21.png",
      "model" : "models/js/peca21.js",
      "type" : "2"
    },
	{
      "name" : "porta barede",
      "image" : "models/thumbnails/peca22.png",
      "model" : "models/js/peca22.js",
      "type" : "2"
    },
	{
      "name" : "pratileira vidro canto parede",
      "image" : "models/thumbnails/peca23.png",
      "model" : "models/js/peca23.js",
      "type" : "2"
    },
	{
      "name" : "02 pratileiras parede",
      "image" : "models/thumbnails/peca24.png",
      "model" : "models/js/peca24.js",
      "type" : "2"
    },
	{
      "name" : "porta esq. 01 pratileiras parede",
      "image" : "models/thumbnails/peca25.png",
      "model" : "models/js/peca25.js",
      "type" : "2"
    },
	{
      "name" : "porta dir. 01 pratileiras parede",
      "image" : "models/thumbnails/peca26.png",
      "model" : "models/js/peca26.js",
      "type" : "2"
    },
	{
      "name" : "porta para cima parede",
      "image" : "models/thumbnails/peca27.png",
      "model" : "models/js/peca27.js",
      "type" : "2"
    },
	{
      "name" : "base mdf",
      "image" : "models/thumbnails/peca28.png",
      "model" : "models/js/peca28.js",
      "type" : "2"
    },
	{
      "name" : "mesa parede",
      "image" : "models/thumbnails/peca29.png",
      "model" : "models/js/peca29.js",
      "type" : "1"
    },
        {
      "name" : "Movel Geladeira",
      "image" : "models/thumbnails/peca30.png",
      "model" : "models/js/peca30.js",
      "type" : "2"
    },
        {
      "name" : "Parte superior geladeira",
      "image" : "models/thumbnails/peca31.png",
      "model" : "models/js/peca31.js",
      "type" : "2"
    },
        {
      "name" : "Porta superior esquerda",
      "image" : "models/thumbnails/peca33.png",
      "model" : "models/js/peca33.js",
      "type" : "2"
    },
        {
      "name" : "Porta superior direita",
      "image" : "models/thumbnails/peca34.png",
      "model" : "models/js/peca34.js",
      "type" : "2"
    },
        {
      "name" : "Divisoria",
      "image" : "models/thumbnails/peca35.png",
      "model" : "models/js/peca35.js",
      "type" : "2"
    },
        {
      "name" : "mesa parede",
      "image" : "models/thumbnails/peca37.png",
      "model" : "models/js/peca37.js",
      "type" : "3"
    },

   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }
});
