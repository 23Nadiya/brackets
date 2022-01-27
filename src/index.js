module.exports = function check(str, bracketsConfig) {
  let resStr = "";
  for (let i = 0; i < str.length; i += 1) {
    bracketsConfig.forEach((item) => {
      if (item.includes(str[i]) === true) {
        resStr = resStr + str[i];
      }
    });
  }

  function delPair(sequence) {
    let seq = sequence;
    for (let x = 0; x < sequence.length; x += 1) {
      let first = "";
      let second = "";
      bracketsConfig.forEach((item) => {
        if (item.includes(sequence[x]) === true) {
          first = item[0];
          second = item[1];
        }
      });
      if (sequence[x] === first && sequence[x + 1] === second) {
        sequence = sequence.substring(0, x) + sequence.substring(x + 2);
      }
    }
    if (sequence === "") {
      return true;
    } else if (sequence === seq) {
      return false;
    } else {
      return delPair(sequence);
    }
  }
  return delPair(resStr);
};
