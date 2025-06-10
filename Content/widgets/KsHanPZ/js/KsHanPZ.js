(function ($) {
  $.fn.extend({
    KsHanPZ: function (settings) {
      var _defaultSettings = { //option
        typeSet : 'HanPZ',
        typePosition : 'left',
        hiddenSet  : '',           
          
        itemMarginTop: 0,
        itemMarginRight: 0,
        itemMarginBottom: 0,
        itemMarginLeft: 0,
          
        hFontSize: 48,
        zt5Symbol: '˙'
      };
      var _option = $.extend(_defaultSettings, settings);
      return this.each(function () {
          if(_option.hiddenSet != ''){
             var _hiddenSet = 'hidden-'+_option.hiddenSet;
          }else{
                 _hiddenSet = '';
          }
          //設定class樣式
          $(this).addClass('type-'+_option.typeSet+' '+'text-'+_option.typePosition+' '+_hiddenSet).css({
              "font-size": _option.hFontSize,
          });
          
          //設定margin樣式
          if(_option.itemMarginTop!=0 || _option.itemMarginRight!=0 || _option.itemMarginBottom!=0|| _option.itemMarginLeft!=0 ){
              $(this).find('.KsHanPZ__item').css({
                  "margin-top":     _option.itemMarginTop,
                  "margin-right":   _option.itemMarginRight,
                  "margin-bottom":  _option.itemMarginBottom,
                  "margin-left":    _option.itemMarginLeft,
              });
          }
          
          //輕聲位置
          $(this).find('.KsHanPZ__item-z .zt').each(function(){
              if($(this).html()==_option.zt5Symbol){
                  $(this).addClass('zt5');
              }
          });
      });
    },
  });
})(jQuery);
