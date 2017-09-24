window.onload = function() {
		
		if (window.XMLHttpRequest)
  		{// code for IE7+, Firefox, Chrome, Opera, Safari
  			xmlhttp=new XMLHttpRequest();
  		}
		else
  		{// code for IE6, IE5
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
		xmlhttp.open("GET","Content Pages/NewsFeed.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;
		
		var x=xmlDoc.getElementsByTagName("NEWS");
		
		for (i=0;i<x.length;i++){
			document.getElementById('feedTitle'+i).innerHTML=x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
			document.getElementById('feedSub'+i).innerHTML=x[i].getElementsByTagName("SUBTITLE")[0].childNodes[0].nodeValue;
			document.getElementById('feedSnippet'+i).innerHTML=x[i].getElementsByTagName("SNIPPET")[0].childNodes[0].nodeValue;
			document.getElementById('feedLink'+i).href="Content Pages/HTML Articles/" + x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue;
			document.getElementById('feedImage'+i).src="Images/Content/" + x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;	
		}	
	};