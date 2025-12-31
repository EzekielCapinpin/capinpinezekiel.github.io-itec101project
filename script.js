

function openModal(title, desc, img) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;
    document.getElementById("project-modal").style.display = "block";
}


function closeModal() {
    document.getElementById("project-modal").style.display = "none";
}

function openImage(imgSrc) {
    document.getElementById("modal-title").innerText = "";
    document.getElementById("modal-desc").innerText = "";
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("project-modal").style.display = "block";
}
