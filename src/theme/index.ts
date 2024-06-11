const any = {
	primary: '#888278',
}

export const light = {
	background: '#F1ECE4',
	foreground: '#2D2B28',
	border: '#E3D9C9',
	dangerText: '#932338',
	dangerBg: '#fad7dd',
	successText: '#00864e',
	successBg: '#ccf6e4',
	...any,
}

export const dark = {
	background: '#2D2B28',
	foreground: '#F1ECE4',
	border: '#44413C',
	dangerText: '#ef7f93',
	dangerBg: '#2e0b11',
	successText: '#5ce2aa',
	successBg: '#002a18',
	...any,
}

export default { light, dark }
