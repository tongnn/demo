/**
 * Created by Administrator on 2017/9/7.
 */
    $(function(){

        $(window).scroll(function () {
            var top = $("#header").outerHeight() + $(".logo").outerHeight();
            if ($(this).scrollTop() >= top) {
                $("#nav").addClass("fixed");
                //$("#topPart").css("margin-bottom",$("#nav").outerHeight());
                $("#nav").animate({
                    top: 0,
                    opacity: 1
                }, 600)

            } else {
                $("#nav").removeClass("fixed");
                //$("#topPart").css("margin-bottom","");
            }
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
    })

