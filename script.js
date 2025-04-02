function calculateFeedSetting() {
    // Get the values entered by the user
    const feed = parseFloat(document.getElementById("feed").value);
    const output = parseFloat(document.getElementById("output").value);

    // Check if the values are valid numbers
    if (isNaN(feed) || isNaN(output) || feed === 0) {
        document.getElementById("result").textContent = "Please enter valid numbers for Feed and Output!";
        return;
    }

    // Calculate Feed Setting using the corrected formula
    const feedSetting = (30.54 - (0.085 * output/feed))* 0.853;

    // Display the result
    document.getElementById("result").textContent = "Feed Setting: " + feedSetting.toFixed(2);
}
