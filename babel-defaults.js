/* eslint-disable object-shorthand */
module.exports = {
  // We need to make sure that the transpiler hit the linoleum source since we are
  // not building to npm or simliar.
  ignore: function(filename) {
    return (/node_modules/.test(filename))
        && !(/linoleum\/src/.test(filename))
        && !(/linoleum\/tasks/.test(filename));
  },
  sourceMap: 'inline',
  auxiliaryCommentBefore: 'istanbul ignore next'
};
