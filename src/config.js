export const {
  NODE_ENV
} = process.env

export const IN_PROD = NODE_ENV === 'production'

/*
const {
  NODE_ENV
} = process.env

const IN_PROD = NODE_ENV === 'production'

module.exports = {
  NODE_ENV,
  IN_PROD,
}
*/
