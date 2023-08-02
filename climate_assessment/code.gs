function createWebApp() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'climate assessment');
}

function addAnswersToSheet(answers) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('answers');
  var week = getWeek();
  answers.forEach(function(answer) {
    var questionText = answer[0];
    var sliderValue = answer[1];
    var rowValues = [week, questionText, sliderValue];
    sheet.appendRow(rowValues);
  });
}

function getQuestionsData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('questions');
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  return data.filter(function (item) {
    return item[6] == getWeek();
  });
}

function getWeek() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('variables');
  var range = sheet.getRange('A2:B2').getValues();
  return range[0][1];
}

function getWeekAndQuestionsData() {
  var week = getWeek();
  var questionsData = getQuestionsData();
  return { week: week, data: questionsData };
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('my app')
    .addItem('aplication test', 'createWebApp')
    .addToUi();
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}