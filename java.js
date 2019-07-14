
var images = ["img/Pig2.jpg","img/Pig3.jpg","img/Pig4.jpg","img/Pig5.jpg","img/Pig6.JPG","img/Pig7.jpg","img/Pig8.jpg","img/Pig9.jpg","img/Pig10.jpg","img/Pig11.jpg","img/Pig12.jpg","img/Pig13.jpg",
"img/Pig14.jpg","img/Pig15.jpg","img/Pig16.jpg","img/Pig17.jpg","img/Pig18.jpg","img/Pig19.jpg","img/Pig20.jpg","img/Pig21.jpg","img/Pig22.jpg","img/Pig23.jpg","img/Pig24.jpg","img/Pig25.jpg","img/Pig26.jpg",
"img/Pig27.JPG","img/Pig28.JPG","img/Pig29.JPG","img/Pig30.JPG","img/Pig31.JPG","img/Pig32.JPG","img/Pig33.JPG","img/Pig34.JPG","img/Pig35.JPG","img/Pig36.JPG","img/Pig37.JPG","img/Pig38.JPG","img/Pig39.JPG",
"img/Pig40.JPG","img/Pig41.JPG","img/Pig42.JPG","img/Pig43.JPG","img/Pig44.JPG","img/Pig45.JPG","img/Pig46.JPG","img/Pig47.JPG","img/Pig48.JPG","img/Pig49.JPG","img/Pig50.JPG","img/Pig51.JPG","img/Pig52.JPG","img/Pig53.jpg",
"img/Pig54.jpg","img/Pig55.jpg"]


for ( i = 0; i < images.length; i++ ){
  $(".slideshow-container").append(`
  <div class="mySlides fade">
  <img src="${images[i]}" style="width:100%;max-width:900px">
</div>
`)
}

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex].style.display = "block";  
    // dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 3000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}