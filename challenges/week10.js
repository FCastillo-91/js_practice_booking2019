/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("int is required");

  var digit = n.toString().split('');

  var sum = digit.map(Number).reduce((a, b) => a + b)
  return sum

};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (isNaN(start) === true || start === null) throw new Error("start number is required");
  if (end === undefined) throw new Error("end is required");
  if (isNaN(end) === true) throw new Error("end number is required");
  if (step <= 0) throw new Error("step must be greater than 0");
  if (typeof step === 'undefined') { step = 1; }
  if (!Number.isInteger(step)) throw new Error("step must be a whole number");
  if (end < start) throw new Error("end number must be greater than start number");
  if (end < step) throw new Error("step must be greater than the gap between end and start");

  var range = []

  for (let i = start; i <= end; i += step) {
    range.push(i)
  }

  return range
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!isNaN(date) === true) throw new Error("date type required");

  let usersOver100Mins = [];
  let sum = 0;

  users.forEach(function (user) {

    (user.screenTime).forEach(function (dailyScreenUsage) {

      if (date === dailyScreenUsage.date) {
        sum = 0;

        for (const [key, value] of Object.entries(dailyScreenUsage.usage)) {
          sum += value
        }
        if (sum > 100) {
          usersOver100Mins.push(user.username)
        }
      }
    });
  });
  return usersOver100Mins;
}

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (!isNaN(hexStr) === true) throw new Error("String is required");

  var noHashHexStr = hexStr.replace("#", "")

  var r = parseInt(noHashHexStr.slice(0, 2), 16),
    g = parseInt(noHashHexStr.slice(2, 4), 16),
    b = parseInt(noHashHexStr.slice(4, 6), 16);

  return "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  var posArr = [].concat.apply([], board);

  var XPos = [];
  var OPos = [];

  posArr.forEach(function (cell, index) {
    if (cell === 'X') {
      XPos.push(index);
    }
    if (cell === "0") {
      OPos.push(index);
    }
  });

  if (isWinner(OPos)) {
    return '0';
  }
  if (isWinner(XPos)) {
    return 'X';
  }
  return null;
};

const isWinner = positions => {
  positions.sort();

  if (JSON.stringify(positions) === JSON.stringify([0, 1, 2])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([3, 4, 5])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([6, 7, 8])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([0, 3, 6])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([1, 4, 7])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([2, 5, 8])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([0, 4, 8])) {
    return true;
  }
  if (JSON.stringify(positions) === JSON.stringify([2, 4, 6])) {
    return true;
  }
  return false;

}

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};