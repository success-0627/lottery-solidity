import React from "react";
import Link from 'next/link'

export default () => {
	return (<ul>
		<li>
			<Link href="/lottery">
				<a>Lottery</a>
			</Link>
		</li>
		<li>
			<Link href="/campaign">
				<a>Campaign</a>
			</Link>
		</li>
	</ul>);
};