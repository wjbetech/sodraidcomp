function colorByClass(className: string): string {
  let color = "";
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