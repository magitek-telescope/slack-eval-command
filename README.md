# Slack eval command

**This is very dangerous! Please execute in a secure virtual environment.**

**As a safe and easiest way, we recommend moving with [glitch](https://glitch.com).**

Simple eval server build with Express.

## Installation

```bash
$ git clone git@github.com:potato4d/slack-eval-command.git
$ cd slack-eval-command
$ yarn
$ yarn start
```

## Install on Slack

0. Deploy this application somewhere
1. Access https://<your-workspace-name>.slack.com/apps/A0F82E8CA-slash-commands
2. Click "Add Configration"
3. Set `/eval` command and target URL.
4. Type `/eval 'Hello, world'` on Your Slack channel!

## Requirements

- Node.js
  - v8.0.0 or higher

## LICENSE

MIT © [potato4d](https://github.com/potato4d)
