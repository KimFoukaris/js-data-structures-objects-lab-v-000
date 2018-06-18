const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  newDriver = {...driver};
  delete newDriver.key;
  return newDriver;
}
