function calculateFeedSetting() {
    // Get the values entered by the user
    const feed = parseFloat(document.getElementById("feed").value);
    const output = parseFloat(document.getElementById("output").value);

    // Check if the values are valid numbers
    if (isNaN(feed) || isNaN(output)) {
        document.getElementById("result").textContent = "Please enter valid numbers for Feed and Output!";
        return;
    }

    // Calculate Feed Setting using the formula: (23.74 + (139.98 * feed) - (1.52 * output))
    const feedSetting = (23.74 + (139.98 * feed) - (1.52 * output));

    // Display the result
    document.getElementById("result").textContent = "Feed Setting: " + feedSetting.toFixed(2);
}
