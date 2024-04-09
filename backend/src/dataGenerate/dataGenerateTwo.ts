const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "pineapple",
  "car",
  "bike",
  "bus",
  "train",
  "plane",
  "house",
  "apartment",
  "villa",
  "cabin",
  "mansion",
  "dog",
  "cat",
  "bird",
  "fish",
  "hamster",
  "sun",
  "moon",
  "star",
  "planet",
  "galaxy",
  "book",
  "pen",
  "pencil",
  "notebook",
  "diary",
  "computer",
  "keyboard",
  "mouse",
  "monitor",
  "laptop",
  "mountain",
  "hill",
  "valley",
  "river",
  "lake",
];
const shopWords = [
  "store",
  "market",
  "boutique",
  "mall",
  "shop",
  "purchase",
  "buy",
  "sale",
  "discount",
  "shopping",
  "customer",
  "shopper",
  "retail",
  "sale",
  "deal",
  "basket",
  "cart",
  "checkout",
  "cashier",
  "receipt",
  "clothing",
  "shoes",
  "accessories",
  "electronics",
  "groceries",
  "fashion",
  "style",
  "brand",
  "online",
  "offline",
  "marketplace",
  "supermarket",
  "storefront",
  "emporium",
  "outlet",
  "department",
  "storehouse",
  "bazaar",
  "boutique",
  "retailer",
];

const names = [
  "Emma",
  "Olivia",
  "Ava",
  "Isabella",
  "Sophia",
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "James",
  "William",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Amelia",
  "Mia",
  "Harper",
  "Evelyn",
  "Charlotte",
  "Michael",
  "Daniel",
  "Matthew",
  "David",
  "Joseph",
  "Jackson",
  "Samuel",
  "Sebastian",
  "Jack",
  "Ethan",
  "Grace",
  "Emily",
  "Chloe",
  "Lily",
  "Zoe",
  "Ella",
  "Avery",
  "Sofia",
  "Scarlett",
  "Madison",
];

const surnames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
];

const street = [
  "Main",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Park",
  "Oak",
  "Pine",
  "Maple",
  "Elm",
  "Sunset",
  "River",
  "Lake",
  "Hill",
  "Valley",
  "Street",
  "Avenue",
  "Road",
  "Lane",
  "Drive",
  "Boulevard",
  "Court",
  "Place",
  "Way",
  "Circle",
  "Cedar",
  "Willow",
  "Birch",
  "Juniper",
  "Cypress",
  "Magnolia",
  "Sycamore",
  "Aspen",
  "Chestnut",
  "Hickory",
  "Poplar",
  "Sassafras",
  "Locust",
  "Mulberry",
  "Spruce",
];
const carCompanyWords = [
  "Auto",
  "Car",
  "Drive",
  "Motor",
  "Wheel",
  "Speed",
  "Fast",
  "Engine",
  "Road",
  "Gear",
  "Power",
  "Mile",
  "Turbo",
  "Velocity",
  "Shift",
  "Cruise",
  "Drive",
  "Lane",
  "AutoTech",
  "DriveTech",
  "Automotive",
  "Vehicle",
  "Ride",
  "Automobile",
  "Motion",
  "DriveX",
  "Innovation",
  "Carro",
  "Revolution",
  "Autonomy",
  "Tech",
  "Acceleration",
  "Fleet",
  "Performance",
  "Autos",
  "Speedster",
  "Vroom",
  "Wheels",
  "Transit",
  "Roadster",
];

// Define functions to populate relations
function generateShopFollowersRelation(
  shops: Shop[],
  users: User[]
): ShopFollowersRelation {
  const shopFollowersMap: Map<string, string[]> = new Map();
  shops.forEach((shop) => {
    const followerIds: string[] = [];
    // Generating random follower IDs for each shop
    for (let i = 0; i < 5; i++) {
      const randomUserId = Math.floor(Math.random() * users.length).toString();
      followerIds.push(randomUserId);
    }
    shopFollowersMap.set(shop.id, followerIds);
  });
  return new ShopFollowersRelation(shopFollowersMap);
}

function generatePostShopRelation(shopPosts: ShopPost[]): ShopPostRelation {
  const postShopMap: Map<string, string[]> = new Map();
  shopPosts.forEach((post) => {
    // Assuming each shop post is related to 3 random shops
    const randomShopIds: string[] = [];
    for (let i = 0; i < 3; i++) {
      const randomShopId = Math.floor(
        Math.random() * shopPosts.length
      ).toString();
      randomShopIds.push(randomShopId);
    }
    postShopMap.set(post.id, randomShopIds);
  });
  return new ShopPostRelation(postShopMap);
}

function generatePostUserRelation(userPosts: UserPost[]): UserPostRelation {
  const postUserMap: Map<string, string[]> = new Map();
  userPosts.forEach((post) => {
    // Assuming each user post is related to 3 random users
    const randomUserIds: string[] = [];
    for (let i = 0; i < 3; i++) {
      const randomUserId = Math.floor(
        Math.random() * userPosts.length
      ).toString();
      randomUserIds.push(randomUserId);
    }
    postUserMap.set(post.id, randomUserIds);
  });
  return new UserPostRelation(postUserMap);
}

function generateCarUserRelation(cars: Car[], users: User[]): CarUserRelation {
  const carUserMap: Map<string, string[]> = new Map();
  cars.forEach((car) => {
    // Assuming each car is owned by 3 random users
    const randomUserIds: string[] = [];
    for (let i = 0; i < 3; i++) {
      const randomUserId = Math.floor(Math.random() * users.length).toString();
      randomUserIds.push(randomUserId);
    }
    carUserMap.set(car.id, randomUserIds);
  });
  return new CarUserRelation(carUserMap);
}

class Pair {
  private key: string;
  private value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  getKey(): string {
    return this.key;
  }

  getValue(): string {
    return this.value;
  }
}

// UserPost class definition
class UserPost {
  constructor(public id: string, public name: string) {}
}

// ShopPost class definition
class ShopPost {
  constructor(public id: string, public name: string) {}
}

// User class definition
class User {
  constructor(
    public id: string,
    public surname: string,
    public lastname: string,
    public age: number,
    public email: string // public idUserPost: string, // public idCar: string,
  ) {}
}

// Shop class definition
class Shop {
  constructor(
    public id: string,
    public location: string,
    public name: string,
    public street: string // public idShopPost: string, // public idsFollower: string[]
  ) {}
}

// Car class definition
class Car {
  constructor(
    public id: string,
    public name: string,
    public type: "sedan" | "suv" // public idUser: string[]
  ) {}
}

class CarUserRelation {
  constructor(public carIDUserId: Map<string, string[]>) {}
}

class UserPostRelation {
  constructor(public userIdPostID: Map<string, string[]>) {}
}

class ShopPostRelation {
  constructor(public shopIdPostId: Map<string, string[]>) {}
}

class ShopFollowersRelation {
  constructor(public shopIdFollowerIds: Map<string, string[]>) {}
}

// Generate 10 examples for each class
const length1 = 39;
const userPosts: UserPost[] = Array.from(
  { length: length1 },
  (_, i) => new UserPost(i.toString(), ` ${words[i + 1]}`)
);
const shopPosts: ShopPost[] = Array.from(
  { length: length1 },
  (_, i) => new ShopPost(i.toString(), ` ${shopWords[i + 1]}`)
);
const users: User[] = Array.from(
  { length: length1 },
  (_, i) =>
    new User(
      i.toString(),
      ` ${names[i + 1]}`,
      ` ${surnames[i + 1]}`,
      20 + i,
      ` ${words[i + 1]}${names[i + 1]}@example.com`
    )
);
const shops: Shop[] = Array.from(
  { length: length1 },
  (_, i) =>
    new Shop(
      i.toString(),
      ` ${street[i + 1]}`,
      ` ${shopWords[i + 1]}`,
      ` ${street[i + 1]}`
    )
);
const cars: Car[] = Array.from(
  { length: length1 },
  (_, i) =>
    new Car(
      i.toString(),
      ` ${carCompanyWords[i + 1]}`,
      i % 2 === 0 ? "sedan" : "suv"
    )
);

// Logging the generated examples
// console.log("Generated UserPosts:", userPosts);
// console.log("Generated ShopPosts:", shopPosts);
// console.log("Generated Users:", users);
// console.log("Generated Shops:", shops);
// console.log("Generated Cars:", cars);

// Generate relations
const shopFollowersRelation = generateShopFollowersRelation(shops, users);
const postShopRelation = generatePostShopRelation(shopPosts);
const postUserRelation = generatePostUserRelation(userPosts);
const carUserRelation = generateCarUserRelation(cars, users);

// Output relations
// console.log("Shop Followers Relation:", shopFollowersRelation);
// console.log("Post Shop Relation:", postShopRelation);
// console.log("Post User Relation:", postUserRelation);
// console.log("Car User Relation:", carUserRelation);

const relation: { [key: string]: any } = {
  shopFollowersRelation,
  postShopRelation,
  postUserRelation,
  carUserRelation,
};
const data: { [key: string]: object[] } = {
  userPosts,
  users,
  shopPosts,
  shops,
  cars,
};
export {
  data,
  relation,
  CarUserRelation,
  UserPostRelation,
  ShopPostRelation,
  ShopFollowersRelation,
};
