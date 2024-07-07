type ClassName =
	| "Druid"
	| "Mage"
	| "Hunter"
	| "Paladin"
	| "Priest"
	| "Rogue"
	| "Shaman"
	| "Warlock"
	| "Warrior";

type ClassColor =
	| "rgba(255, 124, 10, 0.5)"
	| "rgba(63, 199, 235, 0.5)"
	| "rgba(170, 211, 114, 0.5)"
	| "rgba(244, 140, 186, 0.5)"
	| "rgba(255, 255, 255, 0.5)"
	| "rgba(255, 240, 0, 0.5)"
	| "rgba(0, 112, 221, 0.5)"
	| "rgba(135, 136, 238, 0.5)"
	| "rgba(198, 155, 109, 0.5)";

function colorByClass(className: ClassName): ClassColor {
	let color: ClassColor;
	switch (className) {
		case "Druid":
			color = "rgba(255, 124, 10, 0.5)";
			break;
		case "Mage":
			color = "rgba(63, 199, 235, 0.5)";
			break;
		case "Hunter":
			color = "rgba(170, 211, 114, 0.5)";
			break;
		case "Paladin":
			color = "rgba(244, 140, 186, 0.5)";
			break;
		case "Priest":
			color = "rgba(255, 255, 255, 0.5)";
			break;
		case "Rogue":
			color = "rgba(255, 240, 0, 0.5)";
			break;
		case "Shaman":
			color = "rgba(0, 112, 221, 0.5)";
			break;
		case "Warlock":
			color = "rgba(135, 136, 238, 0.5)";
			break;
		case "Warrior":
			color = "rgba(198, 155, 109, 0.5)";
			break;
	}
	return color;
}

export default colorByClass;
