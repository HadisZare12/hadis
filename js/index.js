// typing animation

var typed = new Typed('.type', {
    strings: ["","Web Designer","Web Developer","MERN Developer"],
    loop:true,
    typeSpeed:100,BackSpeed:60 

});
  //sideBar
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for(let i=0; i<totalNavList; i++)
    {
         const a = navList[i].querySelector("a");
        if(a){
            a.addEventListener('click',function()
            {

                console.log(this);
                removeBackSection();
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                     
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1200){
                    sideSectionTogglerBtn();
                }
            })
         }
        
    }
    function addBackSection(num){
        allSection[num].classList.add('back-section');
    }
    function removeBackSection(){
        for (let i=0; i<totalSection; i++ ){
            allSection[i].classList.remove('back-section');
        }
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
       const target =  element.getAttribute("href").split("#")[1];
       document.querySelector("#" + target).classList.add("active")
       
    }
    //goes to caontact form
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector('a').classList.remove('active');
            const target =  element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
                navList[i].querySelector('a').classList.add('active');
            }
        }
    }

  document.querySelector('.hire-me').addEventListener('click',function(){
    const sectionIndex = this.getAttribute('data-section-index');

    showSection(this);
    updateNav();
    removeBackSection(sectionIndex);
  })
//menu
const navTogglerBtn = document.querySelector('.nav-toggler'),
      side = document.querySelector('.side');
      navTogglerBtn.addEventListener('click', ()=>
      {
            sideSectionTogglerBtn(); 
      })
      function sideSectionTogglerBtn()
      {
        side.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle('open');
        }
      }


      //send email
      function sendMail(){
        var params = {
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            subject:document.getElementById('subject').value,
            message:document.getElementById('message').value
        };
        const serviceID = 'service_3d1r3fn'
        const templateID = 'template_bgrkyxr'
   
        emailjs.send(serviceID,templateID,params).then((response)=>{
           document.getElementById('name').value = '';
           document.getElementById('email').value = '';
           document.getElementById('subject').value = '';
           document.getElementById('message').value = '';
           console.log(response);
           alert('your message send successfully. Thank you.');
   
        })
        .catch((err)=> console.log(err)
        );
      }
    //github
    const githubChartBox =document.querySelector(".githubChartBox");
    for (let i=0; i<365; i++){

        const List =[
            0,1,2,3,41,42,43,44,82,83,123,124,125,126,164,165,166,167
            ,205,206,246,247,287,288,5,6,46,47,87,88,128,129,169,170,210,
            211,251,252,292,293,8,9,14,15,49,50,51,90,91,92,131,132
            ,133,134,172,173,213,214,254,255,295,296,175,176,217,177,218,259,
            260,261,301,302,17,18,19,58,59,60,61,99,100,102,103,140,141,55,56,
            144,181,182,185,222,223,225,226,263,264,265,266,304,305,306,96,97,
            24,25,65,66,67,106,107,108,147,148,149,150,188,189,229,230,137,138,
            ,270,271,311,312,67,108,149,150,191,232,192,233,274,234,275,316,178,179,
            194,235,276,154,195,236,73,114,155,33,34,74,75,115,116,156,157,197,198,238,239,279,280,320,321,36,37,38,39,77,78,79,80,
            118,119,159,160,161,162,200,201,202,203,241,242,282,283,284,285,323,324,325,326,219,220
        ];
        const el = document.createElement("div");
        el.classList = List.includes(i) ? "box active " : "box"
        githubChartBox.appendChild(el)
    
    }
    
    