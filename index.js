// function hasWin(obj) {
//     if (obj.result === 'W') {
//         return true;
//     } else {
//         return false;
//     }
// }

// function superbowlWin(teamData) {
//     const win = teamData.find(hasWin);

//     if (win) {
//     return win.year;
//     } else {
//         return undefined;
//     }
// }

function superbowlWin(teamData) {
    const win = teamData.find(obj => obj.result === 'W');
    return win ? win.year : undefined;
}
