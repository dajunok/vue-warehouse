<template>
  <div>
    <div class="navigation">  
        <div class="top-nav"></div>
        <div class="maidan"></div>  
        <div class="base-nav"></div>
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

  
</style>