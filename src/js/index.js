/**
 *　　　　　　　　┏┓　　　┏┓+ +
 *　　　　　　　┏┛┻━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　　┃
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 ████━████ ┃+
 *　　　　　　　┃　　　　　　　┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　　┃ + +
 *　　　　　　　┗━┓　　　┏━┛
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃ + + + +
 *　　　　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting
 *　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+
 *　　　　　　　　　┃　 　　┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
 *　　　　　　　　　　┃┫┫　┃┫┫
 *　　　　　　　　　　┗┻┛　┗┻┛+ + + +
 */
$(function () {
    $.ajaxSetup({
        timeout: 5e3,
        error: function () {
            layer.closeAll();
            layer.msg("网络错误");
        },
    });
    /* 优惠券切换 */
    let vlink =
        "//mp.weixin.qq.com/bizmall/cardshelf?shelf_id=112&showwxpaytitle=1&biz=MzI1MTQyMTI2Ng==&t=cardticket/shelf_list&scene=1000007#wechat_redirect"; //优惠券编码
    lj.AppendDiscount(vlink, [733, 734, 735, 736], ".discount");

    /* 产品模板渲染 */
    var pArr = [
        [724306, 722955, 722964, 791641, 731558, 828694, 734413, 723063], //做个硬汉  持久延射我说了算
        [719338, 723130, 737694, 8135, 168518, 732811, 733799, 749264], //前列腺问题不用慌
        [733030, 758902, 719880, 732154, 764227, 757374, 742075, 726916], //裸感距离，情欲迸发
        [723079, 723011, 174425, 724320, 1444, 723266, 9849, 1071], //生发乌发
        [725958, 1555, 209210, 733784, 742103, 734137, 163873, 733963], //壮阳补肾
        [723468, 26808, 732821, 7142, 723179, 27346, 723412, 723191], //女性护理
        [11605, 734132, 777777, 719648, 10984, 164665, 720014, 721635], //美容养颜
        [750407, 721804, 772693, 723233, 719936, 9640, 229061, 723280], //慢病防治
    ];

    lj.template({
        productArr: pArr,
        template: $("#templateId").html(),
        wrapper: $(".goods-1")[0],
    });

    // 标签过滤
    function filterTag(str) {
        let el = document.createElement("div");
        el.innerText = str;
        return el.innerHTML;
    }
    function alertMethond(content) {
        layer.open({
            type: 1,
            content: content,
            style: "color:#000; font-size:.4rem;border-radius:.2rem;overflow:hidden;",
            success: () => {
                $(".layui-m-layerchild").css({
                    "background-color": "transparent",
                });
            },
        });
    }

    // 预加载图片
    $(window).on("load", () => {
        // 预加载图片
        function imgLoad(url) {
            var img = new Image();
            img.src = url;
        }
        setTimeout(_ => {
            // imgLoad(`./img/a.png`);
        }, 2000);
    });
});
