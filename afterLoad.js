function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function getTotalTimeForAllGroups(group) {
    let totalMinutes = 0;
    items.forEach(item => {
        if (item.group === group.groupId) {
            const start = new Date(item.start);
            const end = new Date(item.end);
            const durationMs = end - start;
            totalMinutes += durationMs / (1000 * 60);
        }
    });
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    const totalTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return totalTime;
}

const allGroups = Array.from(document.getElementsByClassName('vis-group')).map(each => {
    if (each['vis-group'] !== undefined) {
        const element = each;
        const elementData = each['vis-group'];
        const time = getTotalTimeForAllGroups(elementData)
        const generated = createElementFromHTML(`<div class="total-hours">
                ${time}
            </div>`);
        element.appendChild(generated)
        // Append the totalAmountElement to the body
    }
});


