$(function(){
    $('.swiper-container').each(function () {
        Slider($(this));
    });

} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('slider__wrap')) {
        var _slider = new Swiper(_obj, {
            nextButton: '.slider_next',
            prevButton: '.slider_prev',
            spaceBetween: 21,
            loop: false,
            slidesPerView: 4

        });

    }

    //public properties

    //public methods

    _init();
};