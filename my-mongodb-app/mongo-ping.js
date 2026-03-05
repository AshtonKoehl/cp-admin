const { MongoClient } = require("mongodb");
require("dotenv").config({ path: ".env.local" });

(async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("✅ MongoDB ping OK");
    await client.close();
  } catch (e) {
    console.error("❌ MongoDB ping failed:");
    console.error(e?.message || e);
    process.exit(1);
  }
})();