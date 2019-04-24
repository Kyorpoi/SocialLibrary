<%@ page language="java" contentType="text/html;charset=utf-8" import="java.io.*" import="java.util.*" import="java.sql.*"%>
<html>
    <head>
        <title>dbjsp.jsp</title>
    </head>
    <body>
<%
Class.forName("org.postgresql.Driver").newInstance();
String url="jdbc:postgresql://localhost/xxxxxx";
String user="xxxxxx";
String password="xxxxxx";
Connection conn=DriverManager.getConnection(url,user,password);
Statement stmt=conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
String sql="select * from cities";
ResultSet rs=stmt.executeQuery(sql);
while(rs.next()){
%>
您的第一个字段内容为：<%=rs.getString(1)%>
<%
}
%>
<%out.print("数据库操作成功，恭喜您");%>
<%rs.close();stmt.close();conn.close();%>
</body>
</html>
