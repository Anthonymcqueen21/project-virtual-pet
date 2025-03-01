const n = 50;
const N = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
];

const TO_NEXT_LEVEL = [
  // this much xp to get from previous to next level
  1,
  2,
  4,
  10,
  18,
  31,
  49,
  74,
  105,
  143,
  191,
  247,
  314,
  392,
  483,
  586,
  702,
  834,
  980,
  1143,
  1323,
  1522,
  1739,
  1975,
  2233,
  2511,
  2812,
  3136,
  3485,
  3858,
  4256,
  4682,
  5134,
  5615,
  6125,
  6666,
  7237,
  7839,
  8475,
  9143,
  9846,
  10584,
  11359,
  12170,
  13018,
  13906,
  14832,
  15799,
  16807,
  17858,
];

const TOTAL_XP_FOR_LEVEL = [
  //total exp to be sitting at a particular level
  1,
  3,
  7,
  17,
  35,
  66,
  115,
  189,
  294,
  437,
  628,
  875,
  1189,
  1581,
  2064,
  2650,
  3352,
  4186,
  5166,
  6309,
  7632,
  9154,
  10893,
  12868,
  15101,
  17612,
  20424,
  23560,
  27045,
  30903,
  35159,
  39841,
  44975,
  50590,
  56715,
  63381,
  70618,
  78457,
  86932,
  96075,
  105921,
  116505,
  127864,
  140034,
  153052,
  166958,
  181790,
  197589,
  214396,
  232254,
];

function CalculatePetLevel(xp) {
  //console.log("XP------>",xp)
  var level = 50;
  var remainder = 0;
  var next_level = 0;
  var ratio = 0;
  // console.log("XP------> ",xp)


  for (let l = 0; l < n; l++) {
    if (xp < TOTAL_XP_FOR_LEVEL[l]) {
      level = N[l - 1]; //TODO could just l? check 0 case
      remainder = TOTAL_XP_FOR_LEVEL[l] - xp;
      next_level = TO_NEXT_LEVEL[l];
      break;
    }
  }
  ratio = Math.floor(100 * ((next_level - remainder) / next_level));
  const level_with_remainder = {
    LEVEL: level,
    REMAINDER: remainder,
    NEXT_LEVEL: next_level,
    RATIO: ratio,
  };
  //console.log(level_with_remainder)
  return level_with_remainder;
}

export default CalculatePetLevel;
