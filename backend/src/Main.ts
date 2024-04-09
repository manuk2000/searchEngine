import { addEntities, search } from "./search/Search";
import { data } from "./dataGenerate/dataGenerateTwo";

// Iterate over all variables in the __test namespace
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    addEntities(data[key]);
  }
}
export function searching(target: string) {
  return search(target);
}
