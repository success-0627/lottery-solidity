import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'routes';

export default function Header() {
	return (
		<Menu style={{ marginTop: '10px' }}>
			<Link route="/">
				<a className="item">My Test</a>
			</Link>

			<Menu.Menu position="right">
				<Link route="/lottery">
					<a className="item">Lottery</a>
				</Link>
				<Link route="/campaigns">
					<a className="item">Campaigns</a>
				</Link>

				<Link route="/campaigns/new">
					<a className="item">+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};
