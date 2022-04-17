/* 버튼0 누르면 
-모든 버튼에 붙은  orange 클래스명 제거
-버튼0에 orange 클래스명 추가
-모든 div에 붙은 show 클래스명 제거
-div0에 show 클래스명 추가
*/

let button = $(".tab-button");
let content = $(".tab-content");

// 반복문 버전
// for(let i = 0; i < button.length; i++){
//   button.eq(i).click(function(){
//     tab(i);
//   });
// }

function tab(i){
  button.removeClass("orange");
  button.eq(i).addClass("orange");
  content.removeClass("show");
  content.eq(i).addClass("show");
}

// dataset 버전: 이벤트리스너 1개만 써도 개발 가능
$(".list").click(function(e){
  tab(parseInt(e.target.dataset.id));
  /* parseInt(문자를 숫자로 변환): e.target.dataset.id의 값이 문자이므로 숫자로 변환하는 것이 더 정확함 */
});