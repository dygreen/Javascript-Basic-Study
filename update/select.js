// 셔츠를 선택하면 옵션창 보여주기
$('.form-select').eq(0).on('input',function(){
  let value = $('.form-select').eq(0).val();
  if (value == '셔츠'){
    $('.form-select').eq(1).removeClass('form-hide');
    let template = `<option>95</option>
    <option>100</option>`
    $(".form-select").eq(1).html(template);
  } else if (value == '바지'){ // 바지를 선택하면 28,30 옵션 나오기
    $('.form-select').eq(1).removeClass('form-hide');
    let template = `<option>28</option>
    <option>30</option>`;
    $('.form-select').eq(1).html(template);
  }
});
