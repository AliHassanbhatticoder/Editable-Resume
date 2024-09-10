// TypeScript function to handle content editing
function handleEditableContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function () {
            var newValue = element.innerText;
            console.log("Updated content: ".concat(newValue));
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}
//  function to toggle visibility of skills section
function toggleVisibility(buttonId, sectionId) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', function () {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            }
            else {
                section.style.display = 'none';
            }
        });
    }
}
// Initialize functions on page load
document.addEventListener('DOMContentLoaded', function () {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});
// Get the profile image container and file input elements
var profileImageContainer = document.querySelector('.profile-container');
var uploadImageInput = document.getElementById('uploadImage');
var profileImage = document.getElementById('profileImage');
// Ensure the elements exist before adding event listeners
if (profileImageContainer && uploadImageInput && profileImage) {
    // Handle the image container click to trigger the file input
    profileImageContainer.addEventListener('click', function () {
        uploadImageInput.click();
    });
    // Handle the file input change to update the profile image
    uploadImageInput.addEventListener('change', function (event) {
        var target = event.target;
        var file = target.files ? target.files[0] : null;
        // Check if a file is selected
        if (file) {
            var reader = new FileReader();
            // Once the file is read, update the profile image source
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result;
                }
            };
            // Read the file as a Data URL to display it as an image
            reader.readAsDataURL(file);
        }
    });
}
