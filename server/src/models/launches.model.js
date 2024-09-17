const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  launchDate: new Date(),
  mission: "Kepler-b Exploration",
  rocket: "Explorer IS1",
  target: "Kepler-1652 b",
  customers: ["ZTM", "NASA", "NOAA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      customers: ["ZTM", "NASA", "NOAA"],
      upcoming: true,
      success: true,
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
