const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  Object.assign({}, driver, {[key]: value})
}
