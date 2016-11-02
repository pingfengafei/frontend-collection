/**
 * Created by pingfengafei on 16/8/29.
 */
import Immutable from 'immutable';
var _ = require('lodash');


// {
// 	let map1 = Immutable.Map({a: 1, b: 2, c: 3});
// 	let map5 = Immutable.Map({a: 1, b: 2, c: 3});
//
// 	let map2 = map1.set('b', 2);
// 	let map3 = map1;
// 	let map4 = map1.set('b', 20);
//
// 	console.log(map2 === map1); //true
// 	console.log(map3 === map1); //true
// 	console.log(map4 === map1); //false
//
// 	console.log(map1 === map5); //false
// 	console.log(Immutable.is(map1, map5)); //true
// }
//
// {
// 	let map1 = Immutable.fromJS({a: 1, b: 2, c: 3});
// 	let map5 = Immutable.fromJS({a: 1, b: 2, c: 3});
//
// 	let map2 = map1.set('b', 2);
// 	let map3 = map1;
// 	let map4 = map1.set('b', 20);
//
// 	console.log(map2 === map1); //true
// 	console.log(map3 === map1); //true
// 	console.log(map4 === map1); //false
//
// 	console.log(map1 === map5); //false
// 	console.log(Immutable.is(map1, map5)); //true
// }
//
// {
// 	//用fromJS替换Map和List
// 	let map1 = Immutable.fromJS([{a: 1, b: 2, c: 3}]);
// 	let map2 = Immutable.List([{a: 1, b: 2, c: 3}]);
// 	let map3 = Immutable.fromJS({a: 1, b: 2, c: 3});
// 	let map4 = Immutable.Map({a: 1, b: 2, c: 3});
//
// 	console.log(map1);
// 	console.log(map2);
// 	console.log(map3);
// 	console.log(map4);
// }
//
// //修改Map(Object)对象
// {
// 	let map = Immutable.fromJS({a: 1, b: 2, c: 3});
// 	let ma1 = Immutable.fromJS([{a: 1, b: 2, c: 3}]);
//
// 	//查
// 	console.log(map.get('a')); //1
// 	console.log(map.get('d')); //undefined
// 	//改
// 	console.log(map.set('a', 4)); //new Map with a : 4
// 	//增
// 	console.log(map.set('d', 5)); //new Map with d :5
// 	//删
// 	console.log(map.delete('d', 5)); // new Map without d:5
// }
//
// //修改List(Array)对象
// {
// 	let list = Immutable.fromJS([1, 2, {a: 'aaaaaaaa'}]);
//
// 	console.log(list.size);
// 	list.forEach((val, index)=> {
// 		list[index] = 'aaa';
// 	});
// 	console.log(list);
// }
//
// {
// 	let list = Immutable.List([1, 2, {a: 'aaaaaaaa'}]);
// 	console.log(list.toJS());
// }


// let map5 = Immutable.fromJS({a: 1, b: 2, c: 3});
//
// let map2 = map1.set('b', 2);
// let map3 = map1;
// let map4 = map1.set('b', 20);
//
// console.log(map2 === map1); //true
// console.log(map3 === map1); //true
// console.log(map4 === map1); //false
//
// console.log(map1 === map5); //false
// console.log(Immutable.is(map1, map5)); //true


// {
// 	let map1 = Immutable.Map({a: 1, b: 2, c: 3});
// 	let clone = map1;
// 	let map2 = clone.set('b', 4);
// 	let map3 = map1.set('b', 1);
// 	// console.log(map1, clone);
// 	// console.log(map2, map3);
// }
//
// {
// 	let list1 = Immutable.List.of(1, 2);
// 	let list2 = list1.push(3, 4.5);
// //	console.log(list1);
// //	console.log(list2);
// }
//
// {
// 	let map1 = Immutable.Map({a: 1, b: 2, c: 3, d: 4});
// 	let map2 = Immutable.Map({c: 10, a: 20, t: 30});
// 	let obj = {d: 100, o: 200, g: 300};
// 	let map3 = map1.merge(map2, obj);
// 	//console.log(map3);
// }
//
// {
// 	let map1 = Immutable.fromJS({a: 1, b: 2, c: 3, d: [{name: 'hello'}, {value: 'world'}]});
// 	let map2 = map1.toObject();
// 	let map3 = map1.toArray();
// 	let map4 = map1.toJS();
// 	let map5 = JSON.stringify(map1);
// 	// console.log(map1);
// 	// console.log(map2);
// 	// console.log(map3);
// 	console.log(map4);
// 	// console.log(map5);
// 	map
//
//
// 	console.log(map4);
// }

// function testEfficiency() {
// 	var a = [];
// 	var b = [];
// 	console.time('创建数组');
// 	for (var i = 0; i <= 1000000; i++) {
// 		a.push(i);
// 		b.push(i);
// 	}
// 	console.timeEnd('创建数组');
//
//
// 	console.time('List');
// 	var $$b = Immutable.List(b);
// 	console.timeEnd('List');
//
// 	console.time('fromJS');
// 	var $$a = Immutable.fromJS(a);
// 	console.timeEnd('fromJS');
//
// 	console.time('is比较');
// 	Immutable.is($$a, $$b);
// 	console.timeEnd('is比较');
//
// 	console.time('lodash比较');
// 	_.isEqual($$a, $$b);
// 	console.timeEnd('lodash比较');
//
// 	var $$c = $$b.shift();
//
// 	console.time('immutable比较');
// 	_.isEqual($$c, $$b);
// 	console.timeEnd('immutable比较');
//
// 	console.time('lodash比较');
// 	_.isEqual(a, b);
// 	console.timeEnd('lodash比较');
//
// 	console.time('is比较');
// 	Immutable.is(a, b);
// 	console.timeEnd('is比较');
//
// }
//
// testEfficiency();


var a = {};
var b = {};

for (var i = 0; i <= 1000000; i++) {
	a[i] = '111';
	b[i] = '111';
}

console.log(a)
console.log(b)
console.time('is比较');
console.log(Immutable.is(a, b));
console.timeEnd('is比较');


var c = [1];
var d = [1];
console.log(Immutable.is(c,d))
console.log(_.isEqual(c,d))


























