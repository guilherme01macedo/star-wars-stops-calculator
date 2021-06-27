function getStarships(state) {
  return (state.starships.starships || []).map(
    (starship) => ({
      ...starship,
      totalDuration: getDuration(starship, state.mglt),
      stops: getStops(starship, state.mglt),
    })
  );
}

function getDuration(starship, mglt) {
  if (starship.MGLT === "unknown") {
    return "unknown";
  }
  const totalHours = Math.floor(parseInt(mglt) / parseInt(starship.MGLT));
  if (totalHours > 24) {
    return `${Math.floor(totalHours / 24)} days`;
  }
  return `${totalHours} hours`;
}

function getStops(starship, mglt) {

  if (starship.consumables === "unknown" || starship.MGLT === "unknown" || mglt === null || !mglt) {
    return "unknown";
  }

  const dateType = starship.consumables.split(" ").pop();
  const dateValue = parseInt(starship.consumables.split(" ")[0]);

  const totalHours = parseInt(mglt) / parseInt(starship.MGLT);
  const totalDays = parseInt(totalHours) / 24;

  if (dateType === "week" || dateType === "weeks") {
    return Math.floor(totalDays / 7 / dateValue);
  }
  if (dateType === "month" || dateType === "months") {
    return Math.floor(totalDays / 30 / dateValue);
  }
  if (dateType === "year" || dateType === "years") {
    return Math.floor(totalDays / 365 / dateValue);
  }
  return "unknown";
}

const selectors = {
  getStarships,
};

export default selectors;
