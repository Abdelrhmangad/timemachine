function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day}.${month}.${year}`;
}

function getHoursAndMinutes(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes}`
}


var groups = new vis.DataSet([
    { id: formatDate(new Date(2024, 5, 24, 8, 30, 0)), content: `${formatDate(new Date(2024, 5, 24, 8, 30, 0))}`, value: formatDate(new Date(2024, 5, 24, 8, 30, 0)) },
    { id: formatDate(new Date(2024, 5, 23, 8, 30, 0)), content: `${formatDate(new Date(2024, 5, 23, 8, 30, 0))}`, value: formatDate(new Date(2024, 5, 23, 8, 30, 0)) },
    { id: formatDate(new Date(2024, 5, 22, 8, 30, 0)), content: `${formatDate(new Date(2024, 5, 22, 8, 30, 0))}`, value: formatDate(new Date(2024, 5, 22, 8, 30, 0)) },
    { id: formatDate(new Date(2024, 5, 21, 8, 30, 0)), content: `${formatDate(new Date(2024, 5, 21, 8, 30, 0))}`, value: formatDate(new Date(2024, 5, 21, 8, 30, 0)) },
    { id: formatDate(new Date(2024, 5, 20, 8, 30, 0)), content: `${formatDate(new Date(2024, 5, 20, 8, 30, 0))}`, value: formatDate(new Date(2024, 5, 20, 8, 30, 0)) },
]);

// create a dataset with items
// note that months are zero-based in the JavaScript Date object, so month 3 is April
var items = new vis.DataSet([
    {
        id: 0,
        group: formatDate(new Date(2024, 5, 24, 8, 30, 0)),
        content: "item 0",
        title: `${formatDate(new Date(2024, 5, 24, 8, 30, 0))} | ${getHoursAndMinutes(new Date(2024, 5, 24, 8, 30, 0), true)} - ${getHoursAndMinutes(new Date(2024, 5, 24, 12, 30, 0), true)}`,
        start: new Date(2024, 5, 20, 8, 30, 0),
        end: new Date(2024, 5, 20, 12, 30, 0),
    },
    {
        id: 1,
        group: formatDate(new Date(2024, 5, 23, 8, 30, 0)),
        content: "item 1",
        title: `${formatDate(new Date(2024, 5, 23, 8, 30, 0))} | ${getHoursAndMinutes(new Date(2024, 5, 24, 8, 30, 0), true)} - ${getHoursAndMinutes(new Date(2024, 5, 24, 12, 30, 0), true)}`,
        start: new Date(2024, 5, 20, 8, 30, 0),
        end: new Date(2024, 5, 20, 12, 30, 0),
    },
    {
        id: 2,
        group: formatDate(new Date(2024, 5, 22, 8, 30, 0)),
        content: "item 2",
        title: `${formatDate(new Date(2024, 5, 22, 8, 30, 0))} | ${getHoursAndMinutes(new Date(2024, 5, 24, 8, 30, 0), true)} - ${getHoursAndMinutes(new Date(2024, 5, 24, 12, 30, 0), true)}`,
        start: new Date(2024, 5, 20, 8, 30, 0),
        end: new Date(2024, 5, 20, 12, 30, 0),
    },
    {
        id: 3,
        group: formatDate(new Date(2024, 5, 21, 8, 30, 0)),
        content: "item 3",
        title: `${formatDate(new Date(2024, 5, 21, 8, 30, 0))} | ${getHoursAndMinutes(new Date(2024, 5, 24, 8, 30, 0), true)} - ${getHoursAndMinutes(new Date(2024, 5, 24, 12, 30, 0), true)}`,
        start: new Date(2024, 5, 20, 8, 30, 0),
        end: new Date(2024, 5, 20, 12, 30, 0),
    },
    {
        id: 4,
        group: formatDate(new Date(2024, 5, 20, 8, 30, 0)),
        content: "item 4",
        title: `${formatDate(new Date(2024, 5, 20, 8, 30, 0))} | ${getHoursAndMinutes(new Date(2024, 5, 24, 8, 30, 0), true)} - ${getHoursAndMinutes(new Date(2024, 5, 24, 12, 30, 0), true)}`,
        start: new Date(2024, 5, 20, 8, 30, 0),
        end: new Date(2024, 5, 20, 12, 30, 0),
    }
]);

// create visualization
var container = document.getElementById("visualization");
var options = {
    groupOrder: function (a, b) {
        return a.value - b.value;
    },
    showMinorLabels: true,
    showMajorLabels:false,
    orientation: "bottom",
    showWeekScale: false,
    showTooltips: true,
    tooltip: {
        followMouse: true,
        delay: 100,
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
