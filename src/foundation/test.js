// /**
//  * Created by pingfengafei on 16/10/31.
//  */
// function bucket_sort(arr, num) {
// 	var temp = [];
// 	var result = [];
// 	var len = arr.length;
//
// 	var min, max;
// 	min = max = arr[0];
//
// 	var gap;
//
// 	for (let i = 1; i < len; i++) {
// 		min = Math.min(min, arr[i]);
// 		max = Math.max(max, arr[i]);
// 	}
//
// 	gap = (max - min + 1) / num;
//
// 	for (let i = 0; i < len; i++) {
// 		var index = Math.floor((arr[i] - min) / gap);
//
// 		if (temp[index]) {
// 			// 非空桶，插入排序
// 			for (var j = temp[index].length - 1; j >= 0 && temp[index][j] > arr[i]; j--) {
// 				temp[index][j + 1] = temp[index][j];
// 			}
//
// 			temp[index][j + 1] = arr[i];
// 		} else {
// 			// 空桶，初始化
// 			temp[index] = [];
// 			temp[index].push(arr[i]);
// 		}
// 	}
// 	let n = 0;
// 	while (n < num) {
// 		result = result.concat(temp[n]);
// 		n++;
// 	}
// 	return result;
// }
//
// let arr = [];
// for (let i = 0; i < 10000; i++) {
// 	arr.push(Math.round((Math.random() + 0.25) * 600)); // 150~750
// }
//
// console.time('桶排序');
// bucket_sort(arr, 12);
// console.timeEnd('桶排序');
//
//
// console.time('var');
// for (var i = 0; i < 100000000; i++) {}
// console.timeEnd('var')
//
//
// console.time('let');
// for (let i = 0; i < 100000000; i++) {}
// console.timeEnd('let')
//
//
// function testlet() {
// 	let a = 0;
// 	for (var i = 0; i < 100000000; i++) {}
// }
//
// function testlet2() {
// 	for (var i = 0; i < 100000000; i++) {}
// 	let a = 0;
// }
//
// console.time('let');
// testlet();
// console.timeEnd('let');
//
// console.time('let2');
// testlet2();
// console.timeEnd('let2');
