function lightBox(){
    const lightbox = document.querySelectorAll('.CA-lightbox');

    lightbox.forEach(lightboxEl => {
      lightboxEl.addEventListener('click', (event) => {
        let imgEls = lightboxEl.querySelectorAll('img');
        imgEls.forEach(imgEl => {
            let imgSrc = imgEl.src;

            if (!document.getElementById('modal-lightbox')) {
                let modalHTML = `<div class="modal fade" id="modal-lightbox">
                                    <div class="modal-dialog modal-dialog-centered modal-xl modal-maxImg">
                                      <div class="modal-content">
                                        <div class="modal-body text-center">
                                          <button type="button" class="btn-close position-absolute top-0 end-0 m-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                          <img src="${imgSrc}" alt="canHelp-teacher-img.png" class="img-fluid "/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;

                const existingModal = document.getElementById('modal-lightbox');
                if (existingModal) {
                    existingModal.remove();
                }

                document.body.insertAdjacentHTML('beforeend', modalHTML);

                const lightboxModal = new bootstrap.Modal(document.getElementById('modal-lightbox'));
                lightboxModal.show();
            }

            const lightboxModalEl = document.getElementById('modal-lightbox');
            lightboxModalEl.addEventListener('hidden.bs.modal', event => {
                if (lightboxModalEl.parentNode !== null) {
                  lightboxModalEl.parentNode.removeChild(lightboxModalEl);
                }
            })
        });
      });
    });
}