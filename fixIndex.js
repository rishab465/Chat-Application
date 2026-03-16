import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const fixIndex = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");

		const db = mongoose.connection.db;
		const collection = db.collection("users");

		// Drop the gmail_1 index
		await collection.dropIndex("gmail_1");
		console.log("✅ Successfully dropped gmail_1 index");

		// Also clear all users if needed
		await collection.deleteMany({});
		console.log("✅ Cleared all users");

		await mongoose.connection.close();
		console.log("Connection closed");
	} catch (error) {
		console.error("Error:", error.message);
		process.exit(1);
	}
};

fixIndex();
