
function ScrollMenu()
{
  
    this.aboutMeText =  () =>
    {
        this.certificatesText();
        this.projectsText();
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollaboutMeText;
    if (scroll >= 100 ) {
    document.querySelector(".aboutMeText").classList.add("aboutMeText--scrolling");
    }
    else {
    document.querySelector(".aboutMeText").classList.remove("aboutMeText--scrolling");
  
    }  
    });
    }
    this.projectsText=  () =>
    {
       
        window.addEventListener("scroll", () => {
             scroll = window.pageYOffset || document.documentElement.scrollprojectsText;

     if(scroll >=140)
        {
            document.querySelector(".projectsText").classList.add("projectsText--scrolling");
        } 
        else
        {
            document.querySelector(".projectsText").classList.remove("projectsText--scrolling");
        }

        if(scroll >=2000)   {
  
    document.querySelector(".projectsText").classList.remove("projectsText--scrolling");
    }
   
    })

    }

    this.certificatesText=  () =>
    {
     window.addEventListener("scroll", () => {
         scroll = window.pageYOffset || document.documentElement.scrollcertificatesText;

     if(scroll >= 2000)
        {
            document.querySelector(".certificatesText").classList.add("certificatesText--scrolling");
        } 
        else
        {
        document.querySelector(".certificatesText").classList.remove("certificatesText--scrolling");
        }
        if(scroll >=2500) {
  
    document.querySelector(".certificatesText").classList.remove("certificatesText--scrolling");
    }
  
    });   
    }
}

let scrollMenuResult = new ScrollMenu();
scrollMenuResult.aboutMeText();



function ConsoleLog()

{

    
    this.consoleLogNextText =  () =>
        {
            this.consoleLogText = document.querySelector(".consoleLog");
            this.consoleLogText.innerHTML = "I'm coding your ideas for online success.";

        
            setInterval(() =>{
         this.consoleLogText = document.querySelector(".consoleLog");
                this.consoleLogText.innerHTML = "I'm coding your ideas for online success.";
            
            
            },9000)
          
setInterval(()=>{
 
    this.consoleLogText.innerHTML = `<a href="mailto:contact@kamildziuk.pl"> contact@kamildziuk.pl</a>`;


},4000)
setInterval(() =>{
   
    this.consoleLogText.innerHTML = `  <a  href=""onclick="window.location.href='tel:668573034'"> +48 668 573 034</a>`;

 
},7000)
}
};

let test = new ConsoleLog();


test.consoleLogNextText();


// Bar and bar icone start

function Bar()
{

this.barButton = document.querySelector(".barButton");
this.menu = document.querySelector(".menu");

this.menu.style.display = "none";
this.openBar = () =>
    {
         return this.barButton.addEventListener("click", () =>
        {

            this.menu.style.display = "block";
        })
    }

}

let barResult = new Bar();

    barResult.openBar();






// Bar and bar icone end