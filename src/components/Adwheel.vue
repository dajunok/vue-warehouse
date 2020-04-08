<!-- ======================================广告轮播组件============================ -->
<template>
<div class="banner-wrap" :style="{width: screenWidth +'px'}">
    <div class="pic_banner" :style="{width: screenWidth*imgInfoList.length +'px'}">
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
                this.timer = true
                let that = this
                setTimeout(function(){
                    // 打印screenWidth变化的值
                    console.log(that.screenWidth)
                    that.timer = false
                },40)
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
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
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
        min-width: 1000px;
        overflow-x:hidden;      /*隐藏多余内容，避免显示滚动条overflow: hidden;*/ 
        .pic_banner{
            height: 340px;
            overflow-x:hidden;      /*隐藏多余内容，避免显示滚动条overflow: hidden;*/            
            a{
                position: relative;
                display: block;
                height: 340px;
                float: left;
                min-width: 1000px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                } 
            }
            
        }

}
</style>