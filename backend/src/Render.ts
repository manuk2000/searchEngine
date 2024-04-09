class Period {
  constructor(public start: number, public end: number) {}

  toObject(): { start: number; end: number } {
    return { start: this.start, end: this.end };
  }
}

export class EntityStartAndEndAndValuesIndexes {
  public period: Period; // Field
  constructor(start: number, end: number, public startIds: number[] = []) {
    this.period = new Period(start, end);
  }
}

export type EntityIndexesAndJson = {
  entityAndIndexes: Map<string, EntityStartAndEndAndValuesIndexes>;
  entityJson: string;
};

export function render(
  userArr: any[],
  jsonFile: string,
  map: Map<string, EntityStartAndEndAndValuesIndexes>
): EntityIndexesAndJson {
  let currentIndex: number = jsonFile.length;

  for (const user of userArr) {
    const jsonUser = JSON.stringify(user);
    jsonFile += jsonUser;

    const valuesStartIndexes: EntityStartAndEndAndValuesIndexes =
      new EntityStartAndEndAndValuesIndexes(
        currentIndex,
        currentIndex + jsonUser.length
      );
    insertStartIndexes(valuesStartIndexes, jsonUser, currentIndex);
    currentIndex += jsonUser.length;
    map.set(user.id, valuesStartIndexes);
  }
  return {
    entityJson: jsonFile,
    entityAndIndexes: map,
  };
}

function insertStartIndexes(
  resArr: EntityStartAndEndAndValuesIndexes,
  jsonUser: string,
  startIndex: number
) {
  for (let i = 0; i < jsonUser.length; i++) {
    if (jsonUser[i] === ":" && jsonUser[i + 1] === '"') {
      resArr.startIds.push(i + 2 + startIndex);
    }
  }
}
