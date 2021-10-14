function openTab(elmnt, tabName) {
    let i, tabs, tablinks;
    
    // Hide all class="tab" elements by default
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    // Set default appearance for all elements with class="tablinks"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.borderStyle = "hidden solid hidden hidden";
        tablinks[i].style.padding = "15px 13px 15px 15px";
    }

    // Show the current tab and update appearance for current tablink
    document.getElementById(tabName).style.display = (tabName == 'home') ? "flex" : "block";
    document.getElementById('closeTab').style.display = (tabName == 'home') ? "none" : "block";
    if (elmnt.id != 'closeTab') {
      elmnt.style.borderStyle = "solid hidden solid solid";
      elmnt.style.padding = "13px 15px 13px 13px";
    }
  }

openTab(null, 'home');