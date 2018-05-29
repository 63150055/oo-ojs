window.onload = function(){
	
    /* set new icons for languages */
    var eng = "https://image.ibb.co/hz8Qvy/eng.png";
    var slo = "https://image.ibb.co/nFkzNd/slo.png";
    var deu = "https://image.ibb.co/cbwH8J/deu.png";
    var hrv = "https://image.ibb.co/mLCqTJ/cro.png";
    var ser = "https://image.ibb.co/j6AATJ/srb.png";
    
    var languages = document.getElementById("sidebarLanguageToggle");
    var elements = languages.getElementsByTagName("img");
    
    for(var i = 0; i < elements.length; i++){
        var img = elements[i];
        if(img.alt == "English"){
            img.src = eng;    
        }else if(img.alt == "Deutsch"){
            img.src = deu;
        }else if(img.alt == "Hrvatski"){
            img.src = hrv
        }else if(img.alt == "Serbian"){
            img.src = ser
        }else if(img.alt == "Slovensko (Slovenian)"){
            img.src = slo
        }
    }
    
    /* Trenutna st. bg color */
    
    
    /* insert header */
    var header = document.createElement('div');
    header.setAttribute("id", "my-header");
    
    var napis = document.createElement('img');
    napis.src = "https://image.ibb.co/f5DKdn/logo.png";
    napis.setAttribute("id", "my-napis");
    
    header.appendChild(napis)
    
    var cont = document.getElementById("container")
    cont.insertBefore(header, cont.firstChild);
    
    /* change order of sidebar and body */
    var body = document.getElementById("body")
    body.insertBefore(body.childNodes[3], body.childNodes[1]);

    /* change order of sidebar elements */
    var rightSidebar = document.getElementById("rightSidebar");
	swapElements(rightSidebar.childNodes[10], rightSidebar.childNodes[8]);
	swapElements(rightSidebar.childNodes[19], rightSidebar.childNodes[16]);
	
	wrap([rightSidebar.childNodes[10], rightSidebar.childNodes[16], rightSidebar.childNodes[19]]);
	
    
    /* Scroll position for navbar */
    var height = document.documentElement.scrollHeight
    var changePos = 0
    var changeNeg = height
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        var tmp1 = scroll - changePos;
        var tmp2 = changeNeg - scroll;
        console.log("tmp1",tmp1)
        console.log("tmp2",tmp2)
        
        if(tmp1 > 70){
            var cont = document.getElementById("my-napis");
            cont.style.width = "3.5%";
            cont.style.paddingBottom  = "13px";
            cont.style.paddingLeft  = "45px";
            cont.src="https://image.ibb.co/g6Bi4S/napis.png"
            
            var cont = document.getElementById("my-header");
            cont.style.padding  = "10px 10px 0px 10px";
            
            for(var i = 0; i < elements.length; i++){
		        var img = elements[i];
		        
		        img.className = "languageSmall";
		    }
		    
		    languages.className = "languageSmallWrapper";
        
        	var navbar = document.getElementById("navbar");
        	navbar.className = "smaller";
        	
        	document.getElementById("breadcrumb").style.marginTop = "-40px"
        } else if(tmp1 < 30) {
            var cont = document.getElementById("my-napis");
            cont.style.width = "30%";
            cont.style.paddingBottom  = "0px";
            cont.style.paddingLeft  = "0px";
            cont.src="https://image.ibb.co/f5DKdn/logo.png"
            
            var cont = document.getElementById("my-header");
            cont.style.padding  = "10px 10px 90px 10px";
            
            for(var i = 0; i < elements.length; i++){
		        var img = elements[i];
		        
		        img.className = "";
		    }
		    
		    languages.className = "block";
        
        	var navbar = document.getElementById("navbar");
        	navbar.className = "";
        	
        	document.getElementById("breadcrumb").style.marginTop = "60px"
        }
    });
}

function swapElements(obj1, obj2) {
    // create marker element and insert it where obj1 is
    var temp = document.createElement("div");
    obj1.parentNode.insertBefore(temp, obj1);

    // move obj1 to right before obj2
    obj2.parentNode.insertBefore(obj1, obj2);

    // move obj2 to right before where obj1 used to be
    temp.parentNode.insertBefore(obj2, temp);

    // remove temporary marker node
    temp.parentNode.removeChild(temp);
}

function wrap(nodesToWrap) {
	var addedToDocument = false;
	var wrapper = document.createElement("div");
	wrapper.className = "block";
	for (var index = 0; index < nodesToWrap.length; index++) {
	    var node = nodesToWrap[index];
	    node.className = "wrappedBlock";
	    if (! addedToDocument) {
	        node.parentNode.insertBefore(wrapper, node);
	        addedToDocument = true;
	    }
	    node.parentNode.removeChild(node);
	    wrapper.appendChild(node);
	}
	return wrapper;
}