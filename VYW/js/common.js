adapterFullScreen(0);
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
        Allani();
    },600)
    function audioAutoPlay(id) {
      var audio = document.getElementById(id);
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function() {
          audio.play();
      }, false);
   }
   audioAutoPlay('audiobg');
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
    $(".look_meet_btn").click(function(){
      setTimeout(function(){
        $(".sign_up_now").fadeIn();
      },600)
      $(".meet").fadeIn();
      $(".meeting").removeClass('leave');
      $('.meeting').addClass('current');
      $(".gridContainer").css({
         overflow: 'initial',
      })
    })
    $(".back").click(function(){
      $(".sign_up_now").fadeOut();
      $(".meeting").removeClass('current');
      $(".meeting").addClass('leave');
      $(".gridContainer").css({
         overflow: 'hidden',
      })
      setTimeout(function(){
        $(".meet").hide();
      },2000)
    })
    // 跳转到表单页
    $(".sign_up_btn").click(function(){
      var AddStr=selfMethods.QueryString('channel');
      if(AddStr!=null){
        window.location.href="http://form.huandengpai.com/app/qlik/form/visual-data?channel="+AddStr;
      }else{
        window.location.href="http://form.huandengpai.com/app/qlik/form/visual-data";
      }
    })
    $(".sign_up_now").click(function(){
      var AddStr=selfMethods.QueryString('channel');
      if(AddStr!=null){
        window.location.href="http://form.huandengpai.com/app/qlik/form/visual-data?channel="+AddStr;
      }else{
        window.location.href="http://form.huandengpai.com/app/qlik/form/visual-data";
      }
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
// 所有连接动画
// $(".item").hide();
// $(".item3").show();
// $(".item4").show();
function Allani(){
  setTimeout(function(){
    convergence(".item1",".item2");
    setTimeout(function(){
      $(".i2zi_c").fadeOut(800);
    },2600)
    setTimeout(function(){
       convergence(".item2",".item3");
       setTimeout(function(){
         action3();
       },900)
       setTimeout(function(){
         convergence(".item3",".item4");
         setTimeout(function(){
            action4();
         },1400)
         setTimeout(function(){
            convergence(".item4",".item5");
            earth();
            setTimeout(function(){
              convergence(".item5",".item6");
              action6();
              setTimeout(function(){
                convergence(".item6",".item7");
              },21000)
            },7000)
         },8500)
       },10000)
    },8000)
  },4800)
}
function convergence(ele,ele1){
    $(ele).fadeOut(400);
    setTimeout(function(){
        $(ele).remove();
    },1000)
    $(ele1).addClass('in');
}
function action3(){
  $(".i3cy1").fadeIn(800);
  $(".i3c_item1").addClass('in').fadeIn();
  setTimeout(function(){
    $(".i3c_item1").removeClass('in').addClass('out');
    setTimeout(function(){
      $(".i3cy").fadeOut(800);
      $(".i3cy2").fadeIn(800);
      $(".i3c_item1").fadeOut();
      $(".i3c_item2").addClass('in').fadeIn();
      setTimeout(function(){
        $(".i3c_item2").removeClass('in').addClass('out');
        setTimeout(function(){
          $(".i3cy").fadeOut(800);
          $(".i3cy1").fadeIn(800);
          $(".i3c_item2").fadeOut();
          $(".i3c_item3").addClass('in').fadeIn();
        },1200)
      },2000)
    },1200)
  },2000)
}
var dataCount={
    1:{
        dafault:'35000',
        endValue:'45000',
        time:1
    },
    2:{
        dafault:'500',
        endValue:'1700',
        time:10
    },
    3:{
        dafault:'20',
        endValue:'100',
        time:50
    },
}
function action4(){
  setTimeout(function(){
    count('.i4b1_count',dataCount[1]);
    setTimeout(function(){
      count('.i4b2_count',dataCount[2]);
      setTimeout(function(){
        count('.i4b3_count',dataCount[3]);
      },1100)
    },3800)
  },200)
}
function count(ele,objs){
  var _objs=objs;
  var _default=parseInt(objs.dafault);
  var _endValue=parseInt(objs.endValue);
  var t=setInterval(function(){
    if(_default>_endValue||_default==_endValue){
        _default=_endValue;
        clearInterval(t);
    }
    $(ele).text(parseFloat(_default).toLocaleString());
    _default+=10;
  },parseInt(objs.time))
}
// 地球动画
function earth(){
  var w=$("#myCanvas").width();
  var h=$("#myCanvas").height();
  var canvas = document.getElementById('myCanvas');
  var myCanvas = new frameAnimate(canvas, {
      width: w,
      height:h,
      frame:56,
      loop: true,
      fps:24,
      loopCount: 1,
      extension:'.jpg'
  }, function() {
      console.log("==stop==");
      $(".sh").addClass('in');
      setTimeout(function(){
        $(".earth").removeClass('cen');
      },1000)
  });
  myCanvas.play();
}
var dataAvatar={
  1:{
    avatar:'images/i6/avatar1.png',
    name:'images/i6/name1.png'
  },
  2:{
    avatar:'images/i6/avatar2.png',
    name:'images/i6/name2.png'
  },
  3:{
    avatar:'images/i6/avatar3.png',
    name:'images/i6/name3.png'
  },
  4:{
    avatar:'images/i6/avatar4.png',
    name:'images/i6/name4.png'
  },
  5:{
    avatar:'images/i6/avatar5.png',
    name:'images/i6/name5.png'
  },
  6:{
    avatar:'images/i6/avatar6.png',
    name:'images/i6/name6.png'
  },
  7:{
    avatar:'images/i6/avatar7.png',
    name:'images/i6/name7.png'
  },
  8:{
    avatar:'images/i6/avatar8.png',
    name:'images/i6/name8.png'
  },
  9:{
    avatar:'images/i6/avatar9.png',
    name:'images/i6/name9.png'
  },
  10:{
    avatar:'images/i6/avatar10.png',
    name:'images/i6/name10.png'
  },
  11:{
    avatar:'images/i6/avatar11.png',
    name:'images/i6/name11.png'
  }
}
$(".ssa").hide();
function action6(){
  setTimeout(function(){
    $(".ss1").show();
  },400)
  setTimeout(function(){
    $(".avatar").fadeIn();
    $(".name").fadeIn();
    $(".avatar").addClass('rt');
    var num=1;
    var ts=setInterval(function(){
      num+=1;
      if(num==11|num>11){
        clearInterval(ts);
      }
      $(".avatar").removeClass('rt');
      setTimeout(function(){
        $(".avatar").addClass('rt');
        $(".avatar img").attr('src',dataAvatar[num].avatar);
        $(".ssa").hide();
        $(".ss"+num).fadeIn();
      },100)
    },1800)
  },1800)
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
