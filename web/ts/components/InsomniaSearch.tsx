/* eslint no-extra-parens: off */
/* eslint no-invalid-this: off */
import React, { useState } from "react";
import { InputField } from "photoncss/lib/react";
import SearchResults from "./SearchResults";

export type Props = { insomnia: Insomnia };

export default function InsomniaSearch({ insomnia }: Props): JSX.Element {
	const [ term, setTerm ] = useState("");

	setImmediate(function() {

		if (term === "") {
			$(".insomnia-search-results").hide();
		} else {
			$(".insomnia-search-results").show();
		}

		$(document).on("click", function(event) {
			const { target } = event;
			if ($(target).hasClass("insomnia-search-results")) return;
			if ($(target).parents()
				.hasClass("insomnia-search-results")) return;
			if ($(target).hasClass("insomnia-search")) return;
			if ($(target).parents()
				.hasClass("insomnia-search")) return;
			$(".insomnia-search-results").hide();
		});

		$(".insomnia-search")
			.children(".photon-input")
			.children("input")
			.on("focus", function() {
				if ($(this).val() === "") return;
				$(".insomnia-search-results").show();
			});

	});

	return (
		<div className="insomnia-search">
			<InputField prefix="search" type="text" variant="filled" placeholder="Search" onChange={ (event: InputEvent): void => setTerm((event.target as HTMLInputElement).value)}/>
			<SearchResults term={term} insomnia={insomnia}/>
		</div>
	);
}
