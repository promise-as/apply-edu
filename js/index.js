charset = 'UTF-8';
$(function () {
  // 单选
  function radio(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radio('.condition .item li', 'on');
});