const launches = new Map();

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

module.exports = {
  getAllLaunches,
};
