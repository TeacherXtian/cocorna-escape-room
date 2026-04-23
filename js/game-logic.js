// game-logic.js

// Define the game missions and exercises
const missions = [
    {
        id: 1,
        title: "Find the Key",
        description: "Locate the hidden key in the room to unlock the next level.",
        successMessage: "Congratulations! You've found the key.",
        failureMessage: "Sorry, the key is not here. Try again!"
    },
    {
        id: 2,
        title: "Solve the Riddle",
        description: "Answer the riddle correctly to progress.",
        riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "Echo",
        successMessage: "Correct! You've solved the riddle.",
        failureMessage: "That's not the answer. Please try again!"
    }
];

// Function to check mission success
function checkMission(missionId, userInput) {
    const mission = missions.find(m => m.id === missionId);
    if (mission) {
        if (userInput === mission.answer) {
            return mission.successMessage;
        } else {
            return mission.failureMessage;
        }
    }
    return "Mission not found.";
}

// Export the missions and check function for use in other parts of the game
export { missions, checkMission };