//全選
$('input[id*="checkAll"]').change(function () {
    var now = $(this).attr('name');
    var checkboxes = $('input[id*="checkItem"][name="'+now+'"]:checkbox');
    $(this).is(':checked') ? checkboxes.prop('checked', true) : checkboxes.prop('checked', false) ; 
});
//反向選取
$('input[id*="checkItem"]').change(function () {  
    var now = $(this).attr('name');
    if ($('input[id*="checkItem"][name="'+now+'"]:checked').length == ($('input[id*="checkItem"][name="'+now+'"]:checkbox').length)) {
        $('input[id*="checkAll"][name="'+now+'"]').prop("checked", true);
    } else {
        $('input[id*="checkAll"][name="'+now+'"]').prop("checked", false);
    }
});
