import {
  EntityIndexesAndJson,
  EntityStartAndEndAndValuesIndexes,
  render,
} from "../Render";

type Pair = {
  first: string;
  second: string[];
};
let percentageForCompatibility = 60;

const globalEntityIndexesAndJson: Map<string, EntityIndexesAndJson> = new Map();

let sortedEntriesWithType: Pair[] = [];
let lastTarget = "";

function search(target: string): Pair[] {
  if (!target.startsWith(lastTarget)) {
    sortedEntriesWithType = [];
  }
  lastTarget = target;
  for (const [type, entityIndexesAndJson] of globalEntityIndexesAndJson) {
    const json = entityIndexesAndJson.entityJson;
    const entityAndIndexes = entityIndexesAndJson.entityAndIndexes;

    const probabilityForTargetInEntities = searching(
      target,
      json,
      entityAndIndexes
    );

    const out = getSortedEntries(probabilityForTargetInEntities);
    if (out.length !== 0) {
      // console.log(out);
      sortedEntriesWithType.push({
        first: type,
        second: [...getResultEntries(out, json, entityAndIndexes)],
      });
    }
  }
  return sortedEntriesWithType;
}

function setPercentageForCompatibility(percentage: number) {
  percentageForCompatibility = percentage;
}
function addEntities(entities: object[]) {
  const type = entities[0].constructor.name;
  const entityIndexesAndJson1 = globalEntityIndexesAndJson.get(type);
  let entityJson: string;
  let entityAndIndexes: Map<string, EntityStartAndEndAndValuesIndexes>;
  if (!entityIndexesAndJson1) {
    entityJson = "";
    entityAndIndexes = new Map<string, EntityStartAndEndAndValuesIndexes>();
  } else {
    entityJson = entityIndexesAndJson1.entityJson;
    entityAndIndexes = entityIndexesAndJson1.entityAndIndexes;
  }
  const render1 = render(entities, entityJson, entityAndIndexes);
  globalEntityIndexesAndJson.set(type, render1);
}

function searchForEveryTargetAndEveryValue(
  map: Map<string, EntityStartAndEndAndValuesIndexes>,
  targets: string[],
  jsonFile: string
) {
  const arrayProbabilityForTargetInEntity = new Map<
    string,
    { [key: string]: number }
  >();
  for (const [userId, mapValues] of map) {
    for (let j = 1; j < mapValues.startIds.length; j++) {
      const i = mapValues.startIds[j];
      // console.log(jsonFile
      //     .substring(i - 2, i + 10));

      DecidePercentageOfComplianceForOneValueAndAllTargets(
        jsonFile,
        arrayProbabilityForTargetInEntity,
        targets,
        i,
        userId
      );
    }
  }
  return arrayProbabilityForTargetInEntity;
}

function searching(
  target: string,
  jsonFile: string,
  map: Map<string, EntityStartAndEndAndValuesIndexes>
) {
  const targets: string[] = target.toLowerCase().split(" ");

  return searchForEveryTargetAndEveryValue(map, targets, jsonFile);
}

function probabilityCalculation(
  count: number,
  valueLength: number,
  target: string
) {
  let probability = Math.round((count / valueLength) * 100);
  probability = (probability + Math.round((count / target.length) * 100)) / 2;
  return Math.round(probability);
}

function findTargetAndDecidePercentageOfCompliance(
  startIndex: number,
  source: string,
  target: string,
  arrayProbabilityForTargetInEntity: Map<string, { [key: string]: number }>,
  entityId: string
) {
  const valueLength = valueLengthCalculate(startIndex, source);

  const value = source.substring(startIndex - 1, startIndex + valueLength + 2);

  if (Number.isFinite(Number(value))) {
    return;
  }
  let maxProbability = 0;
  for (let i = startIndex, j; source[i] !== '"'; i++) {
    if (source[i].toLowerCase() == target[0]) {
      let count = 1;
      for (j = 1; j < target.length && source[i + j] !== '"'; j++) {
        if (source[i + j].toLowerCase() !== target[j]) {
          break;
        }
        ++count;
      }
      const probability = probabilityCalculation(count, valueLength, target);
      if (probability > maxProbability) {
        maxProbability = probability;
      }
    }
  }
  if (maxProbability >= percentageForCompatibility) {
    const targetAndProbability =
      arrayProbabilityForTargetInEntity.get(entityId);
    if (targetAndProbability) {
      targetAndProbability[target] = targetAndProbability[target]
        ? Math.max(targetAndProbability[target], maxProbability)
        : maxProbability;
    } else {
      arrayProbabilityForTargetInEntity.set(entityId, {
        [target]: maxProbability,
      });
    }
  }
}

function valueLengthCalculate(startIndex: number, source: string) {
  let valueLength = startIndex;
  while (source[valueLength] !== '"') {
    ++valueLength;
  }
  // let value = source.substring(startIndex, valueLength)
  valueLength -= startIndex;
  return valueLength;
}

function DecidePercentageOfComplianceForOneValueAndAllTargets(
  source: string,
  arrayProbabilityForTargetInEntity: Map<string, { [key: string]: number }>,
  targets: string[],
  startIndex: number = 0,
  entityId: string
) {
  if (startIndex < 0 || startIndex > source.length) {
    throw new Error("startIndex is out of range");
  }

  for (const target of targets) {
    findTargetAndDecidePercentageOfCompliance(
      startIndex,
      source,
      target,
      arrayProbabilityForTargetInEntity,
      entityId
    );
  }

  // return probabilityForTargetInEntityArray;
}

function getSortedEntries(
  arrayProbabilityForTargetInEntity: Map<string, { [key: string]: number }>
  // jsonFile: string,
  // map: Map<string, EntityStartAndEndAndValuesIndexes>
) {
  const arr = [...arrayProbabilityForTargetInEntity];
  arr.sort(([id1, founds1], [id2, founds2]) => {
    let probabilitySum1 = 0;
    for (const founds1Element in founds1) {
      probabilitySum1 += founds1[founds1Element];
    }
    let probabilitySum2 = 0;
    for (const founds1Element in founds2) {
      probabilitySum2 += founds2[founds1Element];
    }

    return probabilitySum2 - probabilitySum1;
  });
  return arr;
}

function getResultEntries(
  arr: [string, { [key: string]: number }][],
  jsonFile: string,
  map: Map<string, EntityStartAndEndAndValuesIndexes>
): string[] {
  const res: string[] = [];
  for (const [id] of arr) {
    const period = map.get(id)?.period;
    if (period) {
      res.push(jsonFile.substring(period.start, period.end));
    }
  }
  return res;
}

// Next two functions for Relation search
function getEntitiesByTypeAndIdArray(type: string, arrayIds: string[]) {
  const entityIndexesAndJson = globalEntityIndexesAndJson.get(type);
  const entityAndIndexes = entityIndexesAndJson.entityAndIndexes;
  const json = entityIndexesAndJson.entityJson;
  return {
    first: type,
    second: [...getResultEntriesByIdArrays(arrayIds, json, entityAndIndexes)],
  };
}
function getResultEntriesByIdArrays(
  arr: string[],
  jsonFile: string,
  map: Map<string, EntityStartAndEndAndValuesIndexes>
): string[] {
  const res: string[] = [];
  for (const id of arr) {
    const period = map.get(id)?.period;
    if (period) {
      res.push(jsonFile.substring(period.start, period.end));
    }
  }
  return res;
}
export {
  setPercentageForCompatibility,
  search,
  addEntities,
  Pair,
  getEntitiesByTypeAndIdArray,
};
