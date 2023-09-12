/** @type {import('next').NextConfig} */
const path = require('path')

const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
}

module.exports = { reactStrictMode: true, sassOptions }
