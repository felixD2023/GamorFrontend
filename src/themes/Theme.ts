interface Theme {
	background1:string,
	background2:string,
	background3:string,
	selected:string,
	notSelected:string,
	text:string,
	highlight:string,
}


const lightTheme:Theme={
	background1:"rgb(241, 243, 244)",
	background2:"rgb(249, 251, 252)",
	background3:"rgb(255, 255, 255)",
	selected:"rgb(121, 32, 231)",
	notSelected:"rgb(162, 166, 171)",
	text:"rgb(0, 0, 0)",
	highlight:"rgb(225, 110, 49)",
	
}

const darkTheme:Theme={
	background1:"rgb(27, 32, 40)",
	background2:"rgb(34, 39, 46)",
	background3:"rgb(27, 32, 40)",
	selected:"rgb(243, 130, 72)",
	notSelected:"rgb(162, 166, 171)",
	text:"rgb(255, 255, 255)",
	highlight:"rgb(121, 31, 235)",
}

const Themes={
	light:lightTheme,
	dark:darkTheme,
}
export default Themes;
 





