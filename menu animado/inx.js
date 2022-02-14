const all = document.querySelectorAll("li")
const a = document.querySelector("ul")


all.forEach( (li, index) => {

    li.addEventListener("click", e => {

        a.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        const befect = document.querySelector("#b-efect")
        befect.style.transform = `translateX(calc(${index * 65}px))`

    })

})