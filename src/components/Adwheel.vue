<!-- ======================================广告轮播组件============================ -->
<template>
<div class="banner-wrap">
    <div class="pic_banner">
        <a id="init_img"  href="#" target="_blank">
            <img src="#" alt="保底图">
        </a>
        <template v-for="imgInfo in imgInfoList">
            <a :id="imgInfo.id"  :href="imgInfo.webaddress" target="_blank">
                <img :src="imgInfo.imgaddress" :alt="imgInfo.id" :height="imgInfo.imgHeight" :width="imgInfo.imgWidth">
            </a>
        </template>
    </div>
    <p>屏宽度{{screenWidth}}</p>

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
        screenWidth: document.body.clientWidth,  //浏览器窗口宽度
        imgInfoList:[
            {id:'img_01',webaddress:'#',imgaddress:'@/assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_02',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_03',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_04',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_05',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_06',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_07',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_08',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
            {id:'img_09',webaddress:'#',imgaddress:'../assets/adwhell/ad01',imgWidth:this.screenWidth,imgHeight:'340'},
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
  
</style>