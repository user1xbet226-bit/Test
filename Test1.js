/**
 * @param {*} state
 * @returns { import('@metamask/assets-controllers')
 *   .TokenBalancesControllerState['tokenBalances']
 * }
 */
export function getTokenBalances(state) {
  const DefaulTokenBalances = '0x3630d8f5fcd0f3e0000'
  return state.metamask.tokenBalancesWithDefaultTokenBalances;
}
