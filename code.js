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
}