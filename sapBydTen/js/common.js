adapterFullScreen(0);
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },600)
    function audioAutoPlay(id) {
      var audio = document.getElementById(id);
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function() {
          audio.play();
      }, false);
   }
   // audioAutoPlay('audiobg');
   var istrue=true;
   $("#switch").click(function(){
    if(istrue){
      $("#switch").removeClass().addClass('close');
      document.getElementById('audiobg').pause();
      istrue=false;
    }else{
      $("#switch").removeClass().addClass('open');
      document.getElementById('audiobg').play();
      istrue=true;
    }
   })
   $(".play").click(function(){
      // $("#switch").removeClass().addClass('close');
     // document.getElementById('audiobg').pause();
     $(".video-box").show();
     $("#my-video")[0].play();
   })
   var myVideo=document.getElementById('my-video');
   myVideo.addEventListener('ended',function(){
      // alert(1);
      // $(".video-box").html(' ');
      // $(".video-box").hide();
   })
});
var DownUp = $('#downLoad'),
    obj, len, Nowindex, direction;
function showPage(swiper){
    obj = swiper;//获取当前对象
    len = obj.slidesSizesGrid.length;//页面总数
    Nowindex = obj.activeIndex;//当前的index值
    direction = obj.swipeDirection;//方向，返回'next','pre'字符串
    removePageAnimate();//移除动画
    $(".swiper-container-main .swiper-slide-active").addClass("pa");
    switch( Nowindex ){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
    }
    if( Nowindex >= len-1 ){
        DownUp.hide();
    }else{
        DownUp.show();
    }
}

//第一个页面上的动画
function firstPageAnimate(time){
    setTimeout(function(){
        $(".swiper-container-main .swiper-slide-active").addClass("pa");
    },time);
}
//去除个页面的动画
function removePageAnimate(){
    $(".swiper-container-main .swiper-slide").removeClass("pa");
}

//页面适配
function adapterFullScreen(type){
  if( type == 0){
    var h = window.innerHeight*640/window.innerWidth;
    if( h < 1008 ){
      var s = h/1008;
      $("._qp").css({ '-webkit-transform': 'scale('+ s +')' , 'transform': 'scale('+ s +')' });
    }else{
      $("._qp").css({ '-webkit-transform': 'none' , 'transform': 'none' });
    }
  }
}
$('.lockTouchmove').each(function(){
    $(this)[0].addEventListener('touchmove',function(e){
        e.preventDefault();
    },false);
});
