
function ScrollMenu()
{
  
    this.aboutMeText =  () =>
    {
        this.contaktText();
        this.projectsText();
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollaboutMeText;
    if (scroll >= 100 ) {
    document.querySelector(".aboutMeText").classList.add("aboutMeText--scrolling");
    }
    else {
    document.querySelector(".aboutMeText").classList.remove("aboutMeText--scrolling");
    document.querySelector(".projectsText").classList.remove("projectsText--scrolling");
    }  
    });
    }
    this.projectsText=  () =>
    {
       
        window.addEventListener("scroll", () => {
            let scroll = window.pageYOffset || document.documentElement.scrollprojectsText;

     if(scroll >=140)
        {
            document.querySelector(".projectsText").classList.add("projectsText--scrolling");
        } 
    
    else {
  
    document.querySelector(".projectsText").classList.remove("projectsText--scrolling");
    } ;
    })

    }

    this.contaktText=  () =>
    {
     window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset || document.documentElement.scrollcontaktText;

     if(scroll >= 170)
        {
            document.querySelector(".contaktText").classList.add("contaktText--scrolling");
        } 
    
    else {
  
    document.querySelector(".contaktText").classList.remove("contaktText--scrolling");
    }
    });   
    }
}

let scrollMenuResult = new ScrollMenu();


scrollMenuResult.aboutMeText();
