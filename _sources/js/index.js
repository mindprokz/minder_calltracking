$(document).ready(function() {
  $('a[href^="#"]').on('click', function () {
  	$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 250 }, 1000 );
  	return false;
  });
});
