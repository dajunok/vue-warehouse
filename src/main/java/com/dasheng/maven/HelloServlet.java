package com.dasheng.maven;

import java.io.*; 
import javax.servlet.*; 
 
public class HelloServlet  extends GenericServlet { 
 
  public void service(ServletRequest request,  
    ServletResponse response)  
  throws ServletException, IOException { 
    response.setContentType("text/html;charset=UTF-8"); 
    PrintWriter pw = response.getWriter(); 
    pw.println("<B>Hello!<br/>"); 
    pw.println("<h3>《森林卫士》（秋季版）大圣</h3>");
    pw.close(); 
  } 
}
