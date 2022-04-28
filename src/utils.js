export function convertTime(timeStamp) {
  const now = Date.now();
  let nowYear = new Date(now).getFullYear();
  let nowMonth = new Date(now).getMonth() + 1;
  let nowDate = new Date(now).getDate();
  let nowHours = new Date(now).getHours();
  let nowMinutes = new Date(now).getMinutes();
  let nowSeconds = new Date(now).getSeconds();

  const itemTime = new Date(timeStamp * 1000);

  let itemYear = itemTime.getFullYear();
  let itemMonth = itemTime.getMonth() + 1;
  let itemDate = itemTime.getDate();
  let itemHours = itemTime.getHours();
  let itemMinutes = itemTime.getMinutes();
  let itemSeconds = itemTime.getSeconds();

  if (nowYear > itemYear) {
    return `${nowYear - itemYear} years ago`;
  } else if (nowMonth > itemMonth) {
    return `${nowMonth - itemMonth} month ago`;
  } else if (nowDate > itemDate) {
    return `${nowDate - itemDate} days ago`;
  } else if (nowHours > itemHours) {
    return `${nowHours - itemHours} hours ago`;
  } else if (nowMinutes > itemMinutes) {
    return `${nowMinutes - itemMinutes} minutes ago`;
  } else if (nowSeconds > itemSeconds) {
    return `${nowSeconds - itemSeconds} seconds ago`;
  }
}

export function showUrl(str) {
  let url = str.split("//");
  if (url[0] === "http:" || url[0] === "https:") {
    url.shift();
  }
  url = url[0].split("/")[0].split(".");
  url[0] === "www" && url.shift();
  url = url.join(".");
  return url;
}
