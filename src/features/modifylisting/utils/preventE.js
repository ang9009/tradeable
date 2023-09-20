// Adapted from some Stackoverflow post
function handleEPaste(e) {
  var clipboardData, pastedData;

  // Get pasted data via clipboard API
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData("Text").toUpperCase();

  if (pastedData.indexOf("E") > -1) {
    //alert('found an E');
    e.stopPropagation();
    e.preventDefault();
  }
}

const preventE = {
  onKeyDown: (e) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  },
  onPaste: (e) => handleEPaste(e),
  onWheel: (e) => e.target.blur(),
};

export default preventE;
