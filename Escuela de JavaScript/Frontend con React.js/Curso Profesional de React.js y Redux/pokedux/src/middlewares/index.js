export const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
  const fearuted = [{ name: 'eddie' }, ...actionInfo.action.pyload]
  const updatedActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: fearuted } }
  next(updatedActionInfo)
}