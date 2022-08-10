const db = require('../server/DataBase/index.js');
const {models: {User}} = require('../server/DataBase/models/User.js');
const userData = require('./userData.json');

async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
  
    // Creating Users
    const [cody, murphy, moe] = await Promise.all(
        userData.map((user) => User.create(user))
    );
    const users = [cody, murphy, moe];
  
    return {
      users
    };
};
  
/* We've separated the `seed` function from the `runSeed` function.
This way we can isolate the error handling and exit trapping.
The `seed` function is concerned only with modifying the database. */

async function runSeed() {
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        await db.close();
    }
}
  
/* Execute the `seed` function, IF we ran this module directly (`node seed`).
`Async` functions always return a promise, so we can use `catch` to handle
any errors that might occur inside of `seed`. */

if (module === require.main) {
    runSeed();
}
  
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
