'use strict';
console.log('Ex1 - What`s in the picture?');

var opts1 = ['American staffordshire terrier (Amstaff)', 'American pit bull terrier', 'American bulldog']
var opts2 = ['Doberman pinscher', 'Cane corso', 'Rottweiler']
var opts3 = ['Bull terrier', 'Dogo argentino', 'Boxer']
var opts4 = ['American bulldog', 'English bulldog', 'French bulldog']
var gOpts = [opts1, opts2, opts3, opts4];
var gCorrOptIdx = [1, 2, 1, 0];
var gQuests = createQuests(4);
var gCurrQuestIdx = 0;

function initGame() {
    renderQuests();

}
function checkAnswer(optIdx) {
    var currQuest = gQuests[gCurrQuestIdx];
    var currImg = document.querySelector('img');
    if (optIdx === currQuest.correctOptIndex) {
        if (currQuest.id !== gQuests.length) {
            gCurrQuestIdx++
            currImg.src = `pictures/${currQuest.id + 1}.jpg`
            renderQuests()
            return true;
        }
        var restart = confirm('YOU WON THE GAME!! do you want to restart?')
        if (restart) resetGame();
    }
    return false;
}


function createQuests(count) {
    var quests = [];
    for (var i = 0; i < count; i++) {
        var question = {
            id: i + 1,
            opts: gOpts[i],
            correctOptIndex: gCorrOptIdx[i]
        }
        quests.push(question);
    }
    return quests;
}
function renderQuests() {
    var currQuest = gQuests[gCurrQuestIdx];
    var gameDiv = document.querySelector('.answers')
    var strHTML = ''
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHTML += `<div class="quest" data-id="${i + 1}" onclick="checkAnswer(${i})">${currQuest.opts[i]}</div>`
    }
    gameDiv.innerHTML = strHTML;
}

function resetGame() {
    var currImg = document.querySelector('img');
    currImg.src = `pictures/1.jpg`
    gCurrQuestIdx = 0;
    renderQuests();
}
