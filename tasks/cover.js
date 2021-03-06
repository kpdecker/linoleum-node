import Gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import mocha from 'gulp-mocha';

import {instrumenterConfig} from '@kpdecker/linoleum/src/cover';
import plumber from '@kpdecker/linoleum/src/plumber';

import {SOURCE_FILES, COVERAGE_TARGET, MOCHA_TIMEOUT, testFiles} from '@kpdecker/linoleum/config';

function coverSourceFiles() {
  return Gulp.src(SOURCE_FILES)
      .pipe(plumber())
      .pipe(istanbul(instrumenterConfig()));
}

// This task hierarchy is to hack around
// https://github.com/sindresorhus/gulp-mocha/issues/112
Gulp.task('cover:mocha:pre', function() {
  return coverSourceFiles()
      .pipe(istanbul.hookRequire({extensions: ['.js', '.jsx']}));
});
Gulp.task('cover:mocha:run', ['cover:mocha:pre'], function() {
  return Gulp.src(testFiles())
      .pipe(plumber())
      .pipe(mocha({timeout: MOCHA_TIMEOUT || 2000}));
});
Gulp.task('cover:mocha', ['cover:mocha:run'], function() {
  return Gulp.src(testFiles())
      .pipe(istanbul.writeReports({
        dir: COVERAGE_TARGET,
        reporters: [ 'json' ],
        reportOpts: { dir: `${COVERAGE_TARGET}/mocha` }
      }));
});
