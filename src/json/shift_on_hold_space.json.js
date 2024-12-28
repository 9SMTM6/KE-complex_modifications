// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Shift on hold space, space on tap',
        rules: [
          {
            description: 'Change space to left shift if held and space pressed alone',
            manipulators: [
              {
                conditions: [
                  {
                    identifiers: [{ vendor_id: 1452 }],
                    type: 'device_if',
                  },
                ],
                from: {
                  key_code: 'spacebar',
                  modifiers: { optional: ['any'] },
                },
                to: [{ key_code: 'left_shift' }],
                to_if_alone: [{ key_code: 'spacebar' }],
                type: 'basic',
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