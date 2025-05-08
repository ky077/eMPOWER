let params = new URLSearchParams(document.location.search);
let user;

if (params.has("user")){
    user = params.get("user");    
}

if(user == 't'){
    document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="CA-T-preview"><div class="T-preview-text">教師預覽中...</div><button class="btn btn-dark btn-lg T-preview-prev" id="PREV"><i class="fas fa-chevron-left"></i></i></button><button class="btn btn-dark btn-lg T-preview-next" id="NEXT"><i class="fas fa-chevron-right"></i></button></div>`);
    
    const PREV = document.querySelector('#PREV'),
          NEXT = document.querySelector('#NEXT');
}