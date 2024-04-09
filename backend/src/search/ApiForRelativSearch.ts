import {
  searchAllAboutCar,
  searchAllAboutShop,
  searchAllAboutShopPost,
  searchAllAboutUser,
  searchAllAboutUserPost,
} from "./SearchByRelation";
import { getEntitiesByTypeAndIdArray, Pair } from "./Search";
import { searching } from "../Main";

//code for test
// searching("");

// console.log(searchAllAboutUser("2", undefined, undefined, undefined));
// console.log(searchAllAboutShop("2", undefined, undefined));
// console.log(searchAllAboutCar("2", undefined));
// console.log(searchAllAboutShopPost("2", undefined));
// console.log(searchAllAboutUserPost("2", undefined));

// const searchAllAboutUser1 = searchAllAboutUser(
//   "2",
//   undefined,
//   undefined,
//   undefined
// );
// getAllEntitiesByIds(searchAllAboutUser1);

type TypeAndRelationIds = {
  [key: string]: string[];
};

function searchIdArraysByRelativeId(
  type: string,
  id: string
): TypeAndRelationIds {
  switch (type) {
    case "Car": {
      return searchAllAboutCar(id, undefined);
    }
    case "ShopPost": {
      return searchAllAboutShopPost(id, undefined);
    }
    case "UserPost": {
      return searchAllAboutUserPost("2", undefined);
    }
    case "User": {
      return searchAllAboutUser(id, undefined, undefined, undefined);
    }
    case "Shop": {
      return searchAllAboutShop(id, undefined, undefined);
    }
    default: {
      throw new Error(`Unknown type: ${type}`);
    }
  }
}

function searchByRelation(type: string, id: string): Pair[] {
  const searchIdArraysByRelativeId1 = searchIdArraysByRelativeId(type, id);
  const allEntitiesByIds: Pair[] = getAllEntitiesByIds(
    searchIdArraysByRelativeId1
  );
  return allEntitiesByIds;
}
function setEntitiesIntoPair(
  entriesWithType: Pair[],
  type: string,
  oneAnyTypeEntitiesByIds: {
    first: string;
    second: string[];
  }
) {
  let flag = true;
  for (const pair of entriesWithType) {
    if (pair.first === type) {
      flag = false;
      pair.second.push(...oneAnyTypeEntitiesByIds.second);
    }
  }
  if (flag) {
    entriesWithType.push({
      first: type,
      second: [...oneAnyTypeEntitiesByIds.second],
    });
  }
}

function getAllEntitiesByIds(typeAndRelationIds: TypeAndRelationIds) {
  const entriesWithType: Pair[] = [];

  for (const type in typeAndRelationIds) {
    getOneAnyTypeEntitiesByIdsAndInsetIntoPair(
      type,
      typeAndRelationIds[type],
      entriesWithType
    );
  }
  return entriesWithType;
}
function getOneAnyTypeEntitiesByIdsAndInsetIntoPair(
  type: string,
  arrayIds: string[],
  entriesWithType: Pair[]
) {
  switch (type) {
    //car
    case "userCar": {
      const oneAnyTypeEntitiesByIds = getEntitiesByTypeAndIdArray(
        "Car",
        arrayIds
      );
      setEntitiesIntoPair(entriesWithType, "Car", oneAnyTypeEntitiesByIds);
      return;
    }
    //userPosts
    case "userPosts": {
      const oneAnyTypeEntitiesByIds = getEntitiesByTypeAndIdArray(
        "UserPost",
        arrayIds
      );
      setEntitiesIntoPair(entriesWithType, "UserPost", oneAnyTypeEntitiesByIds);
      return;
    }
    //User
    case "shopWhichFollow":
    case "followWhichShop":
    case "users": {
      const oneAnyTypeEntitiesByIds = getEntitiesByTypeAndIdArray(
        "User",
        arrayIds
      );
      setEntitiesIntoPair(entriesWithType, "User", oneAnyTypeEntitiesByIds);
      return;
    }
    //shopPosts
    case "shopPosts": {
      const oneAnyTypeEntitiesByIds = getEntitiesByTypeAndIdArray(
        "ShopPost",
        arrayIds
      );
      setEntitiesIntoPair(entriesWithType, "ShopPost", oneAnyTypeEntitiesByIds);
      return;
    }
    //shops
    case "shop": {
      const oneAnyTypeEntitiesByIds = getEntitiesByTypeAndIdArray(
        "Shop",
        arrayIds
      );
      setEntitiesIntoPair(entriesWithType, "Shop", oneAnyTypeEntitiesByIds);
      return;
    }
  }
}

export { searchIdArraysByRelativeId, getAllEntitiesByIds };
