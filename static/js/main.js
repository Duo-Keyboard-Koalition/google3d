document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var sidebarToggle = document.getElementById("sidebarToggle");
  var content = document.getElementById("content");

  sidebarCollapse.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    content.style.marginLeft = "0";
    // Flip the arrow direction
    var arrow = sidebarToggle.querySelector("i");
    if (sidebar.classList.contains("collapsed")) {
      arrow.classList.remove("bi-chevron-left");
      arrow.classList.add("bi-chevron-right");
    } else {
      arrow.classList.remove("bi-chevron-right");
      arrow.classList.add("bi-chevron-left");
    }
  });

  // Close sidebar when clicking outside on mobile
  content.addEventListener("click", function () {
    if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });

  // Adjust content margin on window resize
  window.addEventListener("resize", function () {
    content.style.marginLeft = "0";
  });

  // Initial margin setting
  //if (window.innerWidth > 768) {
  content.style.marginLeft = "0px";
  //}
});
