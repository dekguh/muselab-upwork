var IDbtnHamburger = document.getElementById('btnHamburger')
var IDnavbarMenu = document.getElementById('navbarMenu')
var IDaccordionWrap = document.getElementById('accordionWrap')
var IDunstakeWrap = document.getElementById('unstakeWrapId')

IDbtnHamburger.addEventListener('click', function() {
    if(IDnavbarMenu.classList.contains('nav-menu-active')) {
        IDnavbarMenu.classList.replace('nav-menu-active', 'nav-menu-nonactive')
    } else {
        IDnavbarMenu.classList.replace('nav-menu-nonactive', 'nav-menu-active')
    }
})

IDaccordionWrap && IDaccordionWrap.addEventListener('click', function(e) {
    if(e.target.parentNode.classList.contains('accordion-heading')) {
        if(e.target.parentNode.classList.contains('accordion-active')) {
            e.target.parentNode.classList.remove('accordion-active')
        } else {
            e.target.parentNode.classList.add('accordion-active')
        }
    }
})

/* countdown setup */
var IDCountDays = document.getElementById('countDays')
var IDCountHours = document.getElementById('countHours')
var IDCountMins = document.getElementById('countMins')

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    IDCountDays.innerHTML = days > 0 ? days : 0
    IDCountHours.innerHTML = hours > 0 ? hours : 0
    IDCountMins.innerHTML = minutes > 0 ? minutes : 0


    // do action when ended
    if (distance < 0) {
    clearInterval(x);
        IDunstakeWrap.style.display = 'block'
    }else{
        IDunstakeWrap.style.display = 'none'
    }
}, 1000);

/* exchange function */
var IDinput1Image = document.getElementById('input1Image')
var IDinput2Image = document.getElementById('input2Image')
var IDinput1Title = document.getElementById('input1Title')
var IDinput2Title = document.getElementById('input2Title')
var IDbuttonChangeInput = document.getElementById('buttonChangeInput')

var IDinput1Exchange = document.getElementById('input1Exchange')
var IDinput2Exchange = document.getElementById('input2Exchange')

IDbuttonChangeInput.addEventListener('click', function() {
    if(IDinput1Title.textContent == 'MUSE') { // muse to smuse
        IDinput1Image.setAttribute('src', './image/smuse-exhange-icon.png')
        IDinput1Title.innerHTML = 'sMUSE'
        IDinput2Image.setAttribute('src', './image/muse-exhange-icon.png')
        IDinput2Title.innerHTML = 'MUSE'

        var tempVal1 = IDinput1Exchange.value
        var tempVal2 = IDinput2Exchange.value

        // change value
        IDinput1Exchange.value = tempVal2
        IDinput2Exchange.value = tempVal1
    } else { // smuse to muse
        IDinput1Image.setAttribute('src', './image/muse-exhange-icon.png')
        IDinput1Title.innerHTML = 'MUSE'
        IDinput2Image.setAttribute('src', './image/smuse-exhange-icon.png')
        IDinput2Title.innerHTML = 'sMUSE'

        var tempVal1 = IDinput1Exchange.value
        var tempVal2 = IDinput2Exchange.value

        // change value
        IDinput2Exchange.value = tempVal1
        IDinput1Exchange.value = tempVal2
    }
})