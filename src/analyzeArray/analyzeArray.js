function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    return {
      error: "Not an array",
    };
  }

  let avg = "NA";
  try {
    avg = calcAvg(arr);
  } catch {
    return {
      error: "contains NaN",
    };
  }

  const response = {
    average: avg,
    min: "NA",
    max: "NA",
    length: arr.length,
  };

  for (let i = 0; i < response.length; ++i) {
    if (response.min === "NA" || arr[i] < response.min) {
      response.min = arr[i];
    }

    if (response.max === "NA" || arr[i] > response.max) {
      response.max = arr[i];
    }
  }

  return response;
}

function calcAvg(arr) {
  if (arr.length <= 0) return "NA";

  let sum = 0;
  for (const n of arr) {
    if (typeof n != "number") throw "NAN";
    sum += n;
  }
  return sum / arr.length;
}

export default analyzeArray;
