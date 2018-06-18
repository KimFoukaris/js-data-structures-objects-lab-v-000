const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {};
  newDriver = {...driver, {key: value}};
  return newDriver;
}
