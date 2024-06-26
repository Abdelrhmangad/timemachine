const periods = [
    { start: "19-06-2024 08:00:14", end: "19-06-2024 11:00:14" },
    { start: "19-06-2024 11:20:14", end: "19-06-2024 14:45:14" },
    { start: "20-06-2024 07:55:14", end: "20-06-2024 10:55:14" },
    { start: "20-06-2024 11:00:14", end: "20-06-2024 14:55:14" },
    { start: "21-06-2024 08:55:14", end: "21-06-2024 11:55:14" },
    { start: "21-06-2024 12:55:14", end: "21-06-2024 14:55:14" }
]

var groups = new vis.DataSet();
var items = new vis.DataSet();

for (var i = 0; i < periods.length; i++) {
    const eachPeriod = periods[i];
    const start = eachPeriod.start;
    const end = eachPeriod.end;

    const groupsArr = groups.get()

    if (!hasGroupWithId(groupsArr, formatDateToBeReadable(new Date(switchDayMonth(start))))) {
        groups.add({
            id: formatDateToBeReadable(new Date(switchDayMonth(start))),
        });
    }

    items.add({
        id: i + formatDateToBeReadable(new Date(switchDayMonth(start))),
        group: formatDateToBeReadable(new Date(switchDayMonth(start))),
        content: `${formatDateToBeReadable(new Date(switchDayMonth(start)))} | ${getHoursAndMinutes(new Date(switchDayMonth(start)))} - ${getHoursAndMinutes(new Date(switchDayMonth(end)))}`,
        start: makeDateForChart(start),
        end: makeDateForChart(end),
    });
}

// create a dataset with items
// note that months are zero-based in the JavaScript Date object, so month 3 is April
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
