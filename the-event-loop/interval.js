let start = 3;

const countdown = () => {
  if (start > 0) {
    console.log(start);
    start--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(countdown, 1000);
