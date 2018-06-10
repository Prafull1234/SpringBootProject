<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
  <%--    ${studentMessage} --%>
     
     
 <table border="1" width="90%">  
<tr>
	<th>Id</th><th>Name</th><th>City</th>  
</tr>  
<c:forEach items="${studentMessage}" var="u">  
<tr><td>${u.getId()}</td><td>${u.getName()}</td><td>${u.getCitys()}</td>  


</c:forEach>  
</table>  


</body>
</html>