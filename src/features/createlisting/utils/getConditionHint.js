export default function getConditionHint(condition) {
  switch (condition?.toLowerCase()) {
    case "new":
      return "Unused, unopened, and in its original packaging";
    case "like new":
      return "Apparently untouched, in near perfect condition";
    case "very good":
      return "Used, but well cared for and in great condition";
    case "good":
      return "Shows wear from use, but remains in good condition";
    case "acceptable":
      return "The item is fairly worn, but works perfectly";
  }
}
