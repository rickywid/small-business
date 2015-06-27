$(document).ready(function(){
	
	$('div.product').find('ul').addClass('specs');
	$('ul.specs').hide();
	$('div.product').append('<span class="save">Save: 50%</span><p><a href="#">See More</a></p><button class="btn-info">Buy Now</button><button class="btn-danger">Specifications</button>');
	$('div.product').children('h1').prepend('<h3>IBM Fusion T1000</h3')

	$('div.product').on('mouseenter',function(){
		$('div.product').removeClass('highlight');
		$(this).addClass('highlight');
	});

	$(document).on('click','button.btn-danger',	function(){
		$('ul.specs').css({"background-color": "#e5e5ff", "border-radius":"5px", "padding":"20px", "list-style":"none", "font-size":"13px","box-shadow":"5px 5px 10px 1px black"});
		$(this).parent().children('ul.specs').slideToggle('fast');
	});

});