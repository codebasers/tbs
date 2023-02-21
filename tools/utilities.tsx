const throttle = (func: Function, interval = 10) => {
	let first = true;
	let waiting = false;
	return () => {
	  if (first) {
		func();
		first = false;
		return;
	  }
	  if (!waiting) {
		waiting = true;
		window.setTimeout(() => {
		  func();
		  waiting = false;
		}, interval);
	  }
	};
  };
  
const genRandom = () => {
	const min = 1000;
	const max = 9999;
	const rand = Math.round(min + Math.random() * (max - min));
	return rand;
}
  export {
	  throttle,
	  genRandom,
	};
  