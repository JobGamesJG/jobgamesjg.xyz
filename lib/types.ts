export interface Project {
	title: string;
	image: string;
	description: string;
	buttons: {
		class: string;
		url: string;
		tooltip: string;
	}[];
}
