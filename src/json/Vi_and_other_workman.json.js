// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Vi and other (Workman keyboard layout)',
        rules: [
          {
            description: 'S+[movement] Vi Mode // s key',
            manipulators: [
              {
                conditions: [
                  {
                    name: 'simple_vi_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'j',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'down_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 's',
                    },
                    {
                      key_code: 'j',
                    },
                  ],
                  simultaneous_options: {
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'simple_vi_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                parameters: {
                  'basic.simultaneous_threshold_milliseconds': 500,
                },
                to: [
                  {
                    set_variable: {
                      name: 'simple_vi_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'down_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'simple_vi_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'k',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'up_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 's',
                    },
                    {
                      key_code: 'k',
                    },
                  ],
                  simultaneous_options: {
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'simple_vi_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                parameters: {
                  'basic.simultaneous_threshold_milliseconds': 500,
                },
                to: [
                  {
                    set_variable: {
                      name: 'simple_vi_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'up_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'simple_vi_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'h',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 's',
                    },
                    {
                      key_code: 'h',
                    },
                  ],
                  simultaneous_options: {
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'simple_vi_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                parameters: {
                  'basic.simultaneous_threshold_milliseconds': 500,
                },
                to: [
                  {
                    set_variable: {
                      name: 'simple_vi_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'left_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'simple_vi_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'l',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 's',
                    },
                    {
                      key_code: 'l',
                    },
                  ],
                  simultaneous_options: {
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'simple_vi_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                parameters: {
                  'basic.simultaneous_threshold_milliseconds': 500,
                },
                to: [
                  {
                    set_variable: {
                      name: 'simple_vi_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'right_arrow',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Vi Visual Mode (Workman)',
            manipulators: [
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'j',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'down_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^org\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'j',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'down_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'k',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'up_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'k',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'up_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'h',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'h',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'l',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'l',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 't',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 't',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'r',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'r',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: '0',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift', 'left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: '0',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_shift', 'left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: '4',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift', 'left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: '4',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_shift', 'left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'open_bracket',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'up_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'open_bracket',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'up_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'vi_visual_mode',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'down_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    bundle_identifiers: [
                      '^com\\.apple\\.Terminal$',
                      '^com\\.googlecode\\.iterm2$',
                      '^co\\.zeit\\.hyperterm$',
                      '^co\\.zeit\\.hyper$',
                      '^io\\.alacritty$',
                      '^net\\.kovidgoyal\\.kitty$',
                      '^org\\.vim\\.',
                      '^com\\.qvacua\\.VimR$',
                    ],
                    type: 'frontmost_application_unless',
                  },
                ],
                from: {
                  modifiers: {
                    optional: ['any'],
                  },
                  simultaneous: [
                    {
                      key_code: 'b',
                    },
                    {
                      key_code: 'close_bracket',
                    },
                  ],
                  simultaneous_options: {
                    detect_key_down_uninterruptedly: true,
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                      {
                        set_variable: {
                          name: 'vi_visual_mode',
                          value: 0,
                        },
                      },
                    ],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'vi_visual_mode',
                      value: 1,
                    },
                  },
                  {
                    key_code: 'down_arrow',
                    modifiers: ['left_shift', 'left_option'],
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Change Command + Spacebar to Backspace',
            manipulators: [
              {
                from: {
                  key_code: 'spacebar',
                  modifiers: {
                    mandatory: ['left_command'],
                  },
                },
                to: [
                  {
                    key_code: 'delete_or_backspace',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Change spacebar to right_shift. (Post spacebar if pressed alone)',
            manipulators: [
              {
                from: {
                  key_code: 'spacebar',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_shift',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'spacebar',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'CapsLock to Hyper/Escape',
            manipulators: [
              {
                from: {
                  key_code: 'caps_lock',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_shift',
                    modifiers: ['right_command', 'right_control', 'right_option'],
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'escape',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Change Right_command To CapsLock, Hold to Right_Command',
            manipulators: [
              {
                from: {
                  key_code: 'right_command',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_command',
                    modifiers: [],
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'caps_lock',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Right (left_shift+l to right)',
            manipulators: [
              {
                from: {
                  key_code: 'l',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Down (left_shift+j to down)',
            manipulators: [
              {
                from: {
                  key_code: 'j',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'down_arrow',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Left (left_shift+h to left)',
            manipulators: [
              {
                from: {
                  key_code: 'h',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Up (left_shift+k to up)',
            manipulators: [
              {
                from: {
                  key_code: 'k',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'up_arrow',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Home (left_shift+h to fn+left Workman)',
            manipulators: [
              {
                from: {
                  key_code: 'd',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                    modifiers: ['fn'],
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'End (left_shift+t to fn+right Workman)',
            manipulators: [
              {
                from: {
                  key_code: 'f',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                    modifiers: ['fn'],
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Word forward (left_shift+w to option+right Workman)',
            manipulators: [
              {
                from: {
                  key_code: 'r',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                    modifiers: ['left_option'],
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Word back (left_shift+b to option+left Workman)',
            manipulators: [
              {
                from: {
                  key_code: 't',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                    modifiers: ['left_option'],
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Page up (left_shift+p to page_up Workman)',
            manipulators: [
              {
                from: {
                  key_code: 'o',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'page_up',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Page down (left_shift+d to page_down)',
            manipulators: [
              {
                from: {
                  key_code: 'w',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'page_down',
                  },
                ],
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
