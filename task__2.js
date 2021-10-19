let x = prompt('Введите значение');

if (x = +x) {
	alert(typeof x);
}


else if (x = "123") {
	alert(typeof x);
}


else if (x > 0) {
	alert(true);
} else if (x < 0) {
	alert(false);
} else {
	alert('Тип не определён!')
}