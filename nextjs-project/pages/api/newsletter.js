import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    const client = await MongoClient.connect(
      'mongodb+srv://priscilla:placeshaker@cluster0.qujgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    console.log(client);
    const db = client.db();
    await db.collection('emails').insertOne({ email: userEmail });

    client.close(); // déconnexion de la DB

    res.status(201).json({ message: "Signed up!" });
  }
}
export default handler;
