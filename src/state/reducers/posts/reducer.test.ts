import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return New State if recieving action type', () => {
    const posts = [
      {
        id: 1,
        title: 'test 1',
      },
      {
        id: 2,
        title: 'test 2',
      },
      {
        id: 3,
        title: 'test 3',
      },
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  });
});
