/**
 * Created by pingfengafei on 16/9/12.
 */
let array = [];
let arrayCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000000; i++) {
	array.push(Math.random() * 1000000);
}

for (let i = 0; i <= 9; i++) {
	let index = 100000;
	for (let j = 0; j < 1000000; j++) {
		if (Math.floor(array[j] / index) == i) {
			++arrayCount[i];
		}
	}
}

console.log(arrayCount);

