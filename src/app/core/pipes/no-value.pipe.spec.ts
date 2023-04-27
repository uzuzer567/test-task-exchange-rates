import { NoValuePipe } from './no-value.pipe';

describe('NoValuePipe', () => {
  const pipe = new NoValuePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "------"', () => {
    expect(pipe.transform(undefined)).toBe('------');
  });
});
