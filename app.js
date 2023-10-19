function anyColor() {
    let color = document.getElementById("textarea")
    let colorPost = document.getElementById("posting")

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    color.style.backgroundColor = "#" + randomColor
    colorPost.innerHTML
    colorPost.style.backgroundColor = "#" + randomColor
    colorPost.style.textAlign ="center"
    colorPost.style.fontSize = "28px"
}

function likeButton() {
    let like = document.getElementById("like")
    like.style.color = "#1668cb"
}

function gotoviewPost() {
    let container = document.getElementById("container")
    let container1 = document.getElementById("container1")
    container.style.display = "none"
    container1.style.display = "block"
    container.style.height = ""
    let contValue = document.getElementById("textarea") 
    let contValue1 =  document.getElementById("posting")
    contValue1.innerHTML = contValue.value


}
