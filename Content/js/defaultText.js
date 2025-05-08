//自編教材-教材封面 預設圖片+名稱
$('.myLibs-item').each(function () {
  var $_getSrc1 = $(this).find('.myLibs-item__front').find('img').attr('src');
  var $_getName1 = $(this).find('.textbookName').text();
  if ( $_getSrc1.indexOf("default-textBook.png") != -1 ) {
    $(this).find('.myLibs-item__front').find('img').after('<div class="default-text">' + $_getName1 + '</div>');
  }
});


//我的教材庫-教材封面 預設圖片+名稱
$('.textbook-description').each(function () {
  var $_getSrc2 = $(this).find('.front').find('img').attr('src');
  var $_getName2 = $(this).find('.textbookName').text();
  if ( $_getSrc2.indexOf("default-textBook.png") != -1 ) {
    $(this).find('.front').find('img').after('<div class="default-text">' + $_getName2 + '</div>');
  }
});

//我的教材庫-單元封面 預設圖片+名稱
$('.unit-item').each(function () {
  var $_getSrc3 = $(this).find('.unit-item__front').find('img').attr('src');
  var $_getName3 = $(this).find('.unitName').text();
  if ( $_getSrc3.indexOf("default-unit.png") != -1 ) {
    $(this).find('.unit-item__front').find('img').after('<div class="default-text">' + $_getName3 + '</div>');
  }
});

//編輯單元-單元封面 預設圖片+名稱
$('.sidebar .editUnit-item').each(function () {
  var $_getSrc4 = $(this).find('.unitFront').find('img').attr('src');
  var $_getName4 = $(this).find('.unitName').text();	
  if ( $_getSrc4.indexOf("default-unit.png") != -1 ) {
    $(this).find('.unitFront').find('img').after('<div class="default-text">' + $_getName4 + '</div>');
  }
});

//學生-最新課程 預設圖片+名稱
$('.textbooks-item').each(function () {  
  var $_getSrc5 = $(this).find('.textbooks-item__front').find('img').attr('src');
  var $_getName5 = $(this).find('.textbookName').text();	
  if ( $_getSrc5.indexOf("default-textBook.png") != -1 ) {
    $(this).find('.textbooks-item__front').find('img').after('<div class="default-text">' + $_getName5 + '</div>');
  } 
});

//actually it can write in the same class......
//but it will need to add class in each pages, there's too many pages need to add...