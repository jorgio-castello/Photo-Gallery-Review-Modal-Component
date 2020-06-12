import helpers from '../client/src/components/ReviewModal/Helpers';
import ExampleActivityData from '../ExampleActivityData';

const { setUsernameAndLetter, checkForReview, setDate } = helpers;

describe('Review Modal Helper Tests', () => {
  test('setUserNameAndLetter should return an array with two strings', () => {
    const test = setUsernameAndLetter({ photos: ExampleActivityData.photos, activePhotoIdx: 1 });
    expect(test).toHaveLength(2);

    const isElementOneAString = typeof test[0] === 'string';
    const isElementTwoAString = typeof test[1] === 'string';

    expect(isElementOneAString).toBe(true);
    expect(isElementTwoAString).toBe(true);

    expect(test[1]).toHaveLength(1);
  });

  test('checkForReview should return an array of string || number || null types', () => {
    const test = checkForReview({ photos: ExampleActivityData.photos, activePhotoIdx: 1 });
    expect(test).toHaveLength(4);

    const [title, description, helpfulScore, stars] = test;
    const isTitle = typeof title === 'string' || title === null;
    const isDescription = typeof description === 'string' || description === null;
    const isHelpfulScore = typeof helpfulScore === 'number' || helpfulScore === null;
    const isStars = typeof stars === 'number' || stars === null;

    expect(isTitle).toBe(true);
    expect(isDescription).toBe(true);
    expect(isHelpfulScore).toBe(true);
    expect(isStars).toBe(true);
  });

  test('set date should return a formatted date string if given, and an empty string if not', () => {
    const newDate = setDate('January 31, 2019');
    const isLengthGreaterThan = newDate.length > 0;
    expect(isLengthGreaterThan).toBe(true);

    const noDate = setDate();
    expect(noDate).toBe('');
  });
});