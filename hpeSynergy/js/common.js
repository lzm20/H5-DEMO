// adapterFullScreen(0);
var progress=setInterval(ssss,1000);
var number=0;
var soundInstance;
function ssss(){
    number+=numRandom(1,9);
    if(number==99||number>99){
        number=99;
        clearInterval(progress);
    }
    $("._laoding_text").html(number+"%");
}
function numRandom(min, max){
    return min + Math.floor(Math.random() * (max - min + 1));
}
$(window).load(function(){
    loadingBgMusic();
    clearInterval(progress);
    loadDate();
    $("._laoding_text").html("100%");
    setTimeout(function(){
        $("#lp").fadeOut(600);
        setTimeout(function(){
            $(".cover_page").addClass("pa");
        },400)
    },1000)
    var opentype=true;
    //默认情况是音乐是播放的
    $(".open_music").click(function(){
        if(opentype){
            if(soundInstance.playState == 'playFailed'){
                document.getElementById("audiobg").pause();
            }else{
                soundInstance.stop();
            }
            $(".open_music img").attr("src","images/close.png");
            opentype=false;
        }else{
            if(soundInstance.playState == 'playFailed'){
                document.getElementById("audiobg").play();
            }else{
                soundInstance.play();
            }
            $(".open_music img").attr("src","images/open.png");
            opentype=true;
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

var imgBaseUrl="/tem/hpeSynergy/images/",
    audiobgUrl="/tem/hpeSynergy/mp3/bg.mp3",
    loader,
    manifest=[
        // { id : "i1",  src: imgBaseUrl+'1.gif'},
        // { id : "i2",  src: imgBaseUrl+'2.gif'},
        // { id : "i3",  src: imgBaseUrl+'3.gif'},
        // { id : "i4",  src: imgBaseUrl+'4.gif'},
        // { id : "i5",  src: imgBaseUrl+'5.gif'},
        { id : "audiobg", src: audiobgUrl}
    ]
function loadDate(){
      loader = new createjs.LoadQueue(false);
      createjs.Sound.alternateExtensions = ["mp3"];
      loader.installPlugin(createjs.Sound);
      loader.on("fileload", handleFileLoad);
      loader.on("complete", handleComplete);
      loader.on("error", loadError);
      loader.on("progress", handleFileProgress);
      loader.loadManifest(manifest);
}
function handleFileLoad(evt){
    console.log("加载完成！",evt.text);
}
function loadError(evt){
    console.log("加载出错！",evt.text);
}
function handleFileProgress(evt) {
    // console.log("加载进度！",evt.loaded); 
    // $("._laoding_text").html(evt.loaded*100+"%");
}
function handleComplete(event) {
    console.log("全部加载完毕！");
    // $("#lp").fadeOut(800);
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
    // if( type == 0){
    //     var h = window.innerHeight*640/window.innerWidth;
    //     if( h < 1008 ){
    //       var s = h/1008;
    //       $("._qp").css({ '-webkit-transform': 'scale('+ s +')' , 'transform': 'scale('+ s +')' });
    //     }else{
    //       $("._qp").css({ '-webkit-transform': 'none' , 'transform': 'none' });
    //     }
    // }
}
$('.lockTouchmove').each(function(){
    $(this)[0].addEventListener('touchmove',function(e){
        e.preventDefault();
    },false);
});
$(".open").on("touchstart",function(){
    $(".hengping").fadeIn();
})
function loadingBgMusic(){
    soundInstance = createjs.Sound.play("audiobg", {loop:-1});
    if(soundInstance.playState == 'playFailed'){
        var byaudio=$("<audio loop>");
        byaudio.attr("src", audiobgUrl).attr("id", "audiobg");
        if($("#audiobg")[0]==undefined){
            $("body").append(byaudio);
        }
        var $waiaudio = document.getElementById("audiobg");
        $waiaudio.play();
    }
}

orientInit();
window.addEventListener('onorientationchange' in window?'orientationchange':'resize', function(){
    setTimeout(orientInit, 100);
},false)   
//JS处理
function orientInit(){
    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
    if(orientChk =='landscape'){
        //这里是横屏下需要执行的事件
        $(".cover_page").hide();
        $(".hengping").hide();
        $(".content0").fadeIn();
    }else{
        //这里是竖屏下需要执行的事件
        $(".hengping").hide();
        $(".cover_page").show();
    }
}

var defaulturl="/tem/hpeSynergy/images/00.jpg";
var _itemurl="/tem/hpeSynergy/images/";
$("#next").on("touchstart",function(){
    var _dataItem=parseInt($(this).parent().attr("data-temId"));
    $(".content").hide();
    $(".btn").hide();  
    switch(_dataItem){
         case 0:
            $("#prve").fadeIn();
            $(".item1 img.bg").attr("src","/tem/hpeSynergy/images/1.gif");
                setTimeout(function(){
                    $(".content1").fadeIn();
                    $(".btn").fadeIn();  
                },4800)
            break;
        case 1:
            setTimeout(function(){
                $(".content2").fadeIn();
            },5500)
            break;
        case 2:
            setTimeout(function(){
                $(".content3").fadeIn();
            },11000)
            break;
        case 3:
            setTimeout(function(){
                $(".content4").fadeIn();
            },8000)
            break;
        case 4:
            $("#next").fadeOut();
            setTimeout(function(){
                $(".content5").fadeIn();
            },6000)
            break;
        case 5:

            break;
    }
    $(".item").fadeOut();
    $(".item"+(_dataItem+1)).fadeIn();
    $(".p0").attr("data-temId",(_dataItem+1))
    $(".item"+(_dataItem)+" img.bg").attr("src",defaulturl);
    
    $(".item"+(_dataItem+1)+" img.bg").attr("src",_itemurl+(_dataItem+1)+".gif");
})

$("#prve").on("touchstart",function(){
    var _dataItem=parseInt($(this).parent().attr("data-temId"));
    $(".content").hide();
    $(".btn").hide();  
    switch(_dataItem){
        case 1:
            $("#prve").hide();
             $(".content0").fadeIn();
            break;
        case 2:
            
            setTimeout(function(){
                $(".content1").fadeIn();
                $(".btn").fadeIn();  
            },4000) 
            break;
        case 3:
            $("#prve").fadeIn();
            setTimeout(function(){
                $(".content2").fadeIn();
            },5500)
            break;
        case 4:
            setTimeout(function(){
                $(".content3").fadeIn();
            },10000)
            break;
        case 5:
            setTimeout(function(){
                $(".content4").fadeIn();
            },8000)
            $("#next").show();
            break;
    }

    $(".item").fadeOut();
    $(".item"+(_dataItem)+" img.bg").attr("src",defaulturl);
    $(".p0").attr("data-temId",(_dataItem-1))
    $(".item"+(_dataItem-1)).fadeIn();
    if(_dataItem==1){
        $(".item0 img.bg").attr("src",_itemurl+"1.jpg");
    }else{
        $(".item"+(_dataItem-1)+" img.bg").attr("src",_itemurl+(_dataItem-1)+".gif");
    }
})


var data={
        1:{
            c1:"/tem/hpeSynergy/images/icon2.png",
            c2:"网络",
            c3:"多路光纤连接，无需TOR交换机。"
        },
        2:{
            c1:"/tem/hpeSynergy/images/icon3.png",
            c2:"运算",
            c3:"无论工作负载是基于物理、虚拟还是容器，运算能力都可按需配置。"
        },
        3:{
            c1:"/tem/hpeSynergy/images/icon1.png",
            c2:"存储",
            c3:"整合的高密度存储，一次性搞定从DAS、 SAN、 SDS，到文件、区块、对象。"
        }
}

// item1  
$(".btn").on("touchstart",function(){
    var _id=$(this).attr("data-id");
    $(".btn").css({
        "background-image": 'url('+_itemurl+'btn.png)'
    })
    $(this).css({
        "background-image": 'url('+_itemurl+'btn_active.png)'
    })
    $(".content1 .c1 img").attr("src",data[_id].c1);
    $(".content1 .c2").html(data[_id].c2);
    $(".content1 .c3").html(data[_id].c3);
})





