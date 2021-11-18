/* eslint-disable */
var utils = require("../../utils.sjs");

function getMark(date) {
  return getDate(date).getMonth() + 1;
}

var ROW_HEIGHT = 64;

function getDayStyle(type, index, date, rowHeight, color, firstDayOfWeek) {
  var style = [];
  var current = getDate(date).getDay() || 7;
  var offset = current < firstDayOfWeek ? 7 - firstDayOfWeek + current : current === 7 && firstDayOfWeek === 0 ? 0 : current - firstDayOfWeek;

  if (index === 0) {
    style.push(['margin-left', 100 * offset / 7 + '%']);
  }

  if (rowHeight !== ROW_HEIGHT) {
    style.push(['height', rowHeight + 'px']);
  }

  if (color) {
    if (type === 'start' || type === 'end' || type === 'start-end' || type === 'multiple-selected' || type === 'multiple-middle') {
      style.push(['background', color]);
    } else if (type === 'middle') {
      style.push(['color', color]);
    }
  }

  return style.map(function (item) {
    return item.join(':');
  }).join(';');
}

function formatMonthTitle(date) {
  date = getDate(date);
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
}

function getMonthStyle(visible, date, rowHeight) {
  if (!visible) {
    date = getDate(date);
    var totalDay = utils.getMonthEndDay(date.getFullYear(), date.getMonth() + 1);
    var offset = getDate(date).getDay();
    var padding = Math.ceil((totalDay + offset) / 7) * rowHeight;
    return 'padding-bottom:' + padding + 'px';
  }
}

module.exports = {
  getMark: getMark,
  getDayStyle: getDayStyle,
  formatMonthTitle: formatMonthTitle,
  getMonthStyle: getMonthStyle
};