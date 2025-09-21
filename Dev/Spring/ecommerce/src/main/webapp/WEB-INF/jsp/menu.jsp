<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>
                Coffee Shop Menu
            </title>
			<link rel="stylesheet" href="/css/styles.css">
        </head>
    <body>
        <h1>
            Welcome to the Coffee Shop!
        </h1>
        <h2>
            Our Menu
        </h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <c:forEach var="p" items="${pmap}">
                <tr>
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>$${p.price}</td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
