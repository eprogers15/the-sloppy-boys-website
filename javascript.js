function searchFunction() {
    let input, filter, li, a, txtValue;
    input = document.getElementById("searchInput");
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