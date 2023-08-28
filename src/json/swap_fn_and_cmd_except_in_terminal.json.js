// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Swap FN and left_command except in Terminals',
        rules: [
          {
            description: 'Swap FN and left command except in Terminals',
            manipulators: [
              {
                from: { key_code: 'left_command' },
                to: [{ key_code: 'fn' }],
                type: 'basic',
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: ['^com\\.apple\\.Terminal', '^com\\.googlecode\\.iterm2'],
                  },
                ],
              },
              {
                from: { key_code: 'fn' },
                to: [{ key_code: 'left_command' }],
                type: 'basic',
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: ['^com\\.apple\\.Terminal', '^com\\.googlecode\\.iterm2'],
                  },
                ],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
