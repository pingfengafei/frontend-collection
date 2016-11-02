// /**
//  * Created by pingfengafei on 16/9/9.
//  */
//
// // var promise = new Promise((resolve, reject)=> {
// //
// // //	reject();
// // 	setTimeout(resolve, 1000);
// // });
// //
// // promise.then(()=> {
// // 	console.log('resolve');
// // }, ()=> {
// // 	console.log('reject');
// // });
// //
// //
// // function timeout(ms) {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(resolve, ms, {hello: 'world'});
// // 	});
// // }
// //
// // timeout(10000).then((value) => {
// // 	console.log(value);
// // });
//
// function loadImageAsync(url) {
// 	return new Promise((resolve, reject)=> {
// 		var image = new Image();
// 		image.src = url;
// 		image.onload = ()=> {
// 			resolve(image);
// 		};
//
// 		image.onerror = ()=> {
// 			reject(new Error('wrong url at' + url));
// 		};
// 	});
// }
//
// let img = loadImageAsync('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');
//
// img.then((img)=> {
// 	console.log('get', img)
// }, ()=> {
// 	console.log('reject');
// });
//
// let getJSON = (url)=> {
// 	return new Promise((resolve, reject)=> {
// 		var xmlHttpRequest = new XMLHttpRequest();
// 		xmlHttpRequest.open('GET', url);
// 		xmlHttpRequest.onreadystatechange = handleChange;
// 		xmlHttpRequest.responseType = 'json';
// 		xmlHttpRequest.setRequestHeader('Accept', 'application/json');
// 		xmlHttpRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
// 		xmlHttpRequest.send();
//
// 		function handleChange() {
// 			console.log(xmlHttpRequest.response);
// 			if (this.readyState != 4) {
// 				return;
// 			}
// 			if (this.status == 200) {
// 				resolve(this.response);
// 			}
// 			else {
// 				reject(new Error('wrong'));
// 			}
// 		}
// 	});
// };
//
// getJSON('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=218.4.255.255').then((data)=> {
// 	console.log(data);
// }, (error)=> {
// 	console.log(error)
// });
//
//


function testPromise(src) {
	return new Promise((resolve, reject) => {
		if (src === 'hello') {
			resolve(src);
		}
		else {
			reject(src);
		}
	});
}

testPromise('hello world').then((src)=> {
	console.log(src);
}, (src)=> {
	console.log(src);
});


function testPromise() {
	return new Promise((resolve, reject)=> {
		if (true) {
			resolve()
		}
		else {
			reject()
		}
	});

	testPromise().then((success)=> {
	}, (fail)=> {

	})
}












