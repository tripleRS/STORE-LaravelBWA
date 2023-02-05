/* untuk mendeteksi dan pengecekan, jika dalam scroll telah mencapai dan atau kurang dari panjang nav, backgroundnya akan muncul */
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
