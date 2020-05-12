/**
 * Created by Administrator on 2017/9/4.
 */
    // 获取input里面的内容，
    var username = document.getElementById("email");
    var username1 = document.getElementById("username1");
    var zhuce = document.getElementById("zhuce");
    // 用户名验证
    username.onblur = function () {
        if (username.value == "") {
            username1.innerHTML = "用户名不能为空";
        } else {
            if (/^[a-zA-Z][a-zA-Z0-9]{6,}$/.test(username.value)) {
                username1.innerHTML = "用户名可以使用";
                username1.style.color = "green";
            } else {
                username1.innerHTML = "用户名格式不正确";
            }
        }
    }
    // 密码验证
    var password = document.getElementById("password");
    var password1 = document.getElementById("password1");
    password.onblur = function () {
        if (/^[a-zA-Z0-9]\w{5,17}$/.test(password.value)) {
            password1.innerHTML = "密码设置成功";
            password1.style.color = "green";
        } else {
            password1.innerHTML = "密码长度必须大于6个字符";
        }
    }

    // 二次密码验证
    var ps2 = document.getElementById("password2");
    var ps3 = document.getElementById("password3");
    ps2.onblur = function () {
        if (ps2.value != "") {
            if (ps2.value === password.value) {
                ps3.innerHTML = "两次输入密码一致";
                ps3.style.color = "green";
            } else {
                ps3.innerHTML = "两次密码输入不一致";
                ps3.style.color = "red";
            }
        }
    }

    // 手机号验证
    var phone = document.getElementById("phone");
    var phone1 = document.getElementById("phone1");
    phone.onblur = function () {
        if (/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test(phone.value)) {
            phone1.innerHTML = "点击下方获取验证码";
            phone1.style.color = "green";
        } else {
            phone1.innerHTML = "请输入正确的手机号码"
        }
        zhuce.onclick = function(){
            alert("用户名：" + username.value + "密码：" + password.value + "手机号：" + phone.value + "请牢记您的相关信息");
        }
    }


//手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$