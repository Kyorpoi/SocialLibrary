<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<html>
    <head>
        <title>dbjsp.jsp</title>
    </head>
    <body>
<%
String jdbcDriverName="org.postgresql.Driver";
Driver driver = (Driver) Class.forName(jdbcDriverName).newInstance();
DriverManager.registerDriver(driver);
Connection dbcon = DriverManager.getConnection("jdbc:postgresql://192.168.25.128/Data","postgres","851e28c69d050650");
Statement st = dbcon.createStatement();
ResultSet rt = st.executeQuery("SELECT "Username","Password" FROM 94im WHERE "Password" like '123%'");
while(rt.next())
{
String test1=rt.getString(1);
out.println("<p>"+ test1 );

}
rt.close();
st.close();
dbcon.close();
%>
</body>
</html>