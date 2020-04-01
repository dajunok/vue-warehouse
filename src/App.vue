<template>
  <div>
    <div class="nav-wrap">           
        <div class="navigation">
            <ul class="main">
                <li>
                    <a href="http://vue-warehouse.com:8080/web" target="_blank">首页</a>
                </li>
                <li>
                    <a href="https://www.w3cschool.cn/htmltags/" target="_blank">HTML</a>
                </li>
                <li>
                    <a href="https://www.w3cschool.cn/cssref/" target="_blank">CSS</a>
                </li>
                <li>
                    <a href="https://www.w3cschool.cn/less/" target="_blank">LESS</a>
                </li>
                <li>
                    <a href="https://www.runoob.com/sass/sass-tutorial.html" target="_blank">SASS</a>
                </li>
                <li>
                    <a href="https://www.w3school.com.cn/js/index.asp" target="_blank">JavaScript</a>
                </li>
                <li>
                    <a href="https://www.w3school.com.cn/jquery/jquery_reference.asp" target="_blank">JQuery</a>
                </li>
                <li>
                    <a href="https://www.lodashjs.com/" target="_blank">Lodash</a>
                </li>
                <li>
                    <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
                </li>                
                <li>
                    <a href="https://www.runoob.com/bootstrap/bootstrap-tutorial.html" target="_blank">Bootstrap</a>
                </li>                
                <li>
                    <div class="dropdown">
                        <button class="dropdown-toggle">
                          Web服务器
                          <span class="caret"></span>              
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="#" >Tomcat</a>
                          </li>
                          <li>
                            <a href="#">Jboss</a>
                          </li>
                          <li>
                              <a href="#">Nginx</a>
                          </li>
                          <li>
                              <a href="#">Apache</a>
                          </li>
                          <li>
                              <a href="#">IIS</a>
                          </li>
                          <li>
                              <a href="#">Jetty</a>
                          </li>
                          <li>
                              <a href="#">WebSphere</a>
                          </li>
                          <li>
                              <a href="#">WebLogic</a>
                          </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropdown-toggle">
                          工具类
                          <span class="caret"></span>              
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="#">Git</a>
                          </li>
                          <li>
                            <a href="#">Webpack</a>
                          </li>
                        </ul>
                    </div>
                </li>
                <li></li>
            </ul>
        </div>
        <div class="top-maidan">
            <a class="logo" href="http://vue-warehouse.com:8080/web/css-demo.html" target="_blank">logo</a>         
        </div> 
    </div>


    

  </div>  
</template>

<script type="text/javascript">

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
        //triangle:Triangle,
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

@import (reference) "./style/color.less";     //常用颜色
@import (reference) "./style/triangle.less";  //三角符号

.font(@size,@bold,@lh){  //定义字体mixin函数
    font-style:normal;
    font-variant:normal;
    font-weight:@bold;   //设置字体粗细
    font-size:@size;     //规定字体尺寸
    line-height:@lh;     //规定字体行高
    font-family:"Microsoft yahei", arial, Simsun, sans-serif;  //规定字体系列。
}
.bakimg(@url){ //定义背景图片mixin函数
    background-image: @url;    
    background-repeat:no-repeat;
    background-size:cover;
}
.border(@width:1px,@style:solid,@color:Black){  //定义边框mixin函数
  border-width:@width;
  border-style:@style;
  border-color:@color;
}

//通过以下变量值的改变，来实现不同款式的导航栏。



.nav-wrap{
  .navigation{    //导航栏菜单
      height:40px;
      .font(@bold:normal,@size:14px,@lh:40px);
      &,.dropdown-toggle{background-color:#f2f2f2;}   //d9d9d9  e5e5e5   f2f2f2   #4c8eff 
      .main{
          position:relative;
          height: 100%;
          width: 100%;
          z-index:10;
          &>li{
              height: 100%;
              width: auto;
              margin: 0 0 0 20px;              
              float: left;
              padding:0px 5px;                   
              a,.dropdown-toggle{                
                color:DarkGray;
                .caret{
                  .triangle-common-down(@size:4px,@color:DarkGray); //三角形朝下
                  display: inline-block;
                }
              }        
              .dropdown-menu{display:none; }
              &:hover{                  
                .dropdown{position:relative;}
                .dropdown-menu{
                  display:block;
                  position:absolute;
                  .font(@bold:normal,@size:14px,@lh:30px);
                  .border(@width:0 1px 1px 1px,@style:solid,@color:#f2f2f2);   //鼠标移入时给下拉菜单框增加边框线                 
                  left:-5px;
                  li{.border(@width:0 5px,@style:solid,@color:White);}
                  li:hover{
                    border-color:#f2f2f2;
                    background-color:#f2f2f2;
                  }
                }                
                &,.dropdown-toggle,.dropdown-menu{background-color:White;}
                .caret{
                  .triangle-common-up(@size:4px,@color:DarkGray);  //三角形朝上
                }                
              }          
          }
      }
  }
  .top-maidan{ //顶部广场
      height: 124px;
      .bakimg(@url:url('./assets/starsky.png'));   //设置背景图片
      .logo{  
          display:inline-block;
          position:relative;
          left: 50%;
          width: 150px;
          height: 100%;
          .bakimg(@url:url('./assets/mylog.png'));  //设置背景图片
          transform: translateX(-50%);    //水平居中
          text-indent: -999px;            //隐藏a标签的HTML文本
      }
  }

}



  
</style>