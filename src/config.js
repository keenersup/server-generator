export const {
  NODE_ENV
} = process.env

//todo change 'development' to 'production'
export const IN_PROD = NODE_ENV === 'development'

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
