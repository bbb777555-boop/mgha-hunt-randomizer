#!/usr/bin/env node
// Launches Electron with ELECTRON_RUN_AS_NODE unset.
// When running inside VS Code / Claude Code, this env var is set to 1
// which forces Electron into plain Node mode — stripping all Electron APIs.
const { spawn } = require('child_process')
const electron  = require('electron')

const args = process.argv.slice(2)
const env  = { ...process.env }
delete env.ELECTRON_RUN_AS_NODE

const child = spawn(electron, ['.', ...args], { stdio: 'inherit', env })
child.on('close', code => process.exit(code ?? 0))
