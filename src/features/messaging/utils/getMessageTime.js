function getLeadingZero(num) {
  if (num.toString().length === 1) {
    return "0" + num;
  }

  return num;
}

function getDateString(date) {
  return `${getLeadingZero(date.getDate())}/${getLeadingZero(
    date.getMonth() + 1
  )}`;
}

export default function getMessageTime(milliseconds) {
  const date = new Date(milliseconds);
  const currDate = new Date();
  let dateString = getDateString(date);
  const time = `${getLeadingZero(date.getHours())}:${getLeadingZero(
    date.getMinutes()
  )}`;

  if (dateString === getDateString(currDate)) {
    dateString = "today";
  }

  return dateString + " at " + time;
}
