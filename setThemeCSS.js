onmessage = (e) => {
  console.log(e.data);
  if (e.data) {
    postMessage("index-dark-mode.css");
  } else {
    postMessage("index-light-mode.css");
  }
};
