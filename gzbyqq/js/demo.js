/**
 * Created by LXF on 2017/9/7.
 */

$(function () {
    //选项卡

    $(".pick_t>span").click(function () {
        $(".pick_in>div").eq($(this).index()).show().siblings().hide();
        $(this).css("backgroundColor","white").siblings().css("backgroundColor","#f5f5f5");
    })

    //固定导航栏
    $(window).scroll(function () {
        //console.log($(".bigNav").offset().top);
        //console.log($(this).scrollTop());
       ($(this).scrollTop()>=$(".bigNav").offset().top)?$(".fixedNav").show():$(".fixedNav").hide();

    })

//搜索框

    $(".search_in input").on("keydown blur", function () {
            if ((this).value == "") {
                $(".search_in b").show();
            } else {
                $(".search_in b").hide()
            }
    })


    //获取样图
    $(".goods_m div").mouseenter(function () {
        $("#second").show();
        var idx=$(this).index();
        $("#second img").eq(idx).show().siblings().hide();
    })
    //获取型号
    $(".type div").click(function () {
        $(this).find(".type_bd").show().parent().siblings().find(".type_bd").hide()
        var idx=$(this).index();
        $("#first img").eq(idx).show().siblings().hide();
        $("#second").hide();
    })

    //amount点击增加数量
    //出问题啦：连续点击有文字会被选择；
    var num=1;
    $(".middle").val(1);
    $(".lose").click(function () {
        num--;
        $(".middle").val(num);
        if(num<2){
            num=1;
        }
    })
    $(".add").click(function () {
        num++;
        $(".middle").val(num);

    })


//点击收藏 背景图网上挪-590
    $(".collect").click(function () {
        console.log($(".collect div").css("background"));
        //if($(".collect div").css("background")=="white url(../images/sprites/sprite.png) no-repeat 0 -590px"){
        //    $(".collect div").css("background","white url(../images/sprites/sprite.png) no-repeat 0 -564px");
        //
        //}else if($(".collect div").css("background")=="white url(../images/sprites/sprite.png) no-repeat 0 -564px"){
        //    $(".collect div").css("background","white url(../images/sprites/sprite.png) no-repeat 0 -590px");
        //
        //}

        $(".collect div").css("background","white url(../images/sprites/sprite.png) no-repeat 0 -590px");
        //console.log($(".collect div").css("background"));

    })


    //鼠标在导航栏移动获取div
    $(".fixedIn ul li").on({
        "mouseenter": function () {
            $(".hide1").show();
        },
        "mouseleave": function () {
            $(".hide1").hide();
        }
    })



    //report
    $(".report").on({
        mouseenter:function () {
            $("#report").show();
        },
        mouseleave: function () {
            $("#report").hide();
        }
    })
    $("#report").click(function () {
        $(".report_s").show();
        $(".mask").show();
    })
    $(".close").click(function () {
        $(".report_s").hide();
        $(".mask").hide();
    })

    $(".report_s .arrow_l").click(function () {
        //if(1){
        //
        //}else if(2){
        //
        //}else if(3){
        //
        //}else if(4){
        //
        //}
    })
    $(".report_s .arrow_r").click(function () {

    })



    $("#div1").mouseover(function(){
        $("#img1").show()
    })
    $("#div1").mouseleave(function(){
        $("#img1").hide()
    })

    $("#div2").mouseover(function(){
        $("#img2").show()
    })
    $("#div2").mouseleave(function(){
        $("#img2").hide()
    })



    //返回顶部小火箭


})










//report部分：
// a.移动到.report上面，#report显示
// b.点击#report，.report_in显示，实现左右箭头翻页效果