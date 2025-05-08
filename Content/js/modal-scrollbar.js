$('.modal').on('shown.bs.modal', function(){
    var margin_vertical = parseInt( $(this).find('.modal-dialog').css('margin-top') ) + parseInt( $(this).find('.modal-dialog').css('margin-bottom') ) || 0;
    var height_header   = parseInt( $(this).find('.modal-header').css('height') ) || 0;
    var height_footer   = parseInt( $(this).find('.modal-footer').css('height') ) || 0;
    var height_body     = ( window.innerHeight - height_header - height_footer - margin_vertical - 10 ) + 'px';
    $(this).find('.modal-body').css('max-height', height_body).css('overflow', 'auto');
});