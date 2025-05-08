//中文小天才 標籤 (用於清單頁 .textbooks-item)
function chineseGeniusTag(data, selector) { 
    $(selector).each(function() { 
        var href = '';
        if( $(this).attr('href') ){
            href = $(this).attr('href');   
        }else{
            href = $(this).find('a').attr('href');     
        }
        
        var urlParams = new URLSearchParams(href.split('?')[1]); 
        var uid = urlParams.get('uid');

        if ($.inArray(uid, data) !== -1) {
            $(this).find('[class$="__front"]').append('<div class="chineseGenius-icon">競賽中！</div>');
        }
    });
}

//中文小天才 按鈕 (用於課本頁)
function chineseGeniusBtn(data){
    var searchParams = new URLSearchParams(window.location.search); 
    var uid = searchParams.get('uid'); 
    
    if ($.inArray(uid, data) !== -1) {
        $('body').append(`<button type="button" class="chineseGenius-btn" data-toggle="modal" data-target="#chineseGenius-modal"><span class="chineseGenius-btnText">中文小天才</span></button>
            <div class="modal fade chineseGenius-modal" id="chineseGenius-modal" tabindex="-1" role="dialog" aria-labelledby="chineseGeniusModalLabel">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title chineseGenius-title" id="chineseGeniusModalLabel">中文小天才<small>Weekly Top 10</small></h4>
                    <div class="chineseGenius-renew">每周三24:00更新</div>
                    <div class="chineseGenius-titleBook">全方位中文 1</div>
                  </div>
                  <div class="modal-body">
                    <div class="chineseGenius-myRanking">我的排行：<label>105</label></div>
                    <table class="chineseGenius-table">
                        <thead>
                            <tr><th>排行</th><th>姓名</th><th>分數</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Mehmet Yusuf Yılmaz</td><td>999,999</td></tr>
                            <tr><td>2</td><td>Mustafa Berat Kaya</td><td>999,999</td></tr>
                            <tr><td>3</td><td>Ahmet Demir</td><td>999,999</td></tr>
                            <tr><td>4</td><td>Ali Emir Şahin</td><td>999,999</td></tr>                
                            <tr><td>5</td><td>Hüseyin Ahmet Çelik</td><td>999,999</td></tr>
                            <tr><td>6</td><td>Elif Zehra Yıldız</td><td>999,999</td></tr>
                            <tr><td>7</td><td>Meryem Nisanur Yıldırım Meryem Nisanur Yıldırım Meryem 
Nisanur Yıldırım</td><td>999,999</td></tr>
                            <tr><td>8</td><td>Şerife Ela Öztürk</td><td>999,999</td></tr>
                            <tr><td>9</td><td>Zehra Belinay Aydın</td><td>999,999</td></tr>
                            <tr><td>10</td><td>Sultan Nehir Özdemir</td><td>999,999</td></tr>
                        <tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>`);
    } 
}

/*function chineseGenius(uid){
    if (uid){
        //為課本增加競賽中標籤
        $('.textbooks-item').each(function(){
            let _href = $(this).attr('href'); 

            let url = new URL(_href, window.location.href);
            let uidValue = url.searchParams.get('uid');

            if (uidValue && uidValue === uid) {
                $(this).find('.textbooks-item__front').append('<div class="chineseGenius-icon">競賽中！</div>');
            } 
        });
        
        //增加右邊競賽按鈕及modal
        $('body').append(`<button type="button" class="chineseGenius-btn" data-toggle="modal" data-target="#chineseGenius-modal"><span class="chineseGenius-btnText">中文小天才</span></button>
            <div class="modal fade chineseGenius-modal" id="chineseGenius-modal" tabindex="-1" role="dialog" aria-labelledby="chineseGeniusModalLabel">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title chineseGenius-title" id="chineseGeniusModalLabel">中文小天才<small>Weekly Top 10</small></h4>
                    <div class="chineseGenius-renew">每周三24:00更新</div>
                    <div class="chineseGenius-titleBook">全方位中文 1</div>
                  </div>
                  <div class="modal-body">
                    <div class="chineseGenius-myRanking">我的排行：<label>105</label></div>
                    <table class="chineseGenius-table">
                        <thead>
                            <tr><th>排行</th><th>姓名</th><th>分數</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Mehmet Yusuf Yılmaz</td><td>999,999</td></tr>
                            <tr><td>2</td><td>Mustafa Berat Kaya</td><td>999,999</td></tr>
                            <tr><td>3</td><td>Ahmet Demir</td><td>999,999</td></tr>
                            <tr><td>4</td><td>Ali Emir Şahin</td><td>999,999</td></tr>                
                            <tr><td>5</td><td>Hüseyin Ahmet Çelik</td><td>999,999</td></tr>
                            <tr><td>6</td><td>Elif Zehra Yıldız</td><td>999,999</td></tr>
                            <tr><td>7</td><td>Meryem Nisanur Yıldırım Meryem Nisanur Yıldırım Meryem 
Nisanur Yıldırım</td><td>999,999</td></tr>
                            <tr><td>8</td><td>Şerife Ela Öztürk</td><td>999,999</td></tr>
                            <tr><td>9</td><td>Zehra Belinay Aydın</td><td>999,999</td></tr>
                            <tr><td>10</td><td>Sultan Nehir Özdemir</td><td>999,999</td></tr>
                        <tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>`);
    }
}*/