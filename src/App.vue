<template>
  <div>
    <div class="nav-wrap">
        <div class="top-maidan">
            <a class="logo" href="http://vue-warehouse.com:8080/web/css-demo.html" target="_blank">logo</a>         
        </div>            
        <div class="navigation">
            <ul class="main">
                <li>
                    <a href="http://vue-warehouse.com:8080/web" target="_self">首页</a>
                </li>
                <li v-for="item in nav_list">
                    <a :href="item.href" target="_blank">{{item.name}}</a>
                </li>                              
                <li v-for="item of dropdwon_menu">
                    <div class="dropdown">
                        <button class="dropdown-toggle">
                          {{item.name}}
                          <span class="caret"></span>              
                        </button>
                        <ul class="dropdown-menu">
                          <li v-for="menu of item.menulist">
                            <a href="#" >{{menu}}</a>
                          </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>        
    </div> 
    <!-- 存放主体内容 -->  
    <div class="body">
      <div class="container">
        <div class="leftpanel">左侧</div>
        <div class="middlepanel">中间</div>
        <div class="rightpanel">右侧</div>
      </div>     
    </div>
    <!-- 存放页面底部内容 -->
    <div class="footer">
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
        nav_list:[  //导航栏列表
            {name:'HTML',href:'https://www.w3cschool.cn/htmltags/'},
            {name:'CSS',href:'https://www.w3cschool.cn/cssref/'},
            {name:'Less',href:'https://www.w3cschool.cn/less/'},
            {name:'Sass',href:'https://www.runoob.com/sass/sass-tutorial.html'},
            {name:'JavaScript',href:'https://www.w3school.com.cn/js/index.asp'},
            {name:'JQuery',href:'https://www.w3school.com.cn/jquery/jquery_reference.asp'},
            {name:'Lodash',href:'https://www.lodashjs.com/'},
            {name:'Vue',href:'https://cn.vuejs.org/'},
            {name:'Bootstrap',href:'https://www.runoob.com/bootstrap/bootstrap-tutorial.html'},
        ],
        dropdwon_menu:[  //导航栏中带下拉菜单的列表项
          {name:'Web服务器',menulist:['Tomcat','Jboss','Nginx','Apache','IIS','Jetty','WebSphere','WebLogic']},
          {name:'工具类',menulist:['Git','Webpack']}
        ],
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
//==============================================head================================================
.nav-wrap{
  min-width:1000px;
  .top-maidan{ //顶部广场
      height: 124px;
      .border(@width:0 0 10px 0,@style:solid,@color:Gold);  //底部边框带
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
  .navigation{    //导航栏菜单
      height:40px;
      .font(@bold:normal,@size:14px,@lh:40px);
      &,.dropdown-toggle{background-color:#f2f2f2;}   //导航背景颜色
      .border(@width:0 0 1px 0,@style:solid,@color:Gold);  //底部边框带
      white-space:nowrap;    //解决窗口变小时导航菜单列表换行问题    
      .main{
          position:relative;
          height: 100%;
          width:95%;
          @media screen and (min-width:1440px) and (max-width: 1680px){width:85%}  //如果屏宽度大于等于1440像素且小于等于1680像素
          max-width: 1920px;
          min-width: 1000px;
          left:50%;
          transform: translateX(-50%);    //水平居中
          z-index:10;               
          &>li{
              height: 100%;
              width: auto;
              margin: 0 0 0 20px;              
              float: left;
              display: inline-block;
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
}
//==============================================body================================================
//14"HD笔记本电脑：1920px X 1080px
.body{  
  min-width:1000px;
  .container{
    position:relative;
    width:95%;
    @media screen and (min-width:1440px) and (max-width: 1680px){width:85%}  //如果屏宽度大于等于1440像素且小于等于1680像素
    max-width: 1920px;
    min-width: 1000px;
    left:50%;
    height:500px;
    transform: translateX(-50%);    //水平居中  
    //display:flex; 
    background-color:red;
     
    .leftpanel{
      width: auto;
      margin: 0 0 0 20px;              
      float: left;
      height:50px;
      background-color:LightGreen;
    }
    .middlepanel{
      width: auto;
      margin: 0 0 0 20px;              
      float: left;
      height:60px;
      background-color:Orange;      
    }
    .rightpanel{
      width: auto;
      margin: 0 0 0 20px;              
      float: left;
      height:80px;
      background-color:Cyan;
    }
  }

}

  
</style>