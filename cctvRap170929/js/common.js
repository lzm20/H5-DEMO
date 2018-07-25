adapterFullScreen(0);
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },600)
    //播放视频
    $(".play-video").click(function(){
        $(".page1").fadeOut();
        playVideo(".play-video");
    })
    $(".back-play").click(function(){
        playVideo(".play-video");
    })
    // 中国影像
    $(".China_video").click(function(){
        playVideo(".China_video");
    })
    // 航拍中国
    $(".Aerial_China").click(function(){
        playVideo(".Aerial_China");
    })
    // 绿水青山
    $(".Green_water_Castle_Peak").click(function(){
        playVideo(".Green_water_Castle_Peak");
    })
    function playVideo(em){
      var VideoSrc1="http://hdp-video.oss-cn-beijing.aliyuncs.com/html/cctvrap0929/cctvRap.mp4";//rap视频
      var VideoSrc2="http://hdp-video.oss-cn-beijing.aliyuncs.com/html/cctvrap0929/China_video.mp4";//中国影像方志
      var VideoSrc3="http://hdp-video.oss-cn-beijing.aliyuncs.com/html/cctvrap0929/Aerial_photography_in_China.mp4";//航拍中国
      var VideoSrc4="http://hdp-video.oss-cn-beijing.aliyuncs.com/html/cctv170927/Green_water_Castle_Peak.mp4";//绿水青山
      var VideoBox=document.createElement('div');
      VideoBox.setAttribute('class','videobox');
      var MyVideo=document.createElement('video');
      MyVideo.setAttribute('x5-video-player-type','h5');
      MyVideo.setAttribute('webkit-playsinline','true');
      MyVideo.setAttribute('playsinline','true');
      MyVideo.setAttribute('id','myVideo');
      var dataVideo=$(em).attr('data-video');
      if(dataVideo=="one"){
        MyVideo.setAttribute('src',VideoSrc1);
      }else if(dataVideo=="two"){
        MyVideo.setAttribute('src',VideoSrc2);
      }else if(dataVideo=="stree"){
        MyVideo.setAttribute('src',VideoSrc3);
      }else if(dataVideo=="four"){
        MyVideo.setAttribute('src',VideoSrc4);
      }
      var CloseVideo=document.createElement('div');
      CloseVideo.setAttribute('class','close-video');
      VideoBox.appendChild(CloseVideo);
      VideoBox.appendChild(MyVideo);
      document.body.appendChild(VideoBox);
      document.getElementById('myVideo').play();
      $(".close-video").click(function(){
        document.getElementById('myVideo').style.display="none";
        $(".videobox").remove();
        $(".page1").fadeOut();
        $(".page2").fadeIn();
      })
      MyVideo.addEventListener('ended',function(){
        $(".videobox").remove();
        $(".page1").fadeOut();
        $(".page2").fadeIn();
      })
    }
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
