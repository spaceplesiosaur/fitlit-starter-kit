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
    let userStepsByDate = this.activityData.find(data => id === data.userID && date === data.date);
    return parseFloat(((userStepsByDate.numSteps * userRepo.strideLength)/5280).toFixed(1));
  }
  getActiveMinutesByDate(id, date) {
    let userActivityByDate = this.activityData.find(data => id === data.userID && date === data.date);
    return userActivityByDate.minutesActive;
  }
  calculateActiveAverageForWeek(id, date, userRepo) {
    // let weekFromDate = userRepo.getWeekFromDate(date, id, this.activityData);
    // let totalActiveMinutes = weekFromDate.reduce((acc, elem) => {
    //   return acc += elem.minutesActive;
    // }, 0)/7;
    // return parseFloat((totalActiveMinutes).toFixed(1));
    return parseFloat((userRepo.getWeekFromDate(date, id, this.activityData).reduce((acc, elem) => {
      return acc += elem.minutesActive;
    }, 0)/7).toFixed(1));
  }
  accomplishStepGoal(id, date, userRepo) {
    let userStepsByDate = this.activityData.find(data => id === data.userID && date === data.date);
    if (userStepsByDate.numSteps === userRepo.dailyStepGoal) {
      return true;
    }
    return false
  }
  getDaysGoalExceeded(id, userRepo) {
    return this.activityData.filter(data => id === data.userID && data.numSteps > userRepo.dailyStepGoal).map(data => data.date);
  }
  getStairRecord(id) {
    return this.activityData.filter(data => id === data.userID).reduce((acc, elem) => (elem.flightsOfStairs > acc) ? elem.flightsOfStairs : acc, 0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
