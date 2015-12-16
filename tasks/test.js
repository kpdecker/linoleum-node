import Gulp from 'gulp';
import mocha from 'gulp-mocha';
import plumber from '@kpdecker/linoleum/src/plumber';

import {testFiles} from '@kpdecker/linoleum';

Gulp.task('test:mocha', function() {
  return Gulp.src(testFiles())
      .pipe(plumber())
      .pipe(mocha());
});
