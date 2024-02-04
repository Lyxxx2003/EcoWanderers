const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mode = "walking";

const coefficients = {
    driving: 0.709888,
    walking: 0.001,
    biking: 0.046120705,
    transit: 0.4285
};

async function getDistance(origin, destination) {
    let dist = null;
    let co2eExpended = null;

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&mode=${mode}&origin=${origin}&key=API_KEY`);
        const data = await response.json();

        // Set 'dist' equal to the specified distance text
        dist = data.routes[0].legs[0].distance.text;
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }

    return { distance: dist, co2eExpended };
}

function processUserInput() {
    rl.question('Enter origin: ', (pre_origin) => {
        rl.question('Enter destination: ', (pre_destination) => {
            let origin = pre_origin.replace(/\s+/g, '+');
            let destination = pre_destination.replace(/\s+/g, '+');

            // Call the async function and handle the result
            getDistance(origin, destination).then(({ distance, co2eExpended }) => {

                // Convert distance from string to number (remove " mi" suffix)
                const distanceValue = parseFloat(distance.replace(" mi", ""));

                // Use the appropriate coefficient based on the mode of transportation
                const coefficient = coefficients[mode] || 0;

                // Calculate CO2E saved (example formula, you may need to adjust based on your data)
                co2eExpended = distanceValue * coefficient;

                co2eSaved = (distanceValue * 0.709888) - co2eExpended;

                // points system
                points = 0;
                userPoints = parseInt(points);
                if (co2eSaved / co2eExpended == 0) {
                    userPoints = userPoints + 0;
                } else if (co2eSaved / co2eExpended > 0 && co2eSaved / co2eExpended < 0.5) {
                    userPoints = userPoints + 10;
                } else if (co2eSaved / co2eExpended >= 0.5 && co2eSaved / co2eExpended < 1.5) {
                    userPoints = userPoints + 20;
                } else if (co2eSaved / co2eExpended >= 1.5) {
                    userPoints = userPoints + 30;
                }

                // 'distance' and 'co2eSaved' now contain the distance and CO2E values
                console.log("Distance Value(miles):", distance);
                console.log("CO2E(lbs) Expended:", co2eExpended);
                console.log("CO2E(lbs) Saved: ", co2eSaved);
                console.log("Points Earned: ", userPoints);

                rl.close()
            });
        });
    });
}

// Start the process by asking for user input
processUserInput();

