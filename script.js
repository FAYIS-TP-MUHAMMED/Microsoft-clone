
// Toggle ALLMICROSOFT Dropdown
function allMicrosoftDropdown(){
    let y = document.getElementsByClassName("allMicrosoftANDArrow")
    y[0].classList.toggle("allMicrosoftClicked")

    let x = document.getElementsByClassName("dropdown-container")
    console.log(x)
    x[0].classList.toggle("showAllMicroDropdown")
}

//close dropdown when clicking outside
document.addEventListener('click', function(event) {
     //allMicrosoft
    let dropdown = document.querySelector(".dropdown-container");
    let button = document.querySelector(".allMicrosoftANDArrow");
 
    if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
        button.classList.remove("allMicrosoftClicked");
        dropdown.classList.remove("showAllMicroDropdown");
    }
     // hide list1
   let list1 = document.querySelector(".overflowList1");
   let buttonList1 = document.querySelector(".more1ANDArrow")

    if(list1 && !list1.contains(event.target) && !buttonList1.contains(event.target)){
        buttonList1.classList.remove("moreClicked")
        list1.classList.remove("showList-1")
    }
     // hide list2
     let list2 = document.querySelector(".overflowList2");
     let buttonList2 = document.querySelector(".more2ANDArrrow")
     
     console.log( list2 , "AND",buttonList2)

     if(list2 && !list2.contains(event.target) && !buttonList2.contains(event.target)){
        buttonList2.classList.remove("moreClicked")
        list2.classList.remove("showList-2")
      }
    // hide mobile dropdown
    let mobileDropdown = document.querySelector(".mobileDropdown");
    let mobileDropdownButtton = document.querySelector(".mobileDropdownMenu")

    if(mobileDropdown && !mobileDropdown.contains(event.target) && !mobileDropdownButtton.contains(event.target)){
         mobileDropdown.classList.remove("mobileDropdownClicked")

        let x = document.getElementsByClassName("mobileDropdownMenu")
         if (x[0].src.match("./Assets/svg/cross.svg")){
            x[0].src  = "./Assets/svg/dropdownMenu.svg"
        }else{
            x[0].src = "./Assets/svg/cross.svg"
        }
    }

    
});

//overflow List 1
function List1(){
    let y = document.getElementsByClassName("more1ANDArrow")
    y[0].classList.toggle("moreClicked")

    let x = document.getElementsByClassName("overflowList1")
    x[0].classList.toggle("showList-1")
}

//overflow List 2
function List2(){
    let y = document.getElementsByClassName("more2ANDArrrow")
    y[0].classList.toggle("moreClicked")

    let x = document.getElementsByClassName("overflowList2")
    x[0].classList.toggle("showList-2") 
    
}

//MOBLE DROPDOWN MENU
function showMobileDropdown(){
    let y = document.getElementsByClassName("mobileDropdown")
    y[0].classList.toggle("mobileDropdownClicked")

    let x = document.getElementsByClassName("mobileDropdownMenu")
    if (x[0].src.match("./Assets/svg/dropdownMenu.svg")){
        x[0].src  = "./Assets/svg/cross.svg"
    }else{
        x[0].src = "./Assets/svg/dropdownMenu.svg"
    }
}

//MOBILE DROPDOWN SUBLIST
function softwareSubList(){
    let button =  document.getElementsByClassName("software")
    button[0].classList.toggle("showSubList")
}
function pcsAndDevicesList(){
    let button =  document.getElementsByClassName("pcs&devices")
    button[0].classList.toggle("showSubList")
}
function EntertainmentList(){
    let button =  document.getElementsByClassName("entertainment")
    button[0].classList.toggle("showSubList")
}
function bussinessList(){
    let button =  document.getElementsByClassName("bussiness")
    button[0].classList.toggle("showSubList")
}
function developerAndITlist(){
    let button =  document.getElementsByClassName("DeveloperAndIT")
    button[0].classList.toggle("showSubList")
}
function othersList(){
    let button =  document.getElementsByClassName("others")
    button[0].classList.toggle("showSubList")
}







