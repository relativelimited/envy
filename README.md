@relativelimited/envy
=====================

Development Environment wrangler for serverless microservices with AWS &amp; Bitbucket pipelines

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@relativelimited/envy.svg)](https://npmjs.org/package/@relativelimited/envy)
[![CircleCI](https://circleci.com/gh/relativelimited/envy/tree/master.svg?style=shield)](https://circleci.com/gh/relativelimited/envy/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/relativelimited/envy?branch=master&svg=true)](https://ci.appveyor.com/project/relativelimited/envy/branch/master)
[![Codecov](https://codecov.io/gh/relativelimited/envy/branch/master/graph/badge.svg)](https://codecov.io/gh/relativelimited/envy)
[![Downloads/week](https://img.shields.io/npm/dw/@relativelimited/envy.svg)](https://npmjs.org/package/@relativelimited/envy)
[![License](https://img.shields.io/npm/l/@relativelimited/envy.svg)](https://github.com/relativelimited/envy/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @relativelimited/envy
$ envy COMMAND
running command...
$ envy (-v|--version|version)
@relativelimited/envy/0.1.0 darwin-x64 node-v12.13.1
$ envy --help [COMMAND]
USAGE
  $ envy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`envy hello [FILE]`](#envy-hello-file)
* [`envy help [COMMAND]`](#envy-help-command)

## `envy hello [FILE]`

describe the command here

```
USAGE
  $ envy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ envy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/relativelimited/envy/blob/v0.1.0/src/commands/hello.ts)_

## `envy help [COMMAND]`

display help for envy

```
USAGE
  $ envy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
