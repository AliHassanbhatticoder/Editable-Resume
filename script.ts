 // TypeScript function to handle content editing
 function handleEditableContent(): void {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
        element.addEventListener('blur', function () {
            const newValue = (element as HTMLElement).innerText;
            console.log(`Updated content: ${newValue}`);
            // You can handle saving the updated content here (e.g., localStorage, API call)
        });
    });
}

//  function to toggle visibility of skills section
function toggleVisibility(buttonId: string, sectionId: string): void {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', () => {
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    handleEditableContent();
    toggleVisibility('toggleSkillsBtn', 'skillsSection');
    toggleVisibility('toggleExperienceBtn', 'experienceSection');
});





// Get the profile image container and file input elements
const profileImageContainer: HTMLElement | null = document.querySelector('.profile-container');
const uploadImageInput: HTMLInputElement | null = document.getElementById('uploadImage') as HTMLInputElement;
const profileImage: HTMLImageElement | null = document.getElementById('profileImage') as HTMLImageElement;

// Ensure the elements exist before adding event listeners
if (profileImageContainer && uploadImageInput && profileImage) {

    // Handle the image container click to trigger the file input
    profileImageContainer.addEventListener('click', () => {
        uploadImageInput.click();
    });

    // Handle the file input change to update the profile image
    uploadImageInput.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        const file: File | null = target.files ? target.files[0] : null;

        // Check if a file is selected
        if (file) {
            const reader: FileReader = new FileReader();

            // Once the file is read, update the profile image source
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result as string;
                }
            };

            // Read the file as a Data URL to display it as an image
            reader.readAsDataURL(file);
        }
    });
}