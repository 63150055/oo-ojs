window.onload = function(){
    
    /* set new icons for languages */
    var eng = "https://image.flaticon.com/icons/svg/197/197484.svg";
    var slo = "https://image.flaticon.com/icons/svg/197/197633.svg";
    var deu = "https://image.flaticon.com/icons/svg/197/197571.svg";
    var hrv = "https://image.flaticon.com/icons/svg/197/197503.svg";
    var ser = "https://image.flaticon.com/icons/svg/197/197602.svg";
    
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
        
        if(tmp1 > 150){
            var cont = document.getElementById("my-napis");
            cont.style.width = "15%";
            cont.style.paddingBottom  = "45px";
            
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
        }
    });
}