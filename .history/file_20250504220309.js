const navicon = document.querySelector(".nav-icon")
const fullsection = document.querySelector(".whole-section")
const crossbutton = document.querySelector(".cross-icon")
navicon.addEventListener("click", ()=> {
    fullsection.innerHTML = `    <div class="container"></div>
    <div class="inner-container">
        <div class="icon-head flex">
            <h2 class="heading flex">Tonic</h2>
            <i class="fa-solid fa-x cross-icon" ></i>
        </div>
        <div class="languages flex">
            <p class="lang">Canopy</p>
            <p class="lang">Back End Dev</p>
            <p class="lang">2015</p>
        </div>
        <img src="/assets/Snapshoot Portfolio.png" class="wrapimg">
        <div class="languages flex">
            <p class="lang">HTML</p>
            <p class="lang">Bootstrap</p>
            <p class="lang">Ruby on rails</p>
        </div>

        <div class="paragraph">
            <p class="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
            <p class="p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
            <p class="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
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
                
    </div>`
})
const crossbutton = document.querySelector(".cross-icon")

crossbutton.addEventListener("click",()=> {
    fullsection.classList.add("none")
})

