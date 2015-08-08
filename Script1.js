var images = document.getElementByClass("thumbPic").getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        this.style.cursor = 'hand';
        this.style.border = 'red';
    }
    images[i].onmouseout = function () {
        this.style.cursor = 'pointer';
        this.style.border = 'white';
    }
}


function changeImg(event) {
    event = event || window.event;

    var targetElement = event.target || event.srcElement;

    if (targetElement.tagName == "IMG") {
        document.getElementById("firstImg").src = targetElement.getAttribute("src");
    }


}



    
