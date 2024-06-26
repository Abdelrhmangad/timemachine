const periodOneStartDate = "20-06-2024 07:55:14";
const periodOneEndDate = "20-06-2024 10:55:14";

const periodOneStartDate2 = "20-06-2024 11:00:14";
const periodOneEndDate2 = "20-06-2024 14:55:14";

const periodTwoStartDate = "21-06-2024 08:55:14";
const periodTwoEndDate = "21-06-2024 11:55:14";

var groups = new vis.DataSet([
    {
        id: formatDateToBeReadable(new Date(switchDayMonth(periodOneStartDate))),
    },
    {
        id: formatDateToBeReadable(new Date(switchDayMonth(periodTwoStartDate))),
    },
]);

// create a dataset with items
// note that months are zero-based in the JavaScript Date object, so month 3 is April
var items = new vis.DataSet([
    {
        id: 0,
        group: formatDateToBeReadable(new Date(switchDayMonth(periodOneStartDate))),
        content: `${formatDateToBeReadable(new Date(switchDayMonth(periodOneStartDate)))} | ${getHoursAndMinutes(new Date(switchDayMonth(periodOneStartDate)))} - ${getHoursAndMinutes(new Date(switchDayMonth(periodOneEndDate)))}`,
        start: makeDateForChart(periodOneStartDate),
        end: makeDateForChart(periodOneEndDate),
    },
    {
        id: 2,
        group: formatDateToBeReadable(new Date(switchDayMonth(periodOneStartDate2))),
        content: `${formatDateToBeReadable(new Date(switchDayMonth(periodOneStartDate2)))} | ${getHoursAndMinutes(new Date(switchDayMonth(periodOneStartDate2)))} - ${getHoursAndMinutes(new Date(switchDayMonth(periodOneEndDate2)))}`,
        start: makeDateForChart(periodOneStartDate2),
        end: makeDateForChart(periodOneEndDate2),
    },
    {
        id: 3,
        group: formatDateToBeReadable(new Date(switchDayMonth(periodTwoStartDate))),
        content: `${formatDateToBeReadable(new Date(switchDayMonth(periodTwoStartDate)))} | ${getHoursAndMinutes(new Date(switchDayMonth(periodTwoStartDate)))} - ${getHoursAndMinutes(new Date(switchDayMonth(periodTwoEndDate)))}`,
        start: makeDateForChart(periodTwoStartDate),
        end: makeDateForChart(periodTwoEndDate),
    },
]);

// ====================================================================================== create visualization
var container = document.getElementById("visualization");
var options = {
    showMinorLabels: true,
    showMajorLabels: false,
    stack: false,
    groupHeightMode: "fitItems",
    orientation: "bottom",
    showWeekScale: false,
    showTooltips: true,
    tooltip: {
        followMouse: true,
        delay: 100,
        template: getTooltipContent
    },
    selectable: false,
    showCurrentTime: true,
    timeAxis: { scale: 'hour', step: 1 },
    horizontalScroll: false,
    moveable: false,
    editable: false,
};

var timeline = new vis.Timeline(container);
timeline.setOptions(options);
timeline.setGroups(groups);
timeline.setItems(items);
