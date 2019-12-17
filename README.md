@relativelimited/envy
=====================

Development Environment wrangler for serverless microservices with AWS &amp; Bitbucket pipelines

[![Version](https://img.shields.io/npm/v/@relativelimited/envy.svg)](https://npmjs.org/package/@relativelimited/envy)
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
@relativelimited/envy/0.1.0 darwin-x64 node-v8.10.0
$ envy --help [COMMAND]
USAGE
  $ envy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`envy configure [FILE]`](#envy-configure-file)
* [`envy deploy [FILE]`](#envy-deploy-file)
* [`envy help [COMMAND]`](#envy-help-command)

## `envy configure [FILE]`

configure the required environment variables

```
USAGE
  $ envy configure [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/configure.ts](https://github.com/relativelimited/envy/blob/v0.1.0/src/commands/configure.ts)_

## `envy deploy [FILE]`

Deploys a development environment from scratch

```
USAGE
  $ envy deploy [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to give the environment
```

_See code: [src/commands/deploy.ts](https://github.com/relativelimited/envy/blob/v0.1.0/src/commands/deploy.ts)_

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
