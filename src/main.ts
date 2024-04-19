import * as core from '@actions/core';
import * as github from '@actions/github';
import getChangedFiles from './getChangedFiles';
import filesMatchingGlobs from './filesMatchingGlobs';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run(): Promise<void> {
  try {
    const since = core.getInput('since_sha');
    const now = github.context.sha;
    const globs = core.getMultilineInput('files');

    core.info(
      `Finding files that changed between ${since} and ${now}, filtered by ${globs.join(
        ','
      )}`
    );

    const files = await getChangedFiles(since, now);

    const result = globs ? filesMatchingGlobs(files, globs) : files;

    core.setOutput('has_changes', result ? 'true' : 'false');
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}

export default run;
