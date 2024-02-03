export const getWaysToBeatRecord = (time, distanceRecord) => {
  let waysToBeatRecord = 0;
  for (let holdButtonTime = 0; holdButtonTime < time; holdButtonTime++) {
    const speed = holdButtonTime;
    const timeToTravel = time - holdButtonTime;
    const distance = speed * timeToTravel;
    if (distance > distanceRecord) {
      waysToBeatRecord++;
    }
  }
  return waysToBeatRecord;
}

const textInputToRaceResults = (textInput) => {
  const lines = textInput.split(/\r?\n/);
  const raceResults = [];

  const [, timeValues] = lines[0].split(/:\s+/);
  const times = timeValues.split(/\s+/).map(Number);
  const [, distanceValues] = lines[1].split(/:\s+/);
  const distances = distanceValues.split(/\s+/).map(Number);

  for (let i = 0; i < times.length; i++) {
    raceResults.push({ time: times[i], distanceRecord: distances[i] })
  }

  return raceResults;
}

export const getMultipliedWaysToBeatRecord = (textInput) => {
  const races = textInputToRaceResults(textInput);
  let result = 1;
  races.forEach(race => {
    result *= getWaysToBeatRecord(race.time, race.distanceRecord);
  })
  return result;
}

export const getWaysToBeatRecordFromPuzzleInput = (textInput) => {
  const lines = textInput.split(/\r?\n/);
  const [, timeValues] = lines[0].split(/:\s+/);
  const time = Number(timeValues.split(/\s+/).join(''));
  const [, distanceValues] = lines[1].split(/:\s+/);
  const distance = Number(distanceValues.split(/\s+/).join(''));

  return getWaysToBeatRecord(time, distance);
}
