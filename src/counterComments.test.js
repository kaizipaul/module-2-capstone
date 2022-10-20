import counterComments from './__mocks__/counterComments.js';

describe('test on pokemon comments', () => {
  test('comments count is two', () => {
    const arrayComments = [
      { comment: 'I hate sableye', creation_date: '2022-10-20', username: 'Jay' },
      { comment: 'I love charizard', creation_date: '2022-10-20', username: 'Lee' },
    ];
    expect(counterComments(arrayComments)).toBe(2);
  });
});