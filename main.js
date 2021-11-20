window.document.write("<h3>__Коррекция файла__</h3>");
window.document.write("<p>Этот блок всево лишь пример взаимодействия с пользователем. Напишите, что бы вы изменили в данном документе или что Вам не нравится. Будьте кратки, экономьте машинное время :)</p>");
window.document.write("<input id = 'input'>   ввести значение   </input>");
window.document.write("<button id = '_Button'> Кнопка</button>");
window.document.write("<br>");
document.querySelector("#_Button").addEventListener("click", () => {
    let string = document.querySelector("#input");
    alert(string.value);
    string.value = "";
})
window.document.write("<br>");