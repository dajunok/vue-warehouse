//--1、js中获取当前时间，并转化为yyyy-MM-dd hh-mm-ss
{
    function getNowTimeStr() {
        var now = new Date();
        return now.toLocaleDateString().replace(/\//g, "-") + " " + now.toTimeString().substr(0, 8);
    };

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "H+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    let date=getNowTimeStr();
    let time1 = new Date().Format("yyyy-MM-dd");
    let time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
    console.log(`当前时间：${date}====${time1}====${time2}`);  //=> 当前时间：2020-2-18 16:57:28====2020-02-18====2020-02-18 16:57:28

}
    



