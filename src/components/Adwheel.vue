<!-- ======================================广告轮播组件============================ -->
<template>
<div class="banner-wrap"> <!-- :style="{width: screenWidth +'px'}" --> 
    <div class="pic_banner" :style="{width: screenWidth*imgInfoList.length +'px',left:scrollbarInfo.bannerLeft+'px'}">
        <a id="init_img"  href="#" target="_blank" style="display:none">
            <img src="#" alt="保底图" height="340" width="1680">
        </a>
        <template v-for="imgInfo in imgInfoList">
            <!-- <a :id="imgInfo.id"  :href="imgInfo.webaddress" :style="{width: screenWidth +'px',backgroundImage:'url('+imgInfo.imgaddress+')'}" target="_top"> -->
            <a :id="imgInfo.id"  :href="imgInfo.webaddress" :style="{width: screenWidth +'px'}" target="_top">
                <img :src="imgInfo.imgaddress" :alt="imgInfo.id">
            </a>
        </template>
    </div>


</div>   

  
</template>

<script type="text/javascript">

export default{
    name:'adwheel',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        imgaddress:'../assets/adwhell/ad02.jpg',
        screenWidth: document.documentElement.clientWidth,  //浏览器窗口宽度   
        imgInfoList_1:[ //当元素采用背景图片时，直接使用绝对地址。但需要拷贝图片到dist目录
            {id:'img_01',webaddress:'#',imgaddress:'/web/static/ad01.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_02',webaddress:'#',imgaddress:'/web/static/ad02.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_03',webaddress:'#',imgaddress:'/web/static/ad03.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_04',webaddress:'#',imgaddress:'/web/static/ad04.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_05',webaddress:'#',imgaddress:'/web/static/ad05.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_06',webaddress:'#',imgaddress:'/web/static/ad06.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_07',webaddress:'#',imgaddress:'/web/static/ad07.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_08',webaddress:'#',imgaddress:'/web/static/ad08.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_09',webaddress:'#',imgaddress:'/web/static/ad09.jpg',imgWidth:this.screenWidth,imgHeight:'340'},
        ],
        imgInfoList:[  //使用require()函数，解决webpack对<img>属性arc不打包图片问题。
            {id:'img_01',webaddress:'#',imgaddress:require('../assets/adwhell/ad01.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_02',webaddress:'#',imgaddress:require('../assets/adwhell/ad02.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_03',webaddress:'#',imgaddress:require('../assets/adwhell/ad03.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_04',webaddress:'#',imgaddress:require('../assets/adwhell/ad04.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_05',webaddress:'#',imgaddress:require('../assets/adwhell/ad05.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_06',webaddress:'#',imgaddress:require('../assets/adwhell/ad06.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_07',webaddress:'#',imgaddress:require('../assets/adwhell/ad07.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_08',webaddress:'#',imgaddress:require('../assets/adwhell/ad08.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_09',webaddress:'#',imgaddress:require('../assets/adwhell/ad09.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
        ],
        scrollbarInfo:{    //图片滚动栏信息
            bannerLeft:0,  //滚动栏当前left位置值（单位像素）
            imgSeq:1,    //当前屏幕显示图片的序号
            imgCount:0,     //滚动栏中的图片总数量
            imgLeft:[],     //每张图片在屏幕中显示时的left位置和图片URL地址
            nextLeft:0,    //左翻页，滚动栏左移一张图片位置，如果当前显示的是最后一张图片，则滚动栏不动。
            nextRight:0,    //右翻页，滚动栏右移一张图片位置，如果当前显示的是第一张图片，则滚动栏不动。
            tmId:0,       //存储定时器的timerID
        },
      }; 
    },
    computed:{},
    methods:{},
    watch:{
        screenWidth(val){  //监控screenWidth（浏览器窗口）
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if(!this.timer){
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true;   //使用this声明变量，var是在当前作用域（scope）中声明一个变量，而this则是指向当前上下文（context）。作用域很好理解，在函数里面，作用域就是执行var语句的那个函数，否则就是root（window或者global）。 上下文是在函数调用的时候决定的
                let that = this;
                //浏览器窗口改变时，重新计算滚动栏
                that.imgWidth=that.screenWidth;
                if(that.scrollbarInfo.bannerLeft!=0){
                    that.scrollbarInfo.bannerLeft=-(that.screenWidth*that.scrollbarInfo.imgSeq);
                }
                for(var i=0,len=that.imgInfoList.length;i<len;i++){  //浏览器窗口改变时，重新计算每张图的left值变化
                    var num=i+1;
                    var leftsize=0;
                    if(i>0){
                        leftsize=-(that.screenWidth*i)
                    }
                    var img={id:'img_'+num,left:leftsize};
                    that.scrollbarInfo.imgLeft[i]=img;  
                }
                if(that.scrollbarInfo.imgSeq>0){   //浏览器窗口改变时，重新计算左翻页位置 
                    that.scrollbarInfo.nextLeft=that.scrollbarInfo.imgLeft[that.scrollbarInfo.imgSeq-1].left-that.screenWidth;
                }
                if(that.scrollbarInfo.imgSeq>1  && that.scrollbarInfo.imgSeq<that.scrollbarInfo.imgCount){ //浏览器窗口改变时，重新计算右翻页位置。
                    that.scrollbarInfo.nextRight=that.scrollbarInfo.imgLeft[that.scrollbarInfo.imgSeq-1].left+that.screenWidth; 
                }
                console.log(that.screenWidth)
                console.log(`imgLeft数组： ${JSON.stringify(that.scrollbarInfo.imgLeft)}`);
                console.log(`scrollbarInfo： ${JSON.stringify(that.scrollbarInfo)}`);
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    // console.log(that.screenWidth)
                    // console.log(`imgLeft数组： ${JSON.stringify(that.scrollbarInfo.imgLeft)}`);
                    // console.log(`scrollbarInfo： ${JSON.stringify(that.scrollbarInfo)}`); 
                    that.timer = false
                },0)
            }
        }
    },
    components:{},
    // 生命周期钩子
    beforeCreate:function(){},
    created:function(){
    },
    beforeMount:function(){},
    mounted:function(){
        //=================j计算浏览器窗口宽度
        const that = this;
        that.screenWidth=document.documentElement.clientWidth;
        console.log('www'+that.screenWidth);
        window.onresize = () => {  //onresize：当调整窗口大小时运行脚本
            return (() => {
                window.screenWidth =document.documentElement.clientWidth;  //document.documentElement.clientWidth;  document.body.clientWidth 
                that.screenWidth = window.screenWidth
                console.log('wwwwww'+that.screenWidth);
            })()
        }
        //================初始化图片滚动栏信息scrollbarInfo
        that.scrollbarInfo.bannerLeft=0;
        that.scrollbarInfo.imgSeq=1;
        that.scrollbarInfo.imgCount=that.imgInfoList.length;
        for(var i=0,len=that.imgInfoList.length;i<len;i++){
            var num=i+1;
            var leftsize=0;
            if(i>0){
                leftsize=-(that.screenWidth*i)
            }
            var img={id:'img_'+num,left:leftsize};
            that.scrollbarInfo.imgLeft[i]=img;  
        }
        if(that.scrollbarInfo.imgSeq>0){     
            that.scrollbarInfo.nextLeft=that.scrollbarInfo.imgLeft[that.scrollbarInfo.imgSeq-1].left-that.screenWidth;
        }
        if(that.scrollbarInfo.imgSeq>1  && that.scrollbarInfo.imgSeq<that.scrollbarInfo.imgCount){
            that.scrollbarInfo.nextRight=that.scrollbarInfo.imgLeft[that.scrollbarInfo.imgSeq-1].left+that.screenWidth; 
        }
        console.log("imgLeft数组长度："+that.scrollbarInfo.imgLeft.length);
        console.log(`imgLeft数组： ${JSON.stringify(that.scrollbarInfo.imgLeft)}`); 
        console.log(`scrollbarInfo： ${JSON.stringify(that.scrollbarInfo)}`); 
        
        //===========================无限循环滚动(带滑动效果）
        var pic_banner=document.querySelector("div.pic_banner");
        var toleft=-that.screenWidth;
        console.log("toleft："+toleft);
        move(pic_banner,toleft);
        console.log('调用函数move()bannerLeft:'+that.scrollbarInfo.bannerLeft);

        
        //=================定义滚动栏循环与图片移动函数
        function move(elemt,toLeft){  //1263
            window.clearInterval(elemt.timerID); //取消setInterval()方法设置的定时器
            elemt.timerID=setInterval(function(){
                console.log('调用函数move()后tmId:'+elemt.timerID);
                let step=100;  //每次移动的距离
                let current=that.scrollbarInfo.bannerLeft;  //存储滚动栏当前left属性值
                let target=toLeft;  //保存滚动栏移动后值（向左或向右移动后的left属性值）
                step=Math.abs(current)>target ? -step : step;  //通过比较current与target判断滚动栏要向左移动还是向右移动。
                current+=step;
                if(current+Math.abs(target)>Math.abs(step)){ //如果剩余间距大于每次要移动的间距,继续移动
                    that.scrollbarInfo.bannerLeft=current;  
                }else{
                    window.clearInterval(elemt.timerID); //取消setInterval()方法设置的定时器
                    that.scrollbarInfo.bannerLeft=target + "px";
                }
            },10);
        }


    },
    beforeUpdate:function(){},
    updated:function(){},
    activated:function(){},
    deactivated:function(){},
    beforeDestroy:function(){},
    destroyed:function(){},
    errorCaptured:function(){},

}


</script>


<style scoped lang="less" rel="stylesheet/less"> 


.banner-wrap{
        position: relative;
        height: 340px;
        //min-width: 1000px;
        overflow-x:hidden;      /*隐藏多余内容，避免显示滚动条overflow: hidden;*/ 
        .pic_banner{
            height: 340px;
            overflow-x:hidden;      /*隐藏多余内容，避免显示滚动条overflow: hidden;*/            
            //min-width: 1000px; 
            position: relative;   //     
            a{
                position: relative;
                display: block;
                height: 340px;
                float: left;                
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                } 
            }
            
        }

}
/*创建动画
animation: imgMove 400ms linear 1;  //linear infinite  此行css需放置具体选择器中。
@keyframes imgMove {
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(-1680px);
    }
}
*/
</style>