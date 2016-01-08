import Gulp from 'gulp';
import babel from 'gulp-babel';
import changed from 'gulp-changed';
import plumber from '@kpdecker/linoleum/src/plumber';

import {SOURCE_FILES, BUILD_TARGET} from '@kpdecker/linoleum/config';
import BABEL_DEFAULTS from '@kpdecker/linoleum/babel-defaults';

Gulp.task('babel', function() {
  return Gulp.src(SOURCE_FILES)
      .pipe(plumber())
      .pipe(changed(BUILD_TARGET))
      .pipe(babel(BABEL_DEFAULTS))
      .pipe(Gulp.dest(BUILD_TARGET));
});
