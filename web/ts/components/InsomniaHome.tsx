import React from "react";
import { TextIcon } from "photoncss/lib/react";

export default function InsomniaItem(): JSX.Element {

	return (
		<div style={{ textAlign: "center", padding: "35vh 0" }}>
			<h1>
				<TextIcon style={{
					fontSize: 128,
					height: 128,
					width: 128,
					userSelect: "none",
					opacity: 0.34
				}} variant="round">description</TextIcon>
			</h1>

			<br/>

			<h2>Select any request to view documentation.</h2>
		</div>
	);
}
