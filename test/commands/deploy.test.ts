import {expect, test} from '@oclif/test'

describe('deploy', () => {
  test
    .stderr()
    .command(['deploy'])
    .exit(2)
    .it('exits with status 2 if no environment file is provided')
})
