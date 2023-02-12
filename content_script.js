const text = document.getElementsByTagName("*");
// "h1, h2, h3, h4, h5, p, li, td, caption, span, a"

for (let i=0; i < text.length; i++) {
    if (text[i].innerHTML.includes(" ")) {
        const text_body = text[i].innerText;
        text[i].innerHTML = text[i].innerHTML.replace(text_body, `${text_body} 
        ${text_body}`)
        //console.log(`Text i is: ${text[i].innerText}`)
    } else if (text[i].innerHTML.includes("the")) {
        text[i].innerHTML = text[i].innerHTML.replace('the', 'das')
    }
}

//for (let i =0; i < text.length; i++) {
  //  text[i].innerHTML = `I'm ${text[i]} years old!`
//}