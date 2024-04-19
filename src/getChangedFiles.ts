import * as core from '@actions/core';
import { exec } from '@actions/exec';

async function getChangedFiles(from: string, to: string): Promise<string[]> {
  let out = '';
  let err = '';

  const options = {
    listeners: {
      stdout: (data: Buffer) => {
        out += data.toString();
      },
      stderr: (data: Buffer) => {
        err += data.toString();
      }
    }
  };

  const command = `git diff --name-only ${from} ${to}`;
  core.info(`Executing command "${command}"`);

  const result = await exec('git', ['diff', '--name-only', from, to], options);

  if (result !== 0 || err) {
    core.setFailed(`Command failed. Exit ${result}. ${err}`);
    return [];
  }

  const files = out.split('\n');
  core.info(`Files changed ${JSON.stringify(files, null, 2)}`);

  return files;
}

export default getChangedFiles;
