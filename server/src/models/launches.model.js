const launches = new Map();

const launch = {
  flightNumber: 100,
  launchDate: new Date(),
  mission: "Kepler-b Exploration",
  rocketType: "Explorer IS1",
  destination: "Kepler-1652 b",
  customer: ["ZTM", "NASA", "NOAA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
