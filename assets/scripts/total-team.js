function toggleExpand(id) {
    document.getElementById(`level${id}`).classList.toggle('hidden');
    document.querySelectorAll("h1")[id].classList.toggle('expanded');
    var btn = document.querySelectorAll("i")[id - 1];

    if (btn.innerHTML == "🡅 Expand") {
        btn.innerHTML = "Close"
    } else {
        btn.innerHTML = "🡅 Expand"
    }
}