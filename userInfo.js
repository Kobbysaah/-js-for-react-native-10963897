// Importing the formatArrayStrings function
const { formatArrayStrings } = require('./yourOtherFile');

// Function to create user profiles
function createUserProfiles(namesArray, modifiedNamesArray) {
    // Check if the arrays have the same length
    if (namesArray.length !== modifiedNamesArray.length) {
        console.error("Arrays must have the same length.");
        return;
    }

    // Initialize an array to store user profiles
    var userProfiles = [];

    // Auto-incremented id starting from 1
    var idCounter = 1;

    // Loop through each name and its corresponding modified name
    for (var i = 0; i < namesArray.length; i++) {
        var originalName = namesArray[i];
        var modifiedName = modifiedNamesArray[i];

        // Create a user profile object with originalName, modifiedName, and id
        var userProfile = {
            originalName: originalName,
            modifiedName: modifiedName,
            id: idCounter++
        };

        // Push the user profile object into the array
        userProfiles.push(userProfile);
    }

    // Return the array of user profiles
    return userProfiles;
}

// Exporting the createUserProfiles function
module.exports = { createUserProfiles };
