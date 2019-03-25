import { User } from './../src/business.js';

describe ('User', function() {
  const userAge = new User(30);

  const sex = new User(30, 5, 80);



  it("Should calculate a person age on mercury", function() {
    expect(userAge.lifeOnMercury()).toEqual(124);
  });
  it("Should calculate a person age on venus", function() {
    expect(userAge.lifeOnVenus()).toEqual(48);
  });
  it("Should calculate a person age on mars", function() {
    expect(userAge.lifeOnMars()).toEqual(15);
  });
  it("Should calculate a person age on Jupiter", function() {
    expect(userAge.lifeOnJupiter()).toEqual(2);
  });
  it('should subtract average life expectany to how long you live on Venus', function() {
    expect(sex.lifeExpectancyOnVenus()).toEqual(37);
  });
  it('should subtract average life expectany to how long you live on Mars', function() {
    expect(sex.lifeExpectancyOnMars()).toEqual(70);
  });
  it('should subtract average life expectany to how long you live on Jupiter', function() {
    expect(sex.lifeExpectancyOnJupiter()).toEqual(83);
  });
});
