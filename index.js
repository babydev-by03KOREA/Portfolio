const content = "println('hi! my name is hyeongju'), \n full-stack developer.";
const text = document.querySelector(".home__code__text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)