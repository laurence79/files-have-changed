# files-have-changed

Checks if files have changed since a commit, filtered by globs.

Example usage with [job-last-success](https://github.com/laurence79/job-last-success)
```yaml
jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - id: last_success
        uses: laurence79/job-last-success@v1.4.0
        with:
          github_token: ${{ github.token }}

      - id: client_changed
        uses: laurence79/files-have-changed@v1.0.0
        with:
          since_sha: ${{ steps.last_success.outputs.commit_sha }}
          globs: |
            packages/client/**/*.*

      - name: Test
        if: ${{ steps.client_changed.outputs.has_changes == 'true' }}
        run: npm run test --workspace client
```

## Inputs
| Name      | Description                                          | Type   | Required |
|-----------|------------------------------------------------------|--------|----------|
| since_sha | The commit SHA to compare against                    | string | N        |
| globs     | Globs to filter the changed files. Multi-line string | string | N        |


## Outputs

### has_changes
`'true'` if there are changes that match the globs, `'false'` otherwise
