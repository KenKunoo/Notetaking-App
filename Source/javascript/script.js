//@ts-check
window.addEventListener('DOMContentLoaded', init);

// the init function will wait for all the dom content to load before running any javascript, so we include all our javascript inside the function
function init() {
    let newFeedbackButton = document.getElementById('newFeedback'); // this button triggers the dialog box
    let saveButton = document.getElementById('saveButton'); // this button is used inside the dialog box
    let dialog = document.querySelector('dialog'); // this element is the dialog box itself
    let cancelButton = document.getElementById('cancelButton'); // this button is used inside the dialog box
    let firstRow = null; // this is the first row of the table
    let currentRow = null; // this is the row that is currently selected and is under work 
    let viewFeedbackButton = document.getElementById('viewFeedback'); // element for view feedback button show trigger the feedbacks dialog box to open
    let viewFeedbackDialog = document.getElementById('feedbackListTable'); //this dialog box will be triggered by view feedbacks button and
    let closeFeedbackDialog = document.getElementById('closeButton'); // close the feedbacks dialog box
    let confirmationMessage = document.getElementById('confirmationMessage'); // just a confirmation meessage to assure the user that the input has been saved. the feedback can be seen by clicking view feedback button

    //when the newFeedbackButton is clicked, th dialog box should open
    newFeedbackButton.addEventListener('click', () => {
        if (typeof dialog.showModal === "function") { // check if the dialog is already open or not
            dialog.showModal(); // open the dialog box
        }
    });

    // when the cancelButton inside the dialog box is clicked, the dialog box should close
    cancelButton.addEventListener('click', () => {
        dialog.close();
    });

    //when save button is clicked, the class name, date and feedback needs to be saved and ready to be shown
    saveButton.addEventListener('click', () => {
        let dialogInput = {};
        dialogInput.className = document.getElementById("title").value;
        dialogInput.date = document.getElementById("date").value;
        dialogInput.feedBack = document.querySelector("textarea").value;

        if (firstRow == null) {
            let table = document.getElementById("feedbackList").getElementsByTagName('tbody')[0];
            let newRow = table.insertRow(table.length);
            let cell1 = newRow.insertCell(0);
            cell1.innerHTML = dialogInput.className;
            let cell2 = newRow.insertCell(1);
            cell2.innerHTML = dialogInput.date;
            let cell3 = newRow.insertCell(2);
            cell3.innerHTML = dialogInput.feedBack;
        } else {
            currentRow.cells[0].innerHTML = dialogInput.className;;
            currentRow.cells[1].innerHTML = dialogInput.date;
            currentRow.cells[2].innerHTML = dialogInput.feedBack;;
        }
        resetForm();
        console.log("saved");
        confirmationMessage.textContent = "Feedback saved!";
    });

    // after each save button click, the form needs to be cleared so for next new feedback it will be ready
    let resetForm = () => {
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.querySelector("textarea").value = "";
        currentRow = null;
    }

    // this will trigger the dialog box that has all the feedbacks so the user can see them
    viewFeedbackButton.addEventListener('click', () => {
        if (typeof viewFeedbackDialog.showModal === "function") { // check if the dialog is already open or not
            viewFeedbackDialog.showModal(); // open the dialog box
        }
    });

    // this will close the dialog box that has the feedbacks list
    closeFeedbackDialog.addEventListener('click', () => {
        viewFeedbackDialog.close();
    });


}