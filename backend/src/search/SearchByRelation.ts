import {
  CarUserRelation,
  relation,
  ShopFollowersRelation,
  ShopPostRelation,
  UserPostRelation,
} from "../dataGenerate/dataGenerateTwo";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          User Shop

function searchFollowersByShopId(
  shopId: string,
  shopFollowersRelation: ShopFollowersRelation
): string[] | undefined {
  return shopFollowersRelation.shopIdFollowerIds.get(shopId);
}

function searchShopsByUser(
  userId: string,
  shopFollowersRelation: ShopFollowersRelation
): string[] {
  const shopIds: string[] = [];
  for (const [
    shopId,
    followerIds,
  ] of shopFollowersRelation.shopIdFollowerIds.entries()) {
    if (followerIds.includes(userId)) {
      shopIds.push(shopId);
    }
  }
  return shopIds;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          Shop Post

function searchPostsByShop(
  shopId: string,
  postShopRelation: ShopPostRelation
): string[] {
  const postIds: string[] = postShopRelation.shopIdPostId.get(shopId) || [];
  return postIds;
}

function searchShopsByPost(
  postId: string,
  postShopRelation: ShopPostRelation
): string[] {
  return postShopRelation.shopIdPostId.get(postId) || [];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          User Post

function searchUsersByPost(
  postId: string,
  postUserRelation: UserPostRelation
): string[] | undefined {
  return postUserRelation.userIdPostID.get(postId);
}

function searchPostsByUser(
  userId: string,
  postUserRelation: UserPostRelation
): string[] {
  const postIds: string[] = postUserRelation.userIdPostID.get(userId) || [];
  return postIds;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          User Car

function searchCarsByUser(
  userId: string,
  carUserRelation: CarUserRelation
): string[] {
  const carIds: string[] = [];
  for (const [carId, userIds] of carUserRelation.carIDUserId.entries()) {
    if (userIds.includes(userId)) {
      carIds.push(carId);
    }
  }
  return carIds;
}

function searchUsersByCar(
  carId: string,
  carUserRelation: CarUserRelation
): string[] {
  return carUserRelation.carIDUserId.get(carId) || [];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          Search by entities

function searchAllAboutUser(
  userId: string,
  carUserRelation: CarUserRelation | undefined,
  userPostRelation: UserPostRelation | undefined,
  shopFollowersRelation: ShopFollowersRelation | undefined
  // shopPostRelation: ShopPostRelation | undefined
): {
  userCar: string[];
  userPosts: string[];
  shopWhichFollow: string[];
} {
  return {
    userCar:
      searchCarsByUser(
        userId,
        carUserRelation || (relation["carUserRelation"] as CarUserRelation)
      ) || [],
    userPosts:
      searchPostsByUser(
        userId,
        userPostRelation || (relation["postUserRelation"] as UserPostRelation)
      ) || [],
    shopWhichFollow:
      searchShopsByUser(
        userId,
        shopFollowersRelation ||
          (relation["shopFollowersRelation"] as ShopFollowersRelation)
      ) || [],
  };
}

function searchAllAboutShop(
  shopId: string,
  postShopRelation: ShopPostRelation,
  shopFollowersRelation: ShopFollowersRelation
): {
  shopPosts: string[];
  followWhichShop: string[];
} {
  return {
    shopPosts:
      searchPostsByShop(
        shopId,
        postShopRelation || (relation["postShopRelation"] as ShopPostRelation)
      ) || [],
    followWhichShop:
      searchFollowersByShopId(
        shopId,
        shopFollowersRelation ||
          (relation["shopFollowersRelation"] as ShopFollowersRelation)
      ) || [],
  };
}

function searchAllAboutCar(
  carId: string,
  carUserRelation: CarUserRelation
): { users: string[] } {
  return {
    users:
      searchUsersByCar(
        carId,
        (relation["carUserRelation"] as CarUserRelation) || carUserRelation
      ) || [],
  };
}

function searchAllAboutShopPost(
  postId: string,
  shopPostRelation: ShopPostRelation
): { shops: string[] } {
  return {
    shops: searchShopsByPost(
      postId,
      shopPostRelation || (relation["postShopRelation"] as ShopPostRelation)
    ),
  };
}

function searchAllAboutUserPost(
  postId: string,
  userPostRelation: UserPostRelation | undefined
): { users: string[] } {
  return {
    users:
      searchUsersByPost(
        postId,
        (relation["postUserRelation"] as UserPostRelation) || userPostRelation
      ) || [],
  };
}

export {
  searchAllAboutUser,
  searchAllAboutShop,
  searchAllAboutCar,
  searchAllAboutShopPost,
  searchAllAboutUserPost,
};
