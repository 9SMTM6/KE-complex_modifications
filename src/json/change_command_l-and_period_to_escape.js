function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Change Command_L|Command_R + Period to Escape',
        rules: [
          {
            description: 'Change Command_L + Period to Escape, to aid those who use the iPad Magic Keyboard since Command_L + Period is Escape on that keyboard.',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'period',
                  modifiers: {
                    mandatory: ['left_command'],
                  },
                },
                to: [{ key_code: 'escape' }],
              },
            ],
          },
          {
            description: 'Change Command_R + Period to Escape, to aid those who use the iPad Magic Keyboard since Command_R + Period is Escape on that keyboard.',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'period',
                  modifiers: {
                    mandatory: ['right_command'],
                  },
                },
                to: [{ key_code: 'escape' }],
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
