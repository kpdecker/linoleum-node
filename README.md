# Linoleum

Project Recall JavaScript build tools.

That's right I've got a floor.

## Usage

Within `Gulpfile.js`:

```
// Init global state
require('linoleum');

// Include optional linoleum tasks
require('linoleum/tasks/clean');
require('linoleum/tasks/lint');
require('linoleum/tasks/babel');
require('linoleum/tasks/test');
```

### linoleum/tasks/test

Defines the `test:mocha` task which runs in-process Node tests.
