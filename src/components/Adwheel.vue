<!-- ======================================广告轮播组件============================ -->
<template>
<div class="banner-wrap">
<!--     <div class="pic_banner">
        <a id="init_img"  href="#" target="_blank" style="display:none">
            <img src="#" alt="保底图" height="340" width="1680">
        </a>
        <template v-for="imgInfo in imgInfoList">
            <a :id="imgInfo.id"  :href="imgInfo.webaddress" target="_top">
                <img :src="imgInfo.imgaddress" :alt="imgInfo.id" :height="imgInfo.imgHeight" :width="screenWidth">
            </a>
        </template>
    </div> -->
    <div class="wrap" >
        <!-- <img src="../assets/adwhell/ad01.jpg"></img> -->
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
        screenWidth: document.documentElement.clientWidth,  //浏览器窗口宽度
        imgInfoList:[
            {id:'img_01',webaddress:'#',imgaddress:require('../assets/adwhell/ad01.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_02',webaddress:'#',imgaddress:require('../assets/adwhell/ad02.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_03',webaddress:'#',imgaddress:require('../assets/adwhell/ad03.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_04',webaddress:'#',imgaddress:require('../assets/adwhell/ad04.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_05',webaddress:'#',imgaddress:require('../assets/adwhell/ad05.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_06',webaddress:'#',imgaddress:require('../assets/adwhell/ad06.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_07',webaddress:'#',imgaddress:require('../assets/adwhell/ad07.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_08',webaddress:'#',imgaddress:require('../assets/adwhell/ad08.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_09',webaddress:'#',imgaddress:require('../assets/adwhell/ad09.jpg'),imgWidth:this.screenWidth,imgHeight:'340'},
        ]

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
                },400)
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
        .wrap{
            // position: relative;
            // width:1200px;
            // height:340px;
            // border: 2px solid red;
            // img{
            //     position: absolute;
            //     max-width: 100%;
            //     max-height: 100%;
            //     top: 50%;
            //     left: 50%;
            //     transform: translate(-50%, -50%);      
            // }
            width: 500px;
            height: 340px;
            border: 2px solid red;
            background-image:url('../assets/adwhell/ad01.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            
        }

}
</style>