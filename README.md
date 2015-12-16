# Linoleum-Node

Node build infrastructure for Linoleum projects.

## Usage

Within `Gulpfile.js`:

```
require('@kpdecker/linoleum');
require('@kpdecker/linoleum-node');
```

Defines:
- `babel` task which compiles Node sources using Babel
- `test:mocha` task which runs Node tests without coverage instrumentation.
- `cover:mocha` task which runs in-process Node coverage tests.
