export interface NavChildLink {
	label: string;
	href: string;
	comingSoon?: boolean; // Optional: only shown when needed
}

export interface NavDropdownLink {
	label: string;
	href: string;
	comingSoon?: boolean; // Optional: only shown when needed
	children?: NavChildLink[];
}

export interface NavLinkInterface {
	label: string;
	href: string;
	dropdown?: NavDropdownLink[];
}
