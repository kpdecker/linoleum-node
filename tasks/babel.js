import Gulp from 'gulp';
import babel from 'gulp-babel';
import plumber from 'linoleum/src/plumber';

import {SOURCE_FILES, BUILD_TARGET} from 'linoleum';
import BABEL_DEFAULTS from 'linoleum/babel-defaults';

Gulp.task('babel', function() {
  return Gulp.src(SOURCE_FILES)
      .pipe(plumber())
      .pipe(babel(BABEL_DEFAULTS))
      .pipe(Gulp.dest(BUILD_TARGET));
});
