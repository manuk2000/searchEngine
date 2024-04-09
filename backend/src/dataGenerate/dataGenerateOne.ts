// // UserPost class definition
// class UserPost {
//     constructor(public id: string, public name: string) {
//     }
// }
//
// // ShopPost class definition
// class ShopPost {
//     constructor(public id: string, public name: string) {
//     }
// }
//
// // User class definition
// export class User {
//     constructor(
//         public id: string,
//         public surname: string,
//         public lastname: string,
//         public age: number,
//         public email: string,
//         public idUserPost: 1
//     ) {
//     }
// }
//
// // Shop class definition
// export class Shop {
//     constructor(
//         public string: string,
//         public location: string,
//         public name: string,
//         public street: string,
//         public idShopPost: string,
//         public idsFollower: string[]
//     ) {
//     }
// }
//
// // Car class definition
// export class Car {
//     constructor(
//         public id: string,
//         public name: string,
//         public type: 'sedan' | 'suv',
//         public idUser: string
//     ) {
//     }
// }

//
// // Generate 10 examples for each class
// const userPosts: UserPost[] = Array.from({length: 10}, (_, i) => new UserPost(v1(), `UserPost ${i + 1}`));
// const shopPosts: ShopPost[] = Array.from({length: 10}, (_, i) => new ShopPost(v1(), `ShopPost ${i + 1}`));
// const users: User[] = Array.from({length: 10}, (_, i) => new User(v1(), `Surname ${i + 1}`, `Lastname ${i + 1}`, 20 + i, `user${i + 1}@example.com`, v1()));
// const shops: Shop[] = Array.from({length: 10}, (_, i) => new Shop(v1(), `Location ${i + 1}`, `Shop ${i + 1}`, `Street ${i + 1}`, v1(), [users[i].string]));
// const cars: Car[] = Array.from({length: 10}, (_, i) => new Car(v1(), `Car ${i + 1}`, i % 2 === 0 ? 'sedan' : 'suv', users[i].string));
//
// // Logging the generated examples
// // console.log('Generated UserPosts:', userPosts);
// // console.log('Generated ShopPosts:', shopPosts);
// // console.log('Generated Users:', JSON.stringify(users[0]));
// // console.log('Generated Shops:', shops);
// // console.log('Generated Cars:', cars);
//
//

// Arrays of common names and surnames
let names = [
  "Aaran",
  "Aarez",
  "Aaron",
  "Aarron",
  "Aaryn",
  "Aazaan",
  "Abbas",
  "Abdalroof",
  "Abdirahman",
  "Abdul",
  "Abdulbasir",
  "Abdulkarem",
  "Abdullah",
  "Abdulmalik",
  "Abdur",
  "Abdur-Rahman",
  "Abel",
  "Abhisumant",
  "Abir",
  "Abu",
  "Ace",
  "Adam",
  "Addison",
  "Adegbola",
  "Aden",
  "Adie",
  "Aditya",
  "Adrian",
  "Aedan",
  "Aedyn",
  "Afonso",
  "Ahmed",
  "Ahoua",
  "Aiadan",
  "Aiden",
  "Aiden-Vee",
  "Aidy",
  "Aiman",
  "Ainslie",
  "Airidas",
  "AJ",
  "A-Jay",
  "Akan",
  "Al",
  "Alan",
  "Alasdair",
  "Alber",
  "Albie",
  "Alec",
  "Aleem",
  "Aleksander",
  "Aleksandrs",
  "Alessandro",
  "Alex",
  "Alexei",
  "Alexzander",
  "Alfee",
  "Alfred",
  "Alhaji",
  "Ali",
  "Alieu",
  "Alisdair",
  "Alistair",
  "Alister",
  "Allan",
  "Allen",
  "Allister",
  "Alphonse",
  "Alum",
  "Alvin",
  "Amaan",
  "Amani",
  "Ameer",
  "Ami",
  "Amir",
  "Ammar",
  "Amolpreet",
  "Amrinder",
  "Amro",
  "Andrea",
  "Andrei",
  "Andrew",
  "Anees",
  "Angel",
  "Angus",
  "Anis",
  "Anmolpreet",
  "Anndra",
  "Anthony",
  "Antoine",
  "Antoni",
  "Antony",
  "Anubhav",
  "Aon",
  "Apisai",
  "Aran",
  "Arann",
  "Arayan",
  "Archie",
  "Ardal",
  "Areeb",
  "Aref",
  "Argyle",
  "Ari",
  "Arian",
  "Arien",
  "Arjun",
  "Arlo",
  "Armand",
  "Armando",
  "Arman",
  "Armstrong",
  "Arnold",
  "Aron",
  "Arrash",
  "Arthur",
  "Arturo",
  "Arun",
  "Arvind",
  "Asa",
  "Asad",
  "Ash",
  "Ashan",
  "Ashanti",
  "Asher",
  "Ashley",
  "Ashraf",
  " Ashton",
  "Ashwin",
  "Asi",
  "Asif",
  "Askari",
  "Aslam",
  "Aston",
  "Ateeb",
  "Atharv",
  "Aubrey",
  "August",
  "Austin",
  "Avi",
  "Avinash",
  "Avishai",
  "Avon",
  "Axel",
  "Ayaan",
  "Ayah",
  "Ayden",
  "Aydin",
  "Ayham",
  "Ayo",
  "Ayub",
  "Aziz",
  "Azlan",
  "Zayn",
  "Zeb",
  "Zebedee",
  "Zebulon",
  "Zeev",
  "Zeke",
  "Zephaniah",
  "Zephyr",
  "Ziad",
  "Zlatan",
  "Zoe",
  "Zoltan",
];
let surnames: string[] = [
  "Abbott",
  "Acevedo",
  "Acosta",
  "Adams",
  "Adkins",
  "Aguilar",
  "Aguirre",
  "Albert",
  "Alexander",
  "Alford",
  "Allen",
  "Allison",
  "Alston",
  "Alvarado",
  "Alvarez",
  "Anderson",
  "Andrews",
  "Anthony",
  "Armstrong",
  "Arnold",
  "Ashley",
  "Atkins",
  "Atkinson",
  "Austin",
  "Avery",
  "Avila",
  "Ayala",
  "Ayers",
  "Bailey",
  "Baird",
  "Baker",
  "Baldwin",
  "Ball",
  "Ballard",
  "Banks",
  "Barber",
  "Barker",
  "Barlow",
  "Barnes",
  "Barnett",
  "Barr",
  "Barrera",
  "Barrett",
  "Barron",
  "Barry",
  "Bartlett",
  "Barton",
  "Bass",
  "Bates",
  "Battle",
  "Bauer",
  "Baxter",
  "Beach",
  "Bean",
  "Beard",
  "Beasley",
  "Beck",
  "Becker",
  "Bell",
  "Bender",
  "Benjamin",
  "Bennett",
  "Benson",
  "Bentley",
  "Benton",
  "Berg",
  "Berger",
  "Bernard",
  "Berry",
  "Best",
  "Bird",
  "Bishop",
  "Black",
  "Blackburn",
  "Blackwell",
  "Blair",
  "Blake",
  "Blanchard",
  "Blankenship",
  "Blevins",
  "Bolton",
  "Bond",
  "Bonner",
  "Booker",
  "Boone",
  "Booth",
  "Bowen",
  "Bowers",
  "Bowman",
  "Boyd",
  "Boyer",
  "Boyle",
  "Bradford",
  "Bradley",
  "Bradshaw",
  "Brady",
  "Branch",
  "Bray",
  "Brennan",
  "Brewer",
  "Bridges",
  "Briggs",
];

// names = [
//     "Emma", "Olivia", "Ava", "Isabella", "Sophia",
//     "Liam", "Noah", "Oliver", "Elijah", "James",
//     "William", "Benjamin", "Lucas", "Henry", "Alexander",
//     "Amelia", "Mia", "Harper", "Evelyn", "Charlotte",
//     "Michael", "Daniel", "Matthew", "David", "Joseph",
//     "Jackson", "Samuel", "Sebastian", "Jack", "Ethan",
//     "Grace", "Emily", "Chloe", "Lily", "Zoe",
//     "Ella", "Avery", "Sofia", "Scarlett", "Madison",
//     "Lucy", "Aria", "Aubrey", "Emma", "Layla",
//     "Henry", "Owen", "Carter", "Leo", "Theodore"
// ];
//
// surnames = [
//     "Smith", "Johnson", "Williams", "Brown", "Jones",
//     "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
//     "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
//     "Thomas", "Taylor", "Moore", "Jackson", "Martin",
//     "Lee", "Perez", "Thompson", "White", "Harris",
//     "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
//     "Walker", "Young", "Allen", "King", "Wright",
//     "Scott", "Torres", "Nguyen", "Hill", "Flores",
//     "Green", "Adams", "Nelson", "Baker", "Hall",
//     "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
// ];
// Define the User class
class User {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public age: number,
    public email: string
  ) {}
}

// Example arrays of names and surnames
names = ["John", "Emma", "Michael", "Sophia", "William"];
surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];

// Generate users
const users: User[] = [];
const maxLength = Math.min(surnames.length, names.length);
for (let i = 0; i < maxLength; i++) {
  const nameIndex = i; // Randomly select a name
  const surnameIndex = i; // Randomly select a surname

  const user = new User(
    `${i}`,
    names[nameIndex], // Assign a randomly selected name
    surnames[surnameIndex], // Assign a randomly selected surname
    20 + i, // Age incremented for each user
    `${names[nameIndex].toLowerCase()}${surnames[
      surnameIndex
    ].toLowerCase()}@example.com`
  );
  users.push(user);
}

// Log the generated users
console.log(users);

// Export the users array and the User class
export { users, User };
