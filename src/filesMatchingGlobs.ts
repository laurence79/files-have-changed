import * as core from '@actions/core';
import { minimatch } from 'minimatch';

function filesMatchingGlobs(files: string[], globs: string[]): boolean {
  const result = files.filter(file =>
    globs.some(glob => minimatch(file, glob))
  );

  core.info(`Files matching globs ${JSON.stringify(result, null, 2)}`);

  return result.any();
}

export default filesMatchingGlobs;
