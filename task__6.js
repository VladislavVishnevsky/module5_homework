let arr = [2, 2, 2, 2, 2];
let rezult;
for (let i = 0; i < arr.length - 1; i++) {
	if (arr[i] === arr[i + 1]) {
		rezult = true;
	} else {
		rezult = false;
		i = arr.length;
	}
}
console.log(rezult);