// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: "Change fn + n/m/o/p' to page_up, page_down, home and end keys",
        rules: [
          {
            description: "Change fn + n/m/o/p' to page_up, page_down, home and end keys",
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'n', modifiers: { mandatory: ['fn'], optional: ['any'] } },
                to: [{ key_code: 'page_up' }],
              },
              {
                type: 'basic',
                from: { key_code: 'm', modifiers: { mandatory: ['fn'], optional: ['any'] } },
                to: [{ key_code: 'page_down' }],
              },
              {
                type: 'basic',
                from: { key_code: 'o', modifiers: { mandatory: ['fn'], optional: ['any'] } },
                to: [{ key_code: 'home' }],
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { mandatory: ['fn'], optional: ['any'] } },
                to: [{ key_code: 'end' }],
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
