import { sum } from './math';

describe('math.js', () => {
  test('10+20=30', () => {
    const result = sum(10, 20);
    expect(result).not.toBe(15); // 예외케이스
    expect(result).toBe(30);
  });
});
