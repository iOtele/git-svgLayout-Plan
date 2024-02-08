document.addEventListener("DOMContentLoaded", function () {
    var hideElements = document.querySelectorAll(".area");

    function showAlert(elementName) {
        var dataName = document.querySelector(elementName).getAttribute("data-name");
        alert("Clicked on " + dataName);
    }

    function showElement(elementSelector) {
        hideElements.forEach(function (element) {
            element.style.display = "none";
        });

        let selectedElement = document.querySelector(elementSelector);
        if (selectedElement) {
            selectedElement.style.display = "block";
            showAlert(elementSelector);
        }
    }


   
    function createContextMenu(menuItems) {
        const contextMenu = document.createElement("ul");
        contextMenu.classList.add("context-menu");
        
        menuItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            contextMenu.appendChild(listItem);
        });

        return contextMenu;
    }

    function handleContextMenu(event) {
        event.preventDefault();

        // Close any open context menu
        const openContextMenu = document.querySelector(".context-menu");
        if (openContextMenu) {
            openContextMenu.remove();
        }

        const posX = event.pageX;
        const posY = event.pageY;

        const dataName = this.getAttribute("data-name");

        let menuItems;
        if (this.classList.contains("officeArea")) {
            menuItems = ["Reception", "Creative", "BD", "Conference-Room","Procurement", "Head-BD","Finance","Director", "MD-PA","MD","Admin","IT"];
        } else {
            menuItems = ["Restroom","Creative-Lobby", "Walkway", "Stairs", "Procurement-Store","Game-Arena"];
        }

        const contextMenu = createContextMenu(menuItems);

        contextMenu.style.left = (posX - 1) + 'px';
        contextMenu.style.top = ( posY - 15) + 'px';
        contextMenu.style.display = 'block';

        document.body.appendChild(contextMenu);
    }

    function handleDocumentClick() {
        const contextMenus = document.querySelectorAll(".context-menu");
        contextMenus.forEach(function (menu) {
            menu.remove();
        });
    }

    const officeElements = document.querySelectorAll(".officeArea");
    const otherElements = document.querySelectorAll(".otherArea");

    officeElements.forEach(officeElement => {
        officeElement.addEventListener('contextmenu', handleContextMenu);
    });

    otherElements.forEach(otherElement => {
        otherElement.addEventListener('contextmenu', handleContextMenu);
        otherElement.addEventListener('click', function(event) {
            handleDocumentClick();
            event.stopPropagation();
        });
    });

    document.addEventListener('click', handleDocumentClick);






    // const handleContextMenu = (menu, menu2) => (e) => {
//     e.preventDefault();

//     let posX = e.pageX;
//     let posY = e.pageY;

//     menu.style.left = (posX - 10) + 'px';
//     menu.style.top = (posY - 10) + 'px';
    
//     menu.style.display = 'block';
//     menu2.style.display = 'none';
// };

// const handleDocumentClick = (menu, menu2) => () => {
//     menu.style.display = 'none';
//     menu2.style.display = 'none';
// };

// const handleMenuContext = (e) => {
//     e.preventDefault();
// };

// const officeElements = document.querySelectorAll(".officeArea");
// const otherElements = document.querySelectorAll(".otherArea");
// const menu = document.querySelector(".menu");
// const menu2 = document.querySelector(".menu-2");

// officeElements.forEach(officeElement => {
//     officeElement.addEventListener('contextmenu', handleContextMenu(menu, menu2));
// });

// otherElements.forEach(otherElement => {
//     otherElement.addEventListener('contextmenu', handleContextMenu(menu2, menu));
// });

// document.addEventListener('click', handleDocumentClick(menu, menu2));
// menu.addEventListener('contextmenu', handleMenuContext);
// menu2.addEventListener('contextmenu', handleMenuContext);


    document.getElementById("creative").addEventListener("click", function () {
        showElement(".crv");
    });

    document.getElementById("reception").addEventListener("click", function () {
        showElement(".rec");
    });

    document.getElementById("procurement").addEventListener("click", function () {
        showElement(".pro");
    });


document.getElementById("finance").addEventListener("click", function () {
   
        showElement(".fin");
      
});

document.getElementById("headpro").addEventListener("click", function () {
       showElement(".hop");
      
});
document.getElementById("md").addEventListener("click", function () {

    showElement(".md");
      
});
document.getElementById("rest-room").addEventListener("click", function () {

     showElement(".vrest");
    
});

document.getElementById("restroom").addEventListener("click", function () {

    showElement(".frest");
   
});
document.getElementById("walkway").addEventListener("click", function () {

    showElement(".walk");
   
});

document.getElementById("canteen").addEventListener("click", function () {

    showElement(".can");
  
});

document.getElementById("it").addEventListener("click", function () {

    showElement(".itoffice");
});

document.getElementById("admin").addEventListener("click", function () {

    showElement(".ad");
});
document.getElementById("store").addEventListener("click", function () {

    showElement(".prstore");
    });

document.getElementById("stairs").addEventListener("click", function () {

    showElement(".str");
   
});

document.getElementById("gamearen").addEventListener("click", function () {

    showElement(".gamc");
   
});

document.getElementById("conferenceroom").addEventListener("click", function () {

    showElement(".cr");
    
});
document.getElementById("strategy").addEventListener("click", function () {

    showElement(".bi");
 
});

document.getElementById("lobbytomd").addEventListener("click", function () {

    showElement(".mdlob");
    
});

document.getElementById("head-bd").addEventListener("click", function () {

    showElement(".hbd");
});

document.getElementById("bd").addEventListener("click", function () {

    showElement(".bdo");
    
});

document.getElementById("gamearena").addEventListener("click", function () {

    showElement(".gam");

});

document.getElementById("creativelob").addEventListener("click", function () {
    showElement(".crlo");
  
});
});


