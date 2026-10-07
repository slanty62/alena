function showMessage() {

    const message = document.getElementById("message");


    message.innerHTML =
    "Алёна, 🖤<br><br>" +
    "Мне просто хотелось сделать для тебя " +
    "что-то красивое.<br><br>" +
    "Иногда не нужны большие слова — " +
    "достаточно того, что рядом есть человек, " +
    "который делает дни немного лучше.";


    message.style.opacity = "0";


    setTimeout(() => {

        message.style.transition = "2s";
        message.style.opacity = "1";

    }, 100);

}
