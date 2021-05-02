
document.getElementById("burger-menu").addEventListener("click", function (ev) {
    $(".bar-list-menu").toggleClass("active");
    $("#smeshenie").toggleClass("smeshenie");
    $("#smeshenie").toggleClass("smeshenie-m");
})


document.getElementById("one-sec").addEventListener("mouseover", function (ev) {
    $("#section-one-desc").addClass("section-one-desc-active");
})

document.getElementById("one-sec").addEventListener("mouseout", function (ev) {
    $("#section-one-desc").removeClass("section-one-desc-active");
})


document.getElementById("two-sec").addEventListener("mouseover", function (ev) {
    $("#section-two-desc").addClass("section-one-desc-active");
})

document.getElementById("two-sec").addEventListener("mouseout", function (ev) {
    $("#section-two-desc").removeClass("section-one-desc-active");
})


document.getElementById("three-sec").addEventListener("mouseover", function (ev) {
    $("#section-three-desc").addClass("section-one-desc-active");
})

document.getElementById("three-sec").addEventListener("mouseout", function (ev) {
    $("#section-three-desc").removeClass("section-one-desc-active");
})

document.getElementById("link").addEventListener("mouseover", function (ev) {
    let arr = document.getElementById('link').getElementsByClassName('aa');
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.add("hov");
    }
    ev.preventDefault();
})

document.getElementById("link").addEventListener("mouseout", function (ev) {
    let arr = document.getElementById('link').getElementsByClassName('aa');
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove("hov");
    }
    ev.preventDefault();
})