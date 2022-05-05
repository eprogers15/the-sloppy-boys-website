function searchFunction() {
    let input, filter, li, a, txtValue;
    input = document.getElementById("searchInput");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchInput").blur()
        }
    });
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("drink-card");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[1];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortFunction() {
    if (this.options[this.selectedIndex].value == "alpha_ascending") {
        let li, i, switching, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            li = document.getElementsByClassName("drink-card");
            for (i = 0; i < (li.length - 1); i++) {
                shouldSwitch = false;
                if (li[i].innerHTML.toLowerCase() > li[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                li[i].parentNode.insertBefore(li[i + 1], li[i]);
                switching = true
            }
        }
    } else if (this.options[this.selectedIndex].value == "alpha_descending") {
        let li, i, switching, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            li = document.getElementsByClassName("drink-card");
            for (i = 0; i < (li.length - 1); i++) {
                shouldSwitch = false;
                if (li[i].innerHTML.toLowerCase() < li[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                li[i].parentNode.insertBefore(li[i + 1], li[i]);
                switching = true
            }
        }
    } else if (this.options[this.selectedIndex].value == "date_new-to-old") {
        let li, i, switching, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            li = document.getElementsByClassName("drink-card");
            for (i = 0; i < (li.length - 1); i++) {
                shouldSwitch = false;
                if (li[i].getElementsByTagName("p")[0].getAttribute("id") < li[i + 1].getElementsByTagName("p")[0].getAttribute("id")) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                li[i].parentNode.insertBefore(li[i + 1], li[i]);
                switching = true
            }
        }
    } else if (this.options[this.selectedIndex].value == "date_old-to-new") {
        let li, i, switching, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            li = document.getElementsByClassName("drink-card");
            for (i = 0; i < (li.length - 1); i++) {
                shouldSwitch = false;
                if (li[i].getElementsByTagName("p")[0].getAttribute("id") > li[i + 1].getElementsByTagName("p")[0].getAttribute("id")) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                li[i].parentNode.insertBefore(li[i + 1], li[i]);
                switching = true
            }
        }
    }
}