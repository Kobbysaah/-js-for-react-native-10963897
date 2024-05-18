function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index],
        };
    });
}
//example usage
const originalNames = ["Alice", "Bob", "Charlie", "David", "Eve","able"];
const modifiedNames = formattedStrings;
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
