function showModalBlack(size, html) {
    // size: sm | md | lg
    $('body').append(`<div class="modal fade modal-black" id="modal-black" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
                      <div class="modal-dialog modal-` + size + `" role="document">
                        <div class="modal-content">`+
                          html +
                        `</div>
                      </div>
                    </div>`);

    $('#modal-black').modal('show');

    $('#modal-black').on('hidden.bs.modal', function () {
        $('#modal-black').remove();
    })
}  