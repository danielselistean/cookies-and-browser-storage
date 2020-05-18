 document.cookie = "CakeCookie[recommend]=8M0SvYCQ; _ga=GA1.2.424923079.1589258347; _gid=GA1.2.2143319200.1589258347; _fbp=fb.1.1589258346964.816068828";

 let cookie = "CakeCookie[recommend]=8M0SvYCQ; _ga=GA1.2.424923079.1589258347; _gid=GA1.2.2143319200.1589258347; _fbp=fb.1.1589258346964.816068828";

 
function getCookiesAsObject() {
    let cookieArray = document.cookie.split("; ");
    console.log(cookieArray);
    let cookiesObject = {};


    cookieArray.forEach(element => {
        let cookieData = element.split("=");
        console.log(cookieData);
        cookiesObject[cookieData[0]] = cookieData[1]
    })
    return cookiesObject;
}

const cookiesObject = getCookiesAsObject();

console.log(cookiesObject)

const radioBtns = document.getElementsByName("language");
console.log(radioBtns);

for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].value === cookiesObject.language) {
        radioBtns[i].checked = "checked";
    }

    radioBtns[i].addEventListener('click', (event) => {
        document.cookie = `language=${event.target.value}`
    })
}



