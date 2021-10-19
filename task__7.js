let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let evenX = 0;
let oddX = 0;
let zeroX = 0;
let numberX = 0;
for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === "number" || !isNaN(arr[i])) {
		numberX += 1;
		if (arr[i] === 0) {
			zeroX += 1;
		} else if (arr[i] % 2 === 0) {
			evenX += 1;
		} else {
			oddX += 1;
		}
	}
}
console.log(`В массиве: ${evenX} чётных, ${oddX} нечётных, ${numberX} цифр, ${zeroX} нулей.`);