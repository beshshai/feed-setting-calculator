function calculateFeedSetting() {
    // Get the values entered by the user
    const feed = parseFloat(document.getElementById("feed").value);
    const output = parseFloat(document.getElementById("output").value);

    // Check if the values are valid numbers
    if (isNaN(feed) || isNaN(output)) {
        document.getElementById("result").textContent = "Please enter valid numbers for Feed and Output!";
        return;
    }

  // Calculate Feed Setting using the formula: (30.54 - (0.17 * yarnCount / feed)) / 0.853
const feedSetting = (30.54 - (0.17 * yarnCount / feed)) / 0.853;

    // Display the result
    document.getElementById("result").textContent = "Feed Setting: " + feedSetting.toFixed(2);
}
