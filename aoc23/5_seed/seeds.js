import { testInput } from './seeds.input.js';

export const getFlatMapFromRange = (rangeText) => {
  const rangeLines = rangeText.split(/\r?\n/);

  const flatMap = {};
  rangeLines.forEach(rangeLine => {
    const [destinationRangeStart, sourceRangeStart, rangeLength] = rangeLine.split(/\s+/).map(Number);
    for (let i = 0; i < rangeLength; i++) {
      flatMap[sourceRangeStart + i] = destinationRangeStart + i;
    }
  });

  return flatMap;
}

export const getDestinationNumber = (flatMap, sourceNumber) => {
  return flatMap[sourceNumber] || sourceNumber;
}

export const getDestinationNumberFromMapText = () => {

}

export const getTextForMap = (mapName, textInput) => {
  let mapLines = [];
  const textLines = textInput.split(/\r?\n/);

  const mapTitleIndex = textLines.indexOf(`${mapName} map:`);
  let mapStart = mapTitleIndex + 1;
  while (textLines[mapStart] && !/^\s*$/.test(textLines[mapStart])) {
    mapLines.push(textLines[mapStart]);
    mapStart++;
  }

  return mapLines.join('\n');
}

const getMaps = (textInput) => {
  const maps = [
    { mapName: 'seed-to-soil', destinationName: 'soil', },
    { mapName: 'soil-to-fertilizer', destinationName: 'fertilizer', },
    { mapName: 'fertilizer-to-water', destinationName: 'water', },
    { mapName: 'water-to-light', destinationName: 'light', },
    { mapName: 'light-to-temperature', destinationName: 'temperature', },
    { mapName: 'temperature-to-humidity', destinationName: 'humidity', },
    { mapName: 'humidity-to-location', destinationName: 'location', },
  ];

  maps.forEach(map => {
    const textForMap = getTextForMap(map.mapName, textInput);
    maps.flatMap = getFlatMapFromRange(textForMap);
  })

  return maps;
}

export const getFullMapForSeed = (maps, seedNumber) => {
  const fullMap = { seed: seedNumber };
  // const maps = [
  //   { mapName: 'seed-to-soil', destinationName: 'soil', },
  //   { mapName: 'soil-to-fertilizer', destinationName: 'fertilizer', },
  //   { mapName: 'fertilizer-to-water', destinationName: 'water', },
  //   { mapName: 'water-to-light', destinationName: 'light', },
  //   { mapName: 'light-to-temperature', destinationName: 'temperature', },
  //   { mapName: 'temperature-to-humidity', destinationName: 'humidity', },
  //   { mapName: 'humidity-to-location', destinationName: 'location', },
  // ];
  //
  // let sourceNumber = seedNumber;
  // maps.forEach(map => {
  //   const textForMap = getTextForMap(map.mapName, textInput);
  //   const flatMap = getFlatMapFromRange(textForMap);
  //   const destinationNumber = getDestinationNumber(flatMap, sourceNumber)
  //   fullMap[map.destinationName] = destinationNumber;
  //   sourceNumber = destinationNumber;
  // })

  let sourceNumber = seedNumber;
  maps.forEach(map => {
    const destinationNumber = getDestination(map, sourceNumber)
    fullMap[map.destinationName] = destinationNumber;
    sourceNumber = destinationNumber;
  });

  return fullMap;
}

export const getDestination = (map, sourceNumber) => {
  for (let i = 0; i < map.ranges.length; i++) {
    const range = map.ranges[i];
    if (sourceNumber >= range.sourceRangeStart && sourceNumber <= range.sourceRangeEnd) {
      const offset = sourceNumber - range.sourceRangeStart;
      const result = range.destinationRangeStart + offset
      return result;
    }
  }
  return sourceNumber;
}

export const getMapSourceRanges = (text) => {
  const rangeLines = text.split(/\r?\n/);

  const ranges = [];
  rangeLines.forEach(rangeLine => {
    const [destinationRangeStart, sourceRangeStart, rangeLength] = rangeLine.split(/\s+/).map(Number);
    ranges.push({
      destinationRangeStart,
      sourceRangeStart,
      sourceRangeEnd: sourceRangeStart + rangeLength - 1,
      rangeLength
    })
  });
  return ranges;
}

export const getParsedMaps = (textInput) => {
  const maps = [
    { mapName: 'seed-to-soil', destinationName: 'soil', },
    { mapName: 'soil-to-fertilizer', destinationName: 'fertilizer', },
    { mapName: 'fertilizer-to-water', destinationName: 'water', },
    { mapName: 'water-to-light', destinationName: 'light', },
    { mapName: 'light-to-temperature', destinationName: 'temperature', },
    { mapName: 'temperature-to-humidity', destinationName: 'humidity', },
    { mapName: 'humidity-to-location', destinationName: 'location', },
  ];

  maps.forEach(map => {
    map.text = getTextForMap(map.mapName, textInput);
    map.ranges = getMapSourceRanges(map.text);
  })

  return maps;
}

export const getLowestLocationNumber = (textInput, seeds) => {
  const maps = getParsedMaps(textInput);

  const seedMaps = seeds.map(seedNumber => getFullMapForSeed(maps, seedNumber));

  let result = Infinity;
  seedMaps.forEach(map => {
    if (map.location < result) {
      result = map.location;
    }
  })

  return result;
}

export const getLowestLocationNumberFromRange = (textInput, seedRanges) => {
  // const maps = getParsedMaps(testInput);
  // const mapsWithSortedRanges = maps.map(map => {
  //   map.ranges = map.ranges.sort((a,b) => a.sourceRangeStart - b.sourceRangeStart);
  //   return map;
  // });
  // const reversedMaps = mapsWithSortedRanges.reverse();
  //
  // const [htl, tth, ltt, wtl, ftw, stf, sts] = reversedMaps;
  // for (let i = 0; i < htl.ranges.length; i++) {
  //   const htlRange = htl.ranges[i];
  //   const a = 1;
  // }
  // return 0;
  const maps = getParsedMaps(textInput);
  const seeds = [];
  // seedRanges.forEach(seedRange => {
  //   for (let i = 0; i < seedRange.seedLength; i++) {
  //     seeds.push(seedRange.seedStart + i);
  //   }
  // })
  //
  // const seedMaps = seeds.map(seedNumber => getFullMapForSeed(maps, seedNumber));
  //
  // let result = Infinity;
  // seedMaps.forEach(map => {
  //   if (map.location < result) {
  //     result = map.location;
  //   }
  // })

  let result = Infinity;
  seedRanges.forEach(seedRange => {
    for (let i = 0; i < seedRange.seedLength; i++) {
      // seeds.push(seedRange.seedStart + i);
      const seedNumber = seedRange.seedStart + i;
      const seedMap = getFullMapForSeed(maps, seedNumber);

      if (seedMap.location < result) {
        result = seedMap.location;
      }
    }
  })

  return result;
}
