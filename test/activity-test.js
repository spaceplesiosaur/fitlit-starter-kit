const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const User = require('../src/User');
const UserRepo = require('../src/User-repo');

describe('Activity', function() {
  beforeEach(function() {
    let activityData = [
      {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 4,
      "date": "2019/06/15",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 5,
      "date": "2019/06/15",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 6,
      "date": "2019/06/15",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 7,
      "date": "2019/06/15",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 8,
      "date": "2019/06/15",
      "numSteps": 10333,
      "minutesActive": 114,
      "flightsOfStairs": 31
    },
    {
      "userID": 9,
      "date": "2019/06/15",
      "numSteps": 6389,
      "minutesActive": 41,
      "flightsOfStairs": 33
    },
    {
      "userID": 10,
      "date": "2019/06/15",
      "numSteps": 8015,
      "minutesActive": 106,
      "flightsOfStairs": 37
    },
    {
      "userID": 11,
      "date": "2019/06/15",
      "numSteps": 11652,
      "minutesActive": 20,
      "flightsOfStairs": 24
    },
    {
      "userID": 12,
      "date": "2019/06/15",
      "numSteps": 9256,
      "minutesActive": 108,
      "flightsOfStairs": 2
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 9303,
      "minutesActive": 27,
      "flightsOfStairs": 14
    }];
    let user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    let user2 = new User({id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });
    let user3 = new User({id: 3,
      name: "Jerry Seinfield",
      address: "32 Baker Street, Denver CO 12345",
      email: "jseinfield@gmail.com",
      strideLength: 3.8,
      dailyStepGoal: 20000,
      friends: [1, 2, 4]
    });
    let user4 = new User({id: 4,
      name: "Patrick the Starfish",
      address: "A rock in the ocean",
      email: "thebigpstar@pacificocean.net",
      strideLength: .2,
      dailyStepGoal: 13000,
      friends: [1, 2]
    });

    let users = [user1, user2, user3, user4];
    let userRepo = new UserRepo(users);
    let activity = new Activity(activityData);
  };

  it('should return the miles a given user has walked on a given date' function() {
    expect(activity.getMilesFromStepsByDate(1, '2019/06/15')).to.eql(2.9);
  });
})
