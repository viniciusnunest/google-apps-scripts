# Climate Assessment Web App

This project is a web application that allows users to respond to a weekly climate assessment survey for identifying anomalies. It's built using Google Apps Script and integrates with Google Sheets to store questions and answers.

## Functionality

The application allows users to:
- View and answer the questions for the weekly climate assessment survey.
- See a thank-you message after submission.
- Respond to the survey only once per week.

## How to Use

### Example Spreadsheet

The example spreadsheet can be found [here](https://docs.google.com/spreadsheets/d/1AOoxccKuFSSjG7LkAamfs6BDTG8rOTFu6MnCgNamRQI/edit?usp=sharing).

### Link to the Application

The application can be accessed [here](https://script.google.com/macros/s/AKfycbxiCqE44oGjXdAPbzs6Sy12bnkwnowQhh6K56vU3SM-vNbqWF77Y-0OgdEr0-NVOQsJ/exec).

### Setup

1. **Clone the repository**: Clone the source code from the Git repository.

2. **Configure the spreadsheet**: Ensure that you have a Google Sheets spreadsheet with the correct tabs and with the proper permissions. The spreadsheet should have the following tabs:
   - `questions`: Contains the survey questions.
   - `answers`: Stores the submitted answers.
   - `variables`: Contains variables like the current week's number.

3. **Publish the application**: Open the Google Apps Script editor and publish the application as a web app.

4. **Use the application**: Open the link provided after publishing to use the application.

## Code Structure

The code is divided into two main parts:

### Google Apps Script (gs code)

Responsible for server logic, including:
- Creating the user interface (UI).
- Handling data for survey questions and answers in the spreadsheet.
- Controlling which survey week is active.

### HTML and JavaScript (HTML code)

Responsible for the user interface, including:
- Displaying the survey questions.
- Handling the submission of answers.
- Displaying the thank-you message after submission.

## Contributing

If you have any suggestions or find any issues, please feel free to open an Issue or submit a Pull Request.