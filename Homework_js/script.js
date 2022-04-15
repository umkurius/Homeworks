var fam=prompt("Фамилия");
while(!isNaN(fam)) {
    fam=prompt("Неверные данные, попробуйте снова");
} 
var yourname=prompt("Имя");
while(!isNaN(yourname)) {
    yourname=prompt("Неверные данные, попробуйте снова");
}
var otch=prompt("Отчество") 
while(!isNaN(otch)) {
    otch=prompt("Неверные данные, попробуйте снова");
}
var age=prompt("Ваш возраст");
while(isNaN(age)) {
    age=prompt("Неверные данные, попробуйте снова");
}
var ageInDays=age*365;
var agePlus5=parseInt(age)+5;
var gen=confirm("Ваш пол мужской?")
if (gen===true) {
    var gen="Мужской";
} else {
    var gen="Женский";
}
if (age<=63) {
    var pens="Нет"
} else {
    var pens="Да"
}
alert("Ваше ФИО: "+fam+" "+yourname+" "+otch+"\n"+"Ваш возраст в годах: "+age+"\n"+"Ваш возраст в днях: "+ageInDays+"\n"+"Через 5 лет вам будет: "+agePlus5+"\n"+"Ваш пол: "+gen+"\n"+"Вы на пенсии: "+pens);