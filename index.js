
// {"<20":1.05,"20-30":1.1,"30-40":1.2,">40":1.5}

class Percentage {

  constructor(rules) {
    this.rules = rules;
  }

  apply(number) {
    if (!this.isValid()) {

      console.log("Range is not correct, percentage can be wrong");
    }

    for (let [key, value] of this.rules) {

      if (key.indexOf('<') != -1) {
        const val = Number(key.slice(1));

        if (number < val) {
          console.log(`Number less than ${val} persentage is - ${value}`);
          return value;
        }
      }

      else if (key.indexOf('-') != -1) {
        const signIndex = key.indexOf('-');
        const leftSide = Number(key.slice(0, signIndex));
        const rightSide = Number(key.slice(signIndex + 1));

        if (number >= leftSide && number < rightSide) {
          console.log(`Number is between ${leftSide} and ${rightSide} persentage is - ${value}`);
          return value;
        }
      }

      else if (key.indexOf('>') != -1) {
        const val = Number(key.slice(1));

        if (number >= val) {
          console.log(`Number is greater than ${val}, persentage is - ${value}`);
          return value;
        }
      }


    }
  }

  isValid() {
    let minValidation;
    let maxValidation;

    for (let key of this.rules.keys()) {
      if (key.includes('<')) {
        minValidation = true;
      }
      else if (key.includes('>')) {
        maxValidation = true;
      }
    }
    if (minValidation && maxValidation) {
      return true
    }
    else {
      return false
    }

  }
}

const rulesMap = new Map([["<20", 1.05], ["20-30", 1.1], ["30-40", 1.2], ["40-50", 1.3], [">50", 1.5]]);

//
const proba = new Percentage(rulesMap);
proba.isValid();
proba.apply(50);
