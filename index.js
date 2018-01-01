// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver)=> console.log(driver.name))
}

//logs the name of each driver whose hometown matches the passed-in argument
function logDriversByHometown(drivers, hometown) {
  drivers.forEach((currentDriver)=> {
    if (currentDriver.hometown === hometown){
      console.log(currentDriver.name)
    }
  })
}

//uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
function driversByRevenue(drivers) {
  let driversRevenue = [];

  drivers.forEach((driver)=> {
    driversRevenue.push(driver)
  })

  driversRevenue.sort((a, b)=> a.revenue - b.revenue);
  return driversRevenue
}

// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)
function driversByName(drivers) {
  let driversName = [];

  drivers.forEach((driver) => {
    driversName.push(driver)
  });

  driversName.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });

  return driversName
}

//uses the reduce() method to sum the revenue of every driver and return the total
function totalRevenue(drivers) {
  let driversRevenue = [];

  drivers.forEach((driver)=> {
    driversRevenue.push(driver)
  })

  let reduceRevenue = driversRevenue.reduce(function(sum, driver) {
    return sum + driver.revenue;
  }, 0);

  return (reduceRevenue)

}

//calculates the average revenue across all drivers
function averageRevenue(drivers) {
  let driversAvgRevenue = [];

  drivers.forEach((driver)=> {
    driversAvgRevenue.push(driver)
  })

  let reduceRevenue = driversAvgRevenue.reduce(function(sum, driver) {
    return sum + driver.revenue;
  }, 0);

  return (reduceRevenue/driversAvgRevenue.length)

}
