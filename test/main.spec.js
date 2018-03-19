import { marbles } from "rxjs-marbles";
import { map } from 'rxjs/operators';

describe("rxjs-marbles", () => {

  it("should support marble tests", marbles((m) => {

    const values = { a: 1, b: 2, c: 3, d: 4 };

    const source =  m.hot('--^-a-b-c-|', values);
    const subs =            '^-------!';
    const expected = m.cold('--b-c-d-|', values);

    const destination = source.pipe(map((value) => value + 1));
    m.expect(destination).toBeObservable(expected);
    m.expect(source).toHaveSubscriptions(subs);
  }));
});

describe('first sample test', function() {
  it('should be true', function() {
    expect('bar').toBe('bar');
  });
});