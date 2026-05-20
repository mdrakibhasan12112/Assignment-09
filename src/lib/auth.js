import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { jwt } from 'better-auth/plugins';

const client = new MongoClient(process.env.MONGODB_URI);

async function initDB() {
  try {
    await client.connect();
    console.log('✅ Better Auth MongoDB Connected Successfully');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
  }
}

initDB();

const db = client.db('drive-fleet-car');

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge:30*24*60*60
  }
  },
  plugins: [
    jwt()
  ]

});

// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);
// import { betterAuth } from 'better-auth';
// import { MongoClient } from 'mongodb';
// import { mongodbAdapter } from 'better-auth/adapters/mongodb';

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db('drive-fleet-car');

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENTID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     },
//   },
// });
