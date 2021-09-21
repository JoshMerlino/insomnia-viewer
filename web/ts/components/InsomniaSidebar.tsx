import { Drawer, List } from "photoncss/lib/react";
import React, { useEffect } from "react";
import InsomniaItem from "./InsomniaItem";
import Photon from "photoncss";

export type Props = { resources: InsomniaResource[] };

export default function InsomniaSidebar({ resources }: Props): JSX.Element {

	useEffect(function() {
		const interval = setInterval(function() {
			if (window.innerWidth > 1280 && $(".modal-close-area").hasClass("active")) Photon.Drawer(".insomnia-drawer").close();
		});
		return function(): void {
			clearInterval(interval);
		};
	});

	const item = (item: InsomniaResource, key: number): JSX.Element =>
		<InsomniaItem item={item} key={key} resources={resources}/>;

	return (
		<>
			<List className="insomnia-sidebar only-large">{resources.filter(resource => resource._type === "request").map(item)}</List>
			<Drawer from="left" className="insomnia-drawer">{resources.filter(resource => resource._type === "request").map(item)}</Drawer>
		</>
	);
}
