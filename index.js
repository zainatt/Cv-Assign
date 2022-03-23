$(document).ready(function () {
    
    $(".heading#inf").click(function () {
        $(".p1#inf").slideToggle("slow");
    });
    
    $(".heading#social").click(function () {
        $(".p1#social").slideToggle("slow");
    });
    
    $(".heading#language").click(function () {
        $(".p1#language").slideToggle("slow");
    });
    
    $(".p2#pro").click(function () {
      $(".p3").slideToggle("slow");
    });

    $(".p2#edu").click(function () {
      $(".lr-box#edu").slideToggle("slow");
    });
  
    $(".p2#work").click(function () {
      $(".lr-box#work").slideToggle("slow");
    });
  
    $(".p2#skill").click(function () {
        $(".s-box").slideToggle("slow");
      });
    $(".p2#hobby").click(function () {
        $("#hobby.p7").slideToggle("slow");
      });
  });