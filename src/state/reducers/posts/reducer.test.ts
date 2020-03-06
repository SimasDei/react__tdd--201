import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
});
