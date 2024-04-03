type ClassName = "druid" | "mage" | "hunter" | "paladin" | "priest" | "rogue" | "shaman" | "warlock" | "warrior";

type ClassColor =
  | "#FF7C0A"
  | "#3FC7EB"
  | "#AAD372"
  | "#F48CBA"
  | "#FFFFFF"
  | "#FFF468"
  | "#0070DD"
  | "#8788EE"
  | "#C69B6D";

function colorByClass(className: ClassName): ClassColor {
  let color: ClassColor;
  switch (className) {
    case "druid":
      color = "#FF7C0A";
      break;
    case "mage":
      color = "#3FC7EB";
      break;
    case "hunter":
      color = "#AAD372";
      break;
    case "paladin":
      color = "#F48CBA";
      break;
    case "priest":
      color = "#FFFFFF";
      break;
    case "rogue":
      color = "#FFF468";
      break;
    case "shaman":
      color = "#0070DD";
      break;
    case "warlock":
      color = "#8788EE";
      break;
    case "warrior":
      color = "#C69B6D";
      break;
  }
  return color;
}

export default colorByClass;
