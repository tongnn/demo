$(function () {

    //input事件
    $(".search input").focus(function () {
        if ($(this).val() == "多色双肩包") {
            $(this).val("");
        }
    })
    $(".search input").blur(function () {
        if ($(this).val() == "") {
            $(this).val("多色双肩包");
        }
    })


    //新品部分 触发图片
    ChufaPic();
    function ChufaPic() {
        $(".np-bottom li:eq(0)").mouseenter(function () {
            //$(this).css("box-shadow", "0 2px 2px rgba(0, 0, 0, 0.2)");
            $(".np-bottom li:eq(0) .np-pic").css("background", "url('images/newshoes1.jpg') no-repeat");
            $(".np-bottom li:eq(0) .pdt").css("backgroundColor", "#F4F0EA");

        })
        $(".np-bottom li:eq(0)").mouseleave(function () {

            $(".np-bottom li:eq(0) .np-pic").css("background", "url('images/newshoes.png') no-repeat");
            $(".np-bottom li:eq(0) .pdt").css("backgroundColor", "");

        })
        $(".np-bottom li:eq(1)").mouseenter(function () {

            $(".np-bottom li:eq(1) .np-pic").css("background", "url('images/bag1.jpg') no-repeat");
            $(".np-bottom li:eq(1) .pdt").css("backgroundColor", "#F4F0EA");

        })
        $(".np-bottom li:eq(1)").mouseleave(function () {

            $(".np-bottom li:eq(1) .np-pic").css("background", "url('images/bag.png') no-repeat");
            $(".np-bottom li:eq(1) .pdt").css("backgroundColor", "");

        })
        $(".np-bottom li:eq(2)").mouseenter(function () {

            $(".np-bottom li:eq(2) .np-pic").css("background", "url('images/kuzi1.jpg') no-repeat");
            $(".np-bottom li:eq(2) .pdt").css("backgroundColor", "#F4F0EA");

        })
        $(".np-bottom li:eq(2)").mouseleave(function () {

            $(".np-bottom li:eq(2) .np-pic").css("background", "url('images/kuzi.png') no-repeat");
            $(".np-bottom li:eq(2) .pdt").css("backgroundColor", "");

        })
        $(".np-bottom li:eq(3)").mouseenter(function () {

            $(".np-bottom li:eq(3) .np-pic").css("background", "url('images/tuoxie1.jpg') no-repeat");
            $(".np-bottom li:eq(3) .pdt").css("backgroundColor", "#F4F0EA");

        })
        $(".np-bottom li:eq(3)").mouseleave(function () {

            $(".np-bottom li:eq(3) .np-pic").css("background", "url('images/tuoxie.png') no-repeat");
            $(".np-bottom li:eq(3) .pdt").css("backgroundColor", "");

        })

    }

    //banner缓进缓出
    Banner();
    function Banner() {
        // 思路：让当前的需要出现的li 淡入 其他淡出
        // 1.获取所有li  并添加鼠标事件

        $("#banner ol li").mouseenter(function () {
            // 移到导航小方块上面去
            //让对应的ul里面的li淡入  让别的li淡出
            // 要让当前的导航小方块加上激活类  让别的导航小方块去掉类
            $(this).addClass("active").siblings().removeClass("active");

            //获取当前的导航小方块的索引
            var idx = $(this).index();
            $("#banner ul li").eq(idx).fadeIn(500).siblings().fadeOut(500);

            // 要解决你移上去调整了图片的显示和隐藏 那么你应该让你移上的那个li的索引赋值给num
            // num就会变成你最后移上去的那个li的索引
            // 当自动走起来的时候  num++ 就会从你玩过的那个li 接着往后走

            num = idx;
        })

        //走起来
        //timer 存定时器
        var timer = null;
        //计数器 从0到3循环
        var num = 0;

        //封装自动往右走的方法
        function autoPlay() {
            num++;
            //当num加到li长度最大值 让其变成0
            if (num > $("#ol li").length - 1) {
                num = 0;
            }
            //每隔1.5秒 让导航颜色跟着走
            $("#ol li").eq(num).addClass("active").siblings()
                .removeClass("active");

            //让ul里面的li 对应的li（本来是索引，这里索引用变量控制）淡入
            //其他淡出
            $("#banner ul li").eq(num).fadeIn(500).siblings().fadeOut(500);
        }

        //创建定时器
        timer = setInterval(autoPlay, 1500);
        //鼠标移动到box上清除定时器
        $("#banner").mouseenter(function () {
            clearInterval(timer);
            //同时左右箭头淡入
            $("#banner a").fadeIn();
        })

        //鼠标离开box  定时器启动
        $("#banner").mouseleave(function () {
            timer = setInterval(autoPlay, 1500);
            //同时小箭头淡出
            $("#banner a").fadeOut();
        })

        //点击左侧按钮
        $("#ban-left").click(function () {
            num--;
            if (num < 0) {
                num = $("#ol li").length - 1;
            }
            $("#ol li").eq(num).addClass("active").siblings()
                .removeClass("active");
            $("#ul li").eq(num).fadeIn(500).siblings().fadeOut(500);
        })

        //点击右键
        $("#ban-right").click(function () {
            autoPlay();
        })
    }

    //顶部固定
    $(window).scroll(function () {
        var top = $("#header").outerHeight() + $(".logo").outerHeight();
        if ($(this).scrollTop() >= top) {
            $("#nav").addClass("fixed").animate({
                top: 0,
                opacity: 1
            }, 600)
        } else {
            $("#nav").removeClass("fixed");
        }
    })

    //人气推荐tab切换
    $(function () {
        $("#tab-one").click(function () {
            $(this).addClass("spanshow");
            $("#tab-two").removeClass("spanshow");
            $(".rec-bottom").show();
            $(".rec-bottom-index").hide();
        })
        $("#tab-two").click(function () {
            $(this).addClass("spanshow");
            $("#tab-one").removeClass("spanshow");
            $(".rec-bottom").hide();
            $(".rec-bottom-index").show();
        })
    })

    //app
    $("#app").mouseenter(function () {
        $("#right-app").show();
    })
    $("#app").mouseleave(function () {
        $("#right-app").hide();
    })


    //客服延时菜单
    var timer = null;
    $("#kefu").mousemove(function () {
        clearTimeout(timer);
        $("#fuwu").slideDown(500, function () {
            $("#dian").mousemove(function () {
                $("#num").show();
            })
        })
    })
    $("#dian").mouseout(function () {
        $("#num").hide();
    })
    $("#fuwu").mousemove(function () {
        clearTimeout(timer);
    })
    $("#kefu,#fuwu").mouseout(function () {
        timer = setTimeout(function () {
            $("#fuwu").hide();
        }, 300);
    })

    //nav切换
    Nav()
    function Nav() {
        $(function () {
            $("#shownav li").mouseenter(function () {
                var idx = $(this).index() - 1;
                if (idx >= 0) {
                    $(".hidenav>div").eq(idx).show().siblings("div").hide();
                }
            })
            $("#shownav li").mouseleave(function () {
                var idx = $(this).index() - 1;
                if (idx >= 0) {
                    $(".hidenav>div").eq(idx).hide();
                }
            })
        })


    }


    //倒计时
    var overTime = new Date("2017/9/8  23:00:00");
    setInterval(function () {
        var nowTime = new Date();
        var time = overTime - nowTime;
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 / 60);
        var seconds = parseInt(time / 1000 % 60);
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $("#hour").html(hour);
        $("#min").html(minute);
        $("#sec").html(seconds);

    }, 1000)


    //返回顶端retrunTop
    $(function () {
        $(window).scroll(function () {
            var sc = $(window).scrollTop();
            if ( sc > 800) {
                $("#returnTop").show();
            } else {
                $("#returnTop").hide();
            }
        })
        $("#returnTop").click(function(){
            $('body,html').animate({
                scrollTop:0
            },500);
        })
    })
})

