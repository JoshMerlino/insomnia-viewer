import App from "./components/App";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
import "photoncss/dist/photon.css";
import React from "react";
import { render } from "react-dom";
import "script-loader!jquery";
import "../../styles/main.less";
import app from "./app";

// Wait for the DOM to load before rendering
document.addEventListener("DOMContentLoaded", function() {

	// Append a container to the DOM to render content into
	const root = document.createElement("DIV");
	root.id = "root";
	document.body.append(root);

	// Render root component into react-root container
	render(<App/>, document.getElementById("root"));

});

// If is running in production
if (PRODUCTION) {

	// Register a static asset caching service-worker
	OfflinePluginRuntime.install();

	// Get client version
	/* eslint @typescript-eslint/no-var-requires: 0 */
	const client: string = require("raw-loader!../../../hash").default;

	// Get server version
	(function update(): void {

		fetch(`/hash?${Date.now()}`)
			.then(resp => resp.text())
			.then(server => {

				// Make sure client recieved a hash
				if (server.match(/([0-9]|[a-f]|[A-F]){8}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){4}-([0-9]|[a-f]|[A-F]){12}/gmi)) {

					// Update the client
					if (server !== client) app.update(server.substr(0, 8));

					// If there is no update available, retry in 60s
					else setTimeout(update, 60000);

				}

			});

	}());

}
