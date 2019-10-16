// const data = require('../data/activity');
// const activityData = data.activityData;
// const scripts = require('./scripts');
//
// const User = require('../src/User');
//

class Activity {
  constructor(activityData) {
    this.activityData = activityData
  }
  getMilesFromStepsByDate(id, date, userRepo) {
    let userStepsByDate = this.activityData.find((data) => id === data.userID && date === data.date);
    return parseFloat(((userStepsByDate.numSteps * userRepo.strideLength)/5280).toFixed(1));
  }
  getActiveMinutesByDate() {
    
  }
  calculateActiveAverageForWeek() {

  }
  getDaysGoalExceeded() {

  }
  getUserDataByID() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
