<!DOCTYPE html>
<html lang="en">
  <head>
  
  	<jsp:include page="../blocks/head.jsp"></jsp:include>
  	
  </head>

  <body>

    <div class="container">
    
  	  <jsp:include page="../blocks/header.jsp"></jsp:include>      

      <jsp:include page="../views/${pageName}.jsp"></jsp:include>

      <jsp:include page="../blocks/footer.jsp"></jsp:include>

    </div> <!-- /container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="ie10-viewport-bug-workaround.js"></script>
    
  </body>
</html>
