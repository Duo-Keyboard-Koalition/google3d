$(document).ready(ready_function);

function  ready_function () {
  var $sidebar = $("#sidebar");
  var $sidebarCollapse = $("#sidebarCollapse");
  var $sidebarToggle = $("#sidebarToggle");
  var $content = $("#content");

  $sidebarCollapse.on("click", function () {
    $sidebar.toggleClass("active");
  });

  $sidebarToggle.on("click", function () {
    $sidebar.toggleClass("collapsed");
    $content.css("marginLeft", "0");
    // Flip the arrow direction
    var $arrow = $sidebarToggle.find("i");
    $arrow.toggleClass("bi-chevron-left bi-chevron-right");
  });

  // Close sidebar when clicking outside on mobile
  $content.on("click", function () {
    if ($(window).width() <= 768 && $sidebar.hasClass("active")) {
      $sidebar.removeClass("active");
    }
  });

  // Adjust content margin on window resize
  $(window).on("resize", function () {
    $content.css("marginLeft", "0");
  });

  // Initial margin setting
  $content.css("marginLeft", "0px");
}