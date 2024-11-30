import type { Options } from '@wdio/types'
import {config as baseConfig } from './wdio.shared.conf'

export const config: Options.Testrunner = {
...baseConfig,
port: 4723,
services: ['appium'],
capabilities: [{'appium:noReset': false}]
}