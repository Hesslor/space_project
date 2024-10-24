const launches = new Map();

const latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "kepler exploration x",
  exploration: "Explorer IS1",
  launchDate: new Date("December 12 2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launch.set(launch.latestFlightNumber, Object.assign(launch,{
    flightNumber: latestFlightNumber,
    customer: ["naaa", "idhum na"],
    success: true,
    upcoming: true,
  }));
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
