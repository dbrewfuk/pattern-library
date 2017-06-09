$('.js-expand-trigger').bind('click', function(e){
  $(this).toggleClass('is-expanded');
  $(this).next('.js-expandable').toggleClass('is-expanded');
  e.preventDefault();
});