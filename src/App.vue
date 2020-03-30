<template>
  <div>
    <div class="nav-wrap">  
        <div class="top-maidan">
            <div class="logo">
                <a href="http://vue-warehouse.com:8080/web/css-demo.html"></a>
            </div>            
        </div>  
        <div class="navigation"></div>
    </div>


    

  </div>  
</template>

<script type="text/javascript">
import Triangle from "@/components/Triangle.vue"

export default{
    name:'app',    //模块名称
    props:{},      //组件属性
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{},
    watch:{},
    components:{
        triangle:Triangle,
    },
    // 生命周期钩子
    beforeCreate:function(){},
    created:function(){},
    beforeMount:function(){},
    mounted:function(){},
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
@import (reference) "./style/color.less";
.top-maidan{
    height: 124px;
    background-image: url('./assets/starsky.png');    
    background-repeat:no-repeat;
    background-size:cover;
    .logo{  
        position:relative;
        left: 50%;
        width: 150px;
        height: 100%;
        background-image: url('./assets/mylog.png');    
        background-repeat:no-repeat;
        background-size:cover;
        transform: translateX(-50%);
    }
}

  
</style>