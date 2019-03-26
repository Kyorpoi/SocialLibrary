<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.SQLException" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.ResultSet" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>mysql测试</title>

</head>
<body>
mysql测试　看到以下信息说明mysql连接正常
<br><br>
	<%
			 //此进行连接数据库
		    String url="jdbc:mysql://127.0.0.1:3306/test"; //test为数据库名称
		    String dbuser="root"; //数据库账户
			String dbpwd="root"; //数据库密码
			try 
			{
				Class.forName("com.mysql.jdbc.Driver"); //加载驱动 JspStudy
			} 
			catch (ClassNotFoundException e) 
			{ 
				e.printStackTrace();
			}  
			//取得数据库连接conn JspStudy
			Connection conn=DriverManager.getConnection(url, dbuser, dbpwd);;

			PreparedStatement ps=null;
			ResultSet rs=null; 
			String username="";
			String pwd="";
			String name="";
			try 
			{ 
				String sql="select id,username,password,name from users";
				ps = conn.prepareStatement(sql);
				rs = ps.executeQuery();
				while(rs.next())
				{
					username=rs.getString(2);
					pwd=rs.getString(3);
					name=rs.getString(4);
					out.println("账户:"+username+"　　　密码："+pwd+"　　　姓名:"+name+"<br>"); 
				}
			}
			catch (SQLException e) 
			{
				e.printStackTrace();
			}
			finally
			{ 
					try 
					{
						if(rs!=null)			
							rs.close();
					} 
					catch (SQLException e) 
					{
						e.printStackTrace();
					}
					finally
					{
							try 
							{
								if(ps!=null)					
									ps.close();
							} 
							catch (SQLException e) 
							{ 
								e.printStackTrace();
							}
							finally
							{
								try 
								{
									if(conn!=null)					
										conn.close();
								} 
								catch (SQLException e) 
								{ 
										e.printStackTrace();
								}
							}
					}
			} 
	%>		
</body>
</html>

