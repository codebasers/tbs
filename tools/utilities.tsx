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
  
  export { throttle };
  