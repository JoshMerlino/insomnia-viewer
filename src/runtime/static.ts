import express, { Express } from "express";
import path from "path";

export default function runtime(app: Express): void {

	// Serve static files from the last built server
	app.use(express.static("public_html", { extensions: [ "html" ] }));

	app.get("/insomnia.json", (_req, res) => res.sendFile(path.resolve("./insomnia.json")));

}
