<template>
  <div class="sidebar-wrap">
    <button>Dasheng <span>博客</span></button>
    <ul class="vertical">
        <li class="title">Dasheng<span>CSS</span></li>
        <li v-for='item in csslist' @click="open(item)">Dasheng {{item.name}}</li>
        <li class="title">Dasheng<span>布局组件</span></li>
        <li v-for='item in layoutlist' @click="open(item)">Dasheng {{item.name}}</li>
        <li class="title">Dasheng<span>插件</span></li>
        <li v-for='item in pluglist' @click="open(item)">Dasheng {{item.name}}</li>
        <li class="title">Dasheng<span>其他</span></li>
        <li v-for='item in otherlist' @click="open(item)">Dasheng {{item.name}}</li>
    </ul>
  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'leftmenu',
    props:{},
    model: {},
    mixins:[],   //data数据合并混入
    data:function(){
      return { 
        csslist:[
            {id:'001',name:'CSS 概览'},
            {id:'002',name:'网格系统'},
            {id:'003',name:'排版'},
            {id:'004',name:'代码'},
            {id:'005',name:'表格'},
            {id:'006',name:'表单'},
            {id:'007',name:'按钮'},
            {id:'008',name:'图片'},
            {id:'009',name:'辅助类'},
            {id:'010',name:'响应式实用工具'}
        ], 
        layoutlist:[
            {id:'011',name:'字体图标'},
            {id:'012',name:'下拉菜单'},
            {id:'013',name:'按钮组'},
            {id:'014',name:'按钮下拉菜单'},
            {id:'015',name:'输入框组'},
            {id:'016',name:'导航元素'},
            {id:'017',name:'导航栏'},
            {id:'018',name:'面包屑导航'},
            {id:'019',name:'分页'},
            {id:'020',name:'标签'},
            {id:'021',name:'徽章'},
            {id:'022',name:'超大屏幕'},
            {id:'023',name:'页面标题'},
            {id:'024',name:'缩略图'},
            {id:'025',name:'警告'},
            {id:'026',name:'进度条'},
            {id:'027',name:'多媒体对象'},
            {id:'028',name:'列表组'},
            {id:'029',name:'面板'},
            {id:'030',name:'Wells'},
            {id:'031',name:'创建一个网页'}
        ],
        pluglist:[
            {id:'032',name:'插件概览'},
            {id:'033',name:'过度效果'},
            {id:'034',name:'模态框'},
            {id:'035',name:'下拉菜单'},
            {id:'036',name:'滚动监听'},
            {id:'037',name:'标签页'},
            {id:'038',name:'提示工具'},
            {id:'039',name:'弹出框'},
            {id:'040',name:'警告框'},
            {id:'041',name:'按钮'},
            {id:'042',name:'折叠'},
            {id:'043',name:'轮播'},
            {id:'044',name:'附加导航'}
        ],
        otherlist:[
            {id:'045',name:'UI编辑器'},
            {id:'046',name:'V2教程'},
            {id:'047',name:'HTML编码规范'},
            {id:'048',name:'CSS编码规范'},
            {id:'049',name:'可视化布局'},
            {id:'050',name:'Less教程'},
        ],
      }; 
    },
    computed:{},
    methods:{
        open(item){
            alert('Dasheng '+item.name);
        },
    },
    watch:{},
    components:{},
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
    @import (less) "../../style/index/leftmenu.less";
</style>
