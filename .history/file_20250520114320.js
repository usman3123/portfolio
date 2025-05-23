arr = [
    {
        img : "/assets/chat 1 secondcard.png",
        h4 : "Professional Art Printing Data",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2014"
    },
    {
        img : "/assets/chat 2 secondcard.png",
        h4 : "Data Dashboard Healthcare",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2015"
    },
    {
        img : "/assets/chat 3 secondcard.png.jpeg",
        h4 : "Data Dashboard Healthcare",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2016"
    },
    {
        img : "/assets/chat 4 secondcard.png.png" ,
        h4 : "Website Portfolio",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2017"
    },
    {
        img : "/assets/chat 5 secondcard.png.png" ,
        h4 : "Professional art printing data More",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2018"
    },
    {
        img : "/assets/chat 6 secondcard.png.png",
        h4 : "Dashboard portfolio",
        p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project",
        year :"2019"
    }
]
document.addEventListener("DOMContentLoaded",()=> {
const second = document.querySelector(".second-cards")
const bodyy = document.querySelector(".wholesection");
arr.forEach((ele) => {
    second.innerHTML += `
                <div class="second-card">
                    <img class="card-image" src="${ele.img}" alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">${ele.h4}</h4>
                        <p class="second-content-paragraph">${ele.p1}</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">${ele.lang1}</p>
                            <p class="language-2">${ele.lang2}</p>
                            <p class="language-2">${ele.lang3}</p>
                        </div>
                    </div>
                    <button class="second-content-button cardbtn">${ele.button}</button>
                </div>`
});
const navicon = document.querySelector(".nav-icon")
const body = document.querySelector("body")
const overlay = document.querySelector(".herostyle")
overlay.classList.add("none")
navicon.addEventListener("click",()=> {
    overlay.classList.add("block")
    overlay.innerHTML = ` <i class="fa-solid fa-x" id= "closepopup" ></i>
      <div class = "links-after-click">
        <p><a class = "link" href="#myportfolio" >Portfolio</a></p>
        <p><a class = "link" href="#myabout">About</a></p>
        <p><a class = "link" href="#mycontact">Contact</a></p>
      </div>`
    const close = document.querySelector("#closepopup")
    close.addEventListener("click",()=> {
        overlay.classList.remove("block")
        overlay.classList.add("none")
    })
})

// card-section

document.querySelectorAll(".cardbtn").forEach((btn, index) => {
      btn.addEventListener("click", () => {
      console.log("clicked");
      document.querySelector(".container").style.display = "block"; 
      popup(arr[index]);
      bodyy.classList.add("blur");
    //   document.querySelector(".inner-container").classList.add("style");
    });
  });
  function popup(ele) {
    const popupcontainer = document.querySelector(".container");
      popupcontainer.innerHTML = 
        `<div class="inner-container ">
      <div class="icon-head flex">
          <h2 class="heading flex">${ele.h4}</h2>
          <i class="fa-solid fa-x" id = "close-popup" ></i>
      </div>
      <div class="languages flex">
          <p class="lang">Canopy</p>
          <p class="lang">Back End Dev</p>
          <p class="lang">${ele.year}</p>
      </div>
 
      <div class="languages flex">
          <p class="lang">${ele.lang1}</p>
          <p class="lang">${ele.lang2}</p>
          <p class="lang">${ele.lang3}</p>
      </div>
      <img class = "wrapimg" src="${ele.img}">
      <div class="paragraph">
          <p class="p3">${ele.p1}</p>
          <p class="p3">${ele.p2}</p>
      </div>
      
      <div class="buttons flex">
          <div class="livebtn flex">
              <p>See live</p>
              <img src="/assets/Icon - Export.svg" class="btnimg">
          </div>
          <div class="sourcebtn flex">
              <p>See source</p>
              <img src="/assets/Icon -GitHub.png" class="btnimg">
          </div>
      </div>
              
      </div>`;
      document.querySelector("#close-popup").addEventListener("click", () => {
        popupcontainer.style.display = "none"; 
        bodyy.classList.remove("blur");
      }); 

    }
    const butn = document.querySelector(".content-button")
    butn.addEventListener("click",()=> {
        bodyy.classList.add("blur");
        pop()
        document.querySelector(".container").style.display = "block"; 


    })

   function pop() {
    const popcontainer = document.querySelector(".container");
        popcontainer.innerHTML = `<div class="inner-container ">
        <div class="icon-head flex">
            <h2 class="heading flex">Multi-Post Stories</h2>
            <i class="fa-solid fa-x" id = "close-popup" ></i>
        </div>
        <div class="languages flex">
            <p class="lang">Canopy</p>
            <p class="lang">Back End Dev</p>
            <p class="lang">HTML</p>
        </div>
        </div>
        
        <div class="paragraph">
            <p class="p3">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s."</p>
        </div>
        
        <div class="buttons flex">
            <div class="livebtn flex">
                <p>See live</p>
                <img src="/assets/Icon - Export.svg" class="btnimg">
            </div>
            <div class="sourcebtn flex">
                <p>See source</p>
                <img src="/assets/Icon -GitHub.png" class="btnimg">
            </div>
        </div>
                
        </div>`;
        document.querySelector("#close-popup").addEventListener("click", () => {
            popcontainer.style.display = "none"; 
            bodyy.classList.remove("blur");
          }); 
   }
}) 
// {
//     img : "/assets/multi ps.webp",
//     h4 : "Multi-Post Stories",
//     p1 : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     p2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
//     lang1 :"CSS",
//     lang2 : "HTML",
//     lang3 : "Bootstrap",
//     lang4 :"Ruby",
//     button :"See Project"
//   },











































/*<h3 class="card-heading">My Recent Works</h3>
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg"  alt="img">
                    <div class="second-card-content flex">
                    <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg"  alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg" alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg" alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg"  alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>
            </section>
            
            
            
            
                        <div class="first-card flex">
                <img src="/assets/multi ps.webp" alt="img">
                <div class="first-card-content flex">
                    <h4 class="content-heading">Multi-Post Stories</h4>
                    <p class="content-paragraph">A daily selection of privately personalized reads; no accounts or sign-ups
                        required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a standard dummy text.</p>
                    <div class="content-languages flex">
                        <p class="language">CSS</p>
                        <p class="language">HTML</p>
                        <p class="language">Bootstrap</p>
                        <p class="language">Ruby</p>
                    </div>
                    <button class="content-button">See project</button>
                </div>
                </div>
            <section class="second-cards flex">
                <div class="second-card">
                    <img class="card-image" src="/assets/beutyimg.jpeg" alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">Professional Art Printing Data</h4>
                        <p class="second-content-paragraph">A daily selection of privately personalized reads; no accounts
                            or sign-ups required. Has been the industry's standard.</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">HTML</p>
                            <p class="language-2">Bootstrap</p>
                            <p class="language-2">Ruby</p>
                        </div>
                    </div>
                    <button class="second-content-button">See project</button>
                </div>*/













