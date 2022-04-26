const menu = () => {
    let e = document.getElementById("menulist");
    console.log(e)
    if (e.className === "menu_list") {
        e.className += " responsive";
    }
    else {
        e.className = "menu_list"
    }
}