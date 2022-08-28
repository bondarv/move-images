import { shuffle } from './shuffle';

test('should shuffle the array', () => {
  const array = ['cats', 'chubaka', 'dogs', 'dyno', 'planets'];
  expect(shuffle(array)).not.toEqual(array);
});
