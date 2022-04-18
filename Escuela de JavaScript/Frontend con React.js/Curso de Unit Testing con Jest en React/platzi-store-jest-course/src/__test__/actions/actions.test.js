import actions from '../../actions/';
import productMock from '../../__mocks__/ProductMock';

describe('actions', () => {
  test('addToCart Action', () => {
    const payload = productMock;
    const expected = {
      type: "ADD_TO_CART",
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('removeFromCart Action', () => {
    const payload = productMock;
    const expected = {
      type: "REMOVE_FROM_CART",
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
