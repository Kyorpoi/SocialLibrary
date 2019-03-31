<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
	<head>
		<title>理解JSP的原理</title>
	</head>
	<body>
		<center>
		<h1>
		<%
		int times=Integer.parseInt(request.getParameter("times"));
		for (int i=0;i<times;i++)
		{
		out.println(" Hello, World! ");
		out.println("<br>");
		}
		%>
		</h1>
		</center>
	</body>
</html>
