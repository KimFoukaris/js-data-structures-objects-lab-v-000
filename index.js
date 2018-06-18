const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}
