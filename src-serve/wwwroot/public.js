var AppPub = AppPub || {};

AppPub.page = (function () {
  "use strict";

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  $(document).ready(function () {
    $(".user").click(function () {
      createCookie("username", $(this).data("username"));
      location.reload();
    });
  });

})();
