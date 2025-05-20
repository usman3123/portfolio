arr = [
    // {
    //   img : "/assets/multi ps.webp",
    //   h4 : "Multi-Post Stories",
    //   p : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    //   lang1 :"CSS",
    //   lang2 : "HTML",
    //   lang3 : "Bootstrap",
    //   lang4 :"Ruby",
    //   button :"See Project"
    // },
    {
        img : "/assets/ChatGPT Image May 12, 2025, 09_38_15 AM.png",
        h4 : "Professional Art Printing Data",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    },
    {
        img : "/assets/ChatGPT Image May 12, 2025, 09_41_23 AM.png",
        h4 : "Data Dashboard Healthcare",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    },
    {
        img : "/assets/beutyimg.jpeg",
        h4 : "Data Dashboard Healthcare",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    },
    {
        img :"assets/ChatGPT Image May 12, 2025, 09_46_20 AM.png" ,
        h4 : "Website Portfolio",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    },
    {
        img : "/assets/ChatGPT Image May 12, 2025, 09_49_32 AM.png" ,
        h4 : "professional art printing data More",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    },
    {
        img : "/assets/ChatGPT Image May 12, 2025, 09_51_08 AM.png",
        h4 : "dashboard portfolio",
        p : "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
        lang1 :"HTML",
        lang2 : "BootStrap",
        lang3 : "Ruby",
        button :"See Project"
    }
]
document.addEventListener("DOMContentLoaded",()=> {
const second = document.querySelector(".second-cards")
const secondcards = document.querySelector(".card-section")
arr.forEach((ele) => {
    second.innerHTML += `
                <div class="second-card">
                    <img class="card-image" src=${ele.img} alt="img">
                    <div class="second-card-content flex">
                        <h4 class="second-content-heading">${ele.h4}</h4>
                        <p class="second-content-paragraph">${ele.p}</p>
                        <div class="second-content-languages flex">
                            <p class="language-2">${ele.lang1}</p>
                            <p class="language-2">${ele.lang2}</p>
                            <p class="language-2">${ele.lang3}</p>
                        </div>
                    </div>
                    <button class="second-content-button">${ele.button}</button>
                </div>`
});

})












































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













