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
    watch();
});
var isJob=true;
var DownUp = $('#downLoad'),
    obj, len, Nowindex, direction;
function showPage(swiper){
    // jobRemove();
    obj = swiper;//获取当前对象
    len = obj.slidesSizesGrid.length;//页面总数
    Nowindex = obj.activeIndex;//当前的index值
    direction = obj.swipeDirection;//方向，返回'next','pre'字符串
    // removePageAnimate();//移除动画
    $(".swiper-container-main .swiper-slide-active").addClass("pa");
    switch( Nowindex ){
        case 0:
            watch();
            break;
        case 1:
            // jobRemove();
            // resetWtch();
            break;
        case 2:
            if(isJob){
                job();
              isJob=false;
            }
            break;
        case 3:
          // jobRemove();
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
// 钟表
var w0,w1,w2;
function watch(){
  w0=setTimeout(function(){
    $(".p1-watch2").fadeOut(600);
    $(".p1-watch3").fadeOut(600);
    w1=setTimeout(function(){
      $(".watch").addClass("dump");
      w2=setTimeout(function(){
        $(".p1-watch1").fadeOut(600);
      },600)
    },1400)
  },6800)
}
function  resetWtch() {
  $(".p1-watch2").fadeIn();
  $(".p1-watch3").fadeIn();
  $(".p1-watch1").fadeIn();
  $(".watch").removeClass("dump");
  clearTimeout(w0);
  clearTimeout(w1);
  clearTimeout(w2);
}
/* 小方块自动切换背景颜色 */
function backColorBox(element,dataColor){
  var newArr=[];
  setInterval(function(){
    newArr=dataColor.splice(0);
    var arrOne=newArr.shift();
    newArr.push(arrOne);
    dataColor=newArr;
    // clearInterval(tcolor);
    for(var i=0;i<dataColor.length;i++){
      $(element).each(function(index){
        $(this).css({'background-color':newArr[index]});
      })
    }
  },400)
}
var dataColor0=['#f0ab00','#f79400','#ee7900','#e35500'];
backColorBox('.p5-bot .btn-list',dataColor0);

var t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16;
function job() {
  t0=setTimeout(function() {
    // 1111111111111
    $(".p3-item1").addClass("act");
    t1=setTimeout(function (){
      progresText('.p3_item1_text1',5,25,14);
    },300)
    // 2222222222
    t2=setTimeout(function () {
      $(".p3-item2").addClass("act");
      t3=setTimeout(function (){
        progresText('.p3_item2_text1',30,80,14);
      },300)
      // 333333333
      t4=setTimeout(function () {
        $(".p3-item3").addClass("act");
        t5=setTimeout(function (){
          progresText('.p3_item3_text1',50,80,14);
        },1200)
        // 444444444
        t6=setTimeout(function(){
          $(".p3-item4").addClass("act");
          t7=setTimeout(function (){
            progresText('.p3_item4_text1',50,80,14);
          },800)
          // 内容上移
         // 555555555555555
          // t8=setTimeout(function(){
          //    $(".p3_c_inner").css({'-webkit-transform':'translate3d(0rem,-6rem,0rem)'});
          //    t9=setTimeout(function(){
          //      $(".p3-item5").addClass("act");
          //       t10=setTimeout(function (){
          //         progresText('.p3_item5_text1',50,80,14);
          //         // 6666666666666666
          //         t11=setTimeout(function(){
          //           $(".p3-item6").addClass("act");
          //           t12=setTimeout(function(){
          //             progresText('.p3_item6_text1',20,60,14);
          //           },300)
          //           // 7777777777777
          //           st13=setTimeout(function(){
          //             $(".p3-item7").addClass("act");
          //             t14=setTimeout(function(){
          //               progresText('.p3_item7_text1',95,99,14);
          //               // 88888888888
          //               t15=setTimeout(function(){
          //                 $(".p3-item8").addClass("act");
          //                 t16=setTimeout(function(){
          //                   progresText('.p3_item8_text1',50,80,14);
          //                 },1000)
          //               },2000)
          //             },1200)
          //           },2200)
          //         },2400)
          //       },1200)
          //    },1000)
          // },3400)//------
        },3600)
      },2400)
    },2800)
  },3800)
}
function jobRemove(){
  $(".p3-item2").removeClass("act");
  $(".p3-item1").removeClass("act");
  $(".p3-item3").removeClass("act");
  $(".p3-item4").removeClass("act");
  $(".p3-item5").removeClass("act");
  $(".p3-item6").removeClass("act");
  $(".p3-item7").removeClass("act");
  $(".p3-item8").removeClass("act");
  $(".p3_item1_text1").html('');
  $(".p3_item2_text1").html('');
  $(".p3_item3_text1").html('');
  $(".p3_item4_text1").html('');
  $(".p3_item5_text1").html('');
  $(".p3_item6_text1").html('');
  $(".p3_item7_text1").html('');
  $(".p3_item8_text1").html('');
   $(".p3_c_inner").css({'-webkit-transform':'translate3d(0rem,0rem,0rem)'});
  clearTimeout(t0);
  clearTimeout(t2);
  clearTimeout(t3);
  clearTimeout(t4);
  clearTimeout(t5);
  clearTimeout(t6);
  clearTimeout(t7);
  clearTimeout(t8);
  clearTimeout(t9);
  clearTimeout(t10);
  clearTimeout(t11);
  clearTimeout(t12);
  clearTimeout(t13);
  clearTimeout(t14);
  clearTimeout(t15);
  clearTimeout(t16);
}
function progresText(element,init,num,time){
  var set=setInterval(function () {
    if(init==num||init>num){
      init=num;
      clearInterval(set);
    }
    $(element).html(init+'%');
    init++;
  },time)
}
