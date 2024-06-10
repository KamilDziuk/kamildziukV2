
function ScrollMenu()
{
  
    this.aboutMeText =  () =>
    {
        this.cooperationText();
        this.offerText();
        this.projectsText();
     
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollaboutMeText;
    if (scroll >= 0 ) {
    document.querySelector(".aboutMeText").classList.add("aboutMeText--scrolling");
    }
    
    else {
    document.querySelector(".aboutMeText").classList.remove("aboutMeText--scrolling");
  
    }  
    if(scroll >=130)
        {
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

    this.offerText=  () =>
    {
     window.addEventListener("scroll", () => {
         scroll = window.pageYOffset || document.documentElement.scrollofferText;

     if(scroll >= 2270)
        {
            document.querySelector(".offerText").classList.add("offerText--scrolling");
        } 
        else
        {
        document.querySelector(".offerText").classList.remove("offerText--scrolling");
        }
        if(scroll >=3000) {
  
    document.querySelector(".offerText").classList.remove("offerText--scrolling");
    }
  
    });   
    }

    this.cooperationText=  () =>
        {
         window.addEventListener("scroll", () => {
             scroll = window.pageYOffset || document.documentElement.scrollcooperationText;
    
         if(scroll >= 3200)
            {
                document.querySelector(".cooperationText").classList.add("cooperationText--scrolling");
            } 
            else
            {
            document.querySelector(".cooperationText").classList.remove("cooperationText--scrolling");
            }
            if(scroll >=4000) {
      
        document.querySelector(".cooperationText").classList.remove("cooperationText--scrolling");
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
this.optionsMenu = document.querySelector(".optionsMenu");

this.optionsMenu.style.display = "none";
this.menu.style.display = "none";
this.openBar = () =>
    {
       
         return this.barButton.addEventListener("click", () =>
        {
if( this.menu.style.display == "none" || this.optionsMenu.style.display == "none")
    {
        this.menu.style.display = "block";
        this.optionsMenu.style.display = "block";
    }
    else
    {
        this.menu.style.display = "none";
        this.optionsMenu.style.display = "none";
    }
    
            
        })
    }

}

let barResult = new Bar();

    barResult.openBar();






// Bar and bar icone end



// landing start 

function landing()
{

this.landing = document.querySelector("#landing");

this.landing.style.display = "block";


this.startLanding = () =>
    {
       setTimeout(()=>{

     
        this.landing.style.display = "none";

       },1000)

    }

}

let landingResult = new landing();

landingResult.startLanding();


// landing end 
