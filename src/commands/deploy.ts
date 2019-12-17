import {Command, flags} from '@oclif/command'

export default class Deploy extends Command {
  static description = 'Deploys a development environment from scratch'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to give the environment'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Deploy);
    if (!args.file) {
      this.error('No environment file provided')
    }
  }
}
