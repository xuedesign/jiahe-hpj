//圖片輪播
loadjs('script/lib/jquery.flexslider.js', function() {
  $(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"});
  });
});

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//chatcode
loadjs('script/lib/chatcode.js');

//行動版選單
loadjs("script/lib/overlay.modernizr.custom.js");
loadjs("script/lib/overlay-classie.js");
loadjs("script/lib/overlay-set.js");

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;