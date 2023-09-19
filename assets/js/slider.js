var itemSlide = $('#sliderIcons span');
var sectionSlide =  $('.slide');
itemSlide.bind('click', function(){
    itemSlide.removeClass('active');
    var dataSlide = $(this).attr('data-slide');
    $(this).addClass('active');
    sectionSlide.removeClass('active');
    $('#'+dataSlide).addClass('active');
});