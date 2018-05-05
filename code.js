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
    
    var logo = document.createElement('img');
    logo.src = "https://image.ibb.co/g6Bi4S/napis.png"
    logo.setAttribute("id", "my-logo");
    
    header.appendChild(logo)
    header.appendChild(napis)
    
    var cont = document.getElementById("container")
    cont.insertBefore(header, cont.firstChild);
    
    /* change order of sidebar and body */
    var body = document.getElementById("body")
    console.log(body.childNodes)
    body.insertBefore(body.childNodes[3], body.childNodes[1]);
}