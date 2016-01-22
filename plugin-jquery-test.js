(function ($) {

    $.fn.initFunction = function (options) {
        
        var settings = $.extend({
            message: 'function',
            test: 'function'
        }, options);

        alert(settings.message);
        alert(settings.test);
    }

    $.fn.showDataId = function () {
        var _this = $('.page-header');
        _this.append(' (' + _this.attr('data-id') + ') ');
        return this;
    }
    
    $.fn.removeClassError = function () {
        if($(this).val().length > 0)
            $('.form-group').removeClass('has-error');    
        else
            $('.form-group').addClass('has-error');
    }

} (jQuery));