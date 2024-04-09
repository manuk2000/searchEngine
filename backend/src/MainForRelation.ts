import {
  getAllEntitiesByIds,
  searchIdArraysByRelativeId,
} from "./search/ApiForRelativSearch";

function searchByRelation(type: string, id: string) {
  const searchIdArraysByRelativeId1 = searchIdArraysByRelativeId(type, id);
  return getAllEntitiesByIds(searchIdArraysByRelativeId1);
}

export { searchByRelation };
