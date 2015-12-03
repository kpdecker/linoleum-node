import Gulp from 'gulp';
import mocha from 'gulp-mocha';
import plumber from 'linoleum/src/plumber';

import {testFiles} from 'linoleum';

Gulp.task('test:mocha', function() {
  return Gulp.src(testFiles())
      .pipe(plumber())
      .pipe(mocha());
});
