import itemCounter from './__mocks__/itemCounter.js';

describe('testing item counter', () => {
  test('if the counter is working', () => {
    const arrayItems = [{ id: 301, name: 'delcatty' },
      { id: 302, name: 'sableye' }];

    expect(itemCounter(arrayItems)).toBe(2);
  });
});