// ===============================
// Секретное сообщение
// ===============================


function showMessage() {


    const message = document.getElementById("message");


    message.innerHTML =

    "Алёна 🖤<br><br>" +

    "Я не знаю, насколько хорошо " +
    "можно передать словами то, что чувствуешь.<br><br>" +

    "Поэтому просто сделал маленький " +
    "уголок, который будет только для тебя.<br><br>" +

    "Надеюсь, он хотя бы немного " +
    "подарит тебе улыбку ✨";



    message.style.opacity = "0";

    message.style.transform = "translateY(20px)";



    setTimeout(() => {


        message.style.transition = "all 1.5s ease";


        message.style.opacity = "1";


        message.style.transform = "translateY(0)";


    }, 100);



}







// ===============================
// Появление блоков при прокрутке
// ===============================


function revealOnScroll() {


    const elements = document.querySelectorAll(".reveal");



    elements.forEach((element) => {



        const position = 
        element.getBoundingClientRect().top;



        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 120) {


            element.classList.add("active");


        }



    });



}





window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();







// ===============================
// Плавное появление сайта
// ===============================


window.addEventListener("load", () => {


    document.body.style.opacity = "1";


});
