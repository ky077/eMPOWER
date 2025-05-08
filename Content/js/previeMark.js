let params = new URLSearchParams(document.location.search);
let user;

if (params.has("user")){
    user = params.get("user");    
}

if(user == 't'){
    var viewHTML = document.createElement('div');
    document.querySelector('body').append(viewHTML);
    
    viewHTML.className = 'view-T';
    viewHTML.innerHTML = '教師預覽中...';
}