$(function () {
  $(document).scroll(function () {
    var $header = $("header");
    $header.toggleClass('bb', $(this).scrollTop() > $nav.height());
    $header.toggleClass('b--gray', $(this).scrollTop() > $nav.height());
  });
});
