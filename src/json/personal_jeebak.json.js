// JavaScript should be written in ECMAScript 5.1.

const karabiner = require('../lib/karabiner')

function main() {
  console.log(
    JSON.stringify(
      //
      // A much simplified copy of the vi_mode.json.js file, for TouchCursor Extended
      //

      {
        title: 'Personal rules (@jeebak)',
        rules: [
          {
            description: 'TouchCursor Extended Mode [Space as Trigger Key]',
            manipulators: [
              //
              // press spacebar to enter TouchCursor Mode, release to quit
              //

              {
                type: 'basic',
                from: { key_code: 'spacebar', modifiers: { optional: ['caps_lock'] } },
                to: [{ set_variable: { name: 'touchcursor_extended_mode', value: 1 } }],
                to_if_alone: [{ key_code: 'spacebar' }],
                to_after_key_up: [{ set_variable: { name: 'touchcursor_extended_mode', value: 0 } }],
              },

              //
              // change j/k/i/l to arrow keys
              //

              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { mandatory: ['left_option'], optional: ['any'] } },
                to: [{ key_code: 'b', modifiers: ['left_option'] }],
                conditions: [
                  { type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.terminal },
                  { type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'left_arrow' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'down_arrow' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'i', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'up_arrow' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { mandatory: ['left_option'], optional: ['any'] } },
                to: [{ key_code: 'f', modifiers: ['left_option'] }],
                conditions: [
                  { type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.terminal },
                  { type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'right_arrow' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // change u/o to Home/End, and m/p to delete_forward/delete_or_backspace
              //
              {
                type: 'basic',
                from: { key_code: 'u', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'home' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'o', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'end' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'm', modifiers: { mandatory: ['left_option'], optional: ['any'] } },
                to: [{ key_code: 'd', modifiers: ['left_option'] }],
                conditions: [
                  { type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.terminal },
                  { type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'm', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'delete_forward' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { mandatory: ['left_option'], optional: ['any'] } },
                to: [{ key_code: 'w', modifiers: ['left_control'] }],
                conditions: [
                  { type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.terminal },
                  { type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'delete_or_backspace' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // change h/n page_up/page_down
              //
              {
                type: 'basic',
                from: { key_code: 'h', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'page_up' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'n', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'page_down' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-left_shift to ⌥-spacebar (Alfred)
              //
              {
                type: 'basic',
                from: { key_code: 'left_shift', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'spacebar', modifiers: ['left_option'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              // ... and left_shift-spacebar too
              {
                type: 'basic',
                from: { key_code: 'spacebar', modifiers: { mandatory: ['left_shift'], optional: ['caps_lock', 'option'] } },
                to: [{ key_code: 'spacebar', modifiers: ['left_option'] }],
              },

              //
              // Space-{a,e,r} to {⌥-any,⌘-any,⇧-any}
              // Space-a to ⌘-a, if alone
              // Space-e to ⌘-n, if alone
              // Space-r to ⌘-r, if alone
              //
              {
                type: 'basic',
                from: { key_code: 'a', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: 'a', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'e', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: 'n', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'r', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_shift' }],
                to_if_alone: [{ key_code: 'r', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-{⇥,q,w} to {⌥-⇥,⌘-⇥,⌃-⇥} [shift modifier allowed]
              //
              {
                type: 'basic',
                from: { key_code: 'tab', modifiers: { optional: ['left_shift'] } },
                to: [{ key_code: 'tab', modifiers: ['left_option'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'q', modifiers: { optional: ['left_shift'] } },
                to: [{ key_code: 'tab', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'w', modifiers: { optional: ['left_shift'] } },
                to: [{ key_code: 'tab', modifiers: ['left_control'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-{b,t,s} to {`,~,spacebar}
              //
              {
                type: 'basic',
                from: { key_code: 'b', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'grave_accent_and_tilde' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 't', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'grave_accent_and_tilde', modifiers: ['left_shift'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'spacebar' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-{d,f,g,comma,period} to {⌘-w,⌘-f,⌘-g,⌘-t,⌘-⇧-t}
              //
              {
                type: 'basic',
                from: { key_code: 'd', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'w', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'f', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'g', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'g', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'comma', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 't', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'period', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 't', modifiers: ['left_command', 'left_shift'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-{z,x,c,v} to {⌘-z,⌘-x,⌘-c,⌘-v}
              //
              {
                type: 'basic',
                from: { key_code: 'z', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'z', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'x', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'x', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'c', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'c', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'v', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'v', modifiers: ['left_command'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
            ],
          },
          {
            description: 'TouchCursor Extended Mode [Space-{1-0,-,=} to {F1-F10,F11,F12}]',
            manipulators: [
              //
              // Space-{1-0,-,=} to {F1-F10,F11,F12}
              //
              {
                type: 'basic',
                from: { key_code: '1', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f1', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '2', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f2', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '3', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f3', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '4', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f4', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '5', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f5', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '6', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f6', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '7', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f7', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '8', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f8', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '9', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f9', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: '0', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f10', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'hyphen', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f11', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'equal_sign', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f12', modifiers: ['fn'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Misc Personalizations {;,',/}
              // Space-; to ⌘-⌃-; [custom shortcut to: Move left a space]
              // Space-' to ⌘-⌃-' [custom shortcut to: Move right a space]
              // Space-/ to ⌘--/ [custom shortcut to: Toggle iTerm maximized]
              // Space-right_shift to ⌘-⌃--/ [custom shortcut to: Application windows]
              //
              {
                type: 'basic',
                from: { key_code: 'semicolon', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'semicolon', modifiers: ['left_command', 'left_control'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'quote', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'quote', modifiers: ['left_command', 'left_control'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'slash', modifiers: { optional: ['caps_lock'] } },
                to: [{ shell_command: '~/.zgen/jeebak/devtools-master/bin/maccomplice togg_app iTerm2' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'right_shift', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'slash', modifiers: ['left_command', 'left_control'] }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Space-↩ to mission_control
              //
              {
                type: 'basic',
                from: { key_code: 'return_or_enter', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'mission_control' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // Media keys
              // Space-⎋, and Space-` to rewind
              // Space-⌫  to fastforward
              // Space-y to mute
              // Space-[ to volume_decrement
              // Space-] to volume_increment
              // Space-\ to play_or_pause
              //
              {
                type: 'basic',
                from: { key_code: 'escape', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'rewind' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'grave_accent_and_tilde', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'rewind' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'delete_or_backspace', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'fastforward' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'y', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'mute' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'open_bracket', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'volume_decrement' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'close_bracket', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'volume_increment' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'backslash', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'play_or_pause' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // normalize punctuation marks
              //
              {
                type: 'basic',
                from: { key_code: 'non_us_pound', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'spacebar' }, { key_code: 'non_us_pound' }, { key_code: 'vk_none' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'non_us_backslash', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'spacebar' }, { key_code: 'non_us_backslash' }, { key_code: 'vk_none' }],
                conditions: [{ type: 'variable_if', name: 'touchcursor_extended_mode', value: 1 }],
              },

              //
              // normalize remaining unbound letter keys
              //
            ],
          },
          {
            description: 'Tab Modifier Mode [Tab as Trigger Key]',
            manipulators: [
              //
              // press ⇥ to enter Tab Modifier Mode, release to quit
              //
              {
                type: 'basic',
                from: { key_code: 'tab', modifiers: { optional: ['caps_lock'] } },
                to: [{ set_variable: { name: 'tab_modifier', value: 1 } }],
                to_if_alone: [{ key_code: 'tab' }],
                to_after_key_up: [{ set_variable: { name: 'tab_modifier', value: 0 } }],
              },

              //
              // Tab-1 to Hyper-1
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '1', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '1', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-2 to Hyper-2
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '2', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '2', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-3 to Hyper-3
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '3', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '3', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-4 to Hyper-4
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '4', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '4', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-5 to Hyper-5
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '5', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '5', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-6 to Hyper-6
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '6', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '6', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-7 to Hyper-7
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '7', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '7', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-8 to Hyper-8
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '8', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '8', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-9 to Hyper-9
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '9', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '9', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-0 to Hyper-0
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: '0', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: '0', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-hyphen to Hyper-hyphen
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'hyphen', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'hyphen', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-= to Hyper-=
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'equal_sign', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'equal_sign', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-delete_or_backspace to Hyper-delete_or_backspace
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'delete_or_backspace', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'delete_or_backspace', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-q to Hyper-q
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'q', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'q', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-w to Hyper-w
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'w', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'w', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-e to Hyper-e
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'e', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'e', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-r to ⌥-⌘-r [Used to "Resume Program" in JetBrains Debugger, Hyper-r otherwise]
              //
              {
                type: 'basic',
                conditions: [
                  { type: 'frontmost_application_if', bundle_identifiers: ['^com\\.jetbrains\\.PhpStorm$', '^com\\.jetbrains\\.WebStorm$'] },
                  { type: 'variable_if', name: 'tab_modifier', value: 1 },
                ],
                from: { key_code: 'r', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'r', modifiers: ['left_command', 'left_option'] }],
              },
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'r', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'r', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-t to Hyper-t
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 't', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 't', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-y to Hyper-y
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'y', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'y', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-u to Hyper-u
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'u', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'u', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-i to Hyper-i
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'i', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'i', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-o to Hyper-o
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'o', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'o', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-p to Hyper-p
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'p', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'p', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-[ to Hyper-[
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'open_bracket', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'open_bracket', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-] to Hyper-]
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'close_bracket', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'close_bracket', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-\ to Hyper-\
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'backslash', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'backslash', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-a to Hyper-a
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'a', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'a', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-s to Hyper-s
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 's', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 's', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-d to Hyper-d
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'd', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'd', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-f to Hyper-f
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'f', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'f', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-g to Hyper-g
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'g', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'g', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-h to Hyper-h
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'h', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'h', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-j to Hyper-j
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'j', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'j', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-k to Hyper-k
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'k', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'k', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-l to Hyper-l
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'l', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'l', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-; to Hyper-;
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'semicolon', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'semicolon', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-' to Hyper-'
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'quote', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'quote', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-return to Hyper-return
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'return_or_enter', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'return_or_enter', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-z to Hyper-z
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'z', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'z', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-x to Hyper-x
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'x', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'x', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-c to Hyper-c
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'c', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'c', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-v to Hyper-v
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'v', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'v', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-b to Hyper-b
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'b', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'b', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-n to Hyper-n
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'n', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'n', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-m to Hyper-m
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'm', modifiers: { optional: ['caps_lock'] } },
                to: [{ key_code: 'm', modifiers: ['left_command', 'left_control', 'left_option', 'left_shift'] }],
              },

              //
              // Tab-, to "???"]
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'comma', modifiers: { optional: ['caps_lock'] } },
                to: [{ shell_command: 'osascript -e \'display notification "Tab-," with title "Triggered:"\'' }],
              },

              //
              // Tab-. to "???"]
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'period', modifiers: { optional: ['caps_lock'] } },
                to: [{ shell_command: 'osascript -e \'display notification "Tab-." with title "Triggered:"\'' }],
              },

              //
              // Tab-/ to "???"]
              //
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'tab_modifier', value: 1 }],
                from: { key_code: 'slash', modifiers: { optional: ['caps_lock'] } },
                to: [{ shell_command: 'osascript -e \'display notification "Tab-/" with title "Triggered:"\'' }],
              },
            ],
          },
          {
            description: 'MouseCursor Mode [D as Trigger Key]',
            manipulators: [
              //
              // press d to enter MouseCursor Mode, release to quit
              //
              {
                type: 'basic',
                from: { key_code: 'd', modifiers: { optional: ['caps_lock'] } },
                to: [{ set_variable: { name: 'mousecursor_mode', value: 1 } }],
                to_if_alone: [{ key_code: 'd' }],
                to_after_key_up: [{ set_variable: { name: 'mousecursor_mode', value: 0 } }],
              },
              //
              // press a for "accelerated" (faster) movement
              //
              {
                type: 'basic',
                from: { key_code: 'a', modifiers: { optional: ['caps_lock'] } },
                to: [{ mouse_key: { speed_multiplier: 2.0 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              //
              // press f for "fine-grained" (slower) movement
              //
              {
                type: 'basic',
                from: { key_code: 'f', modifiers: { optional: ['caps_lock'] } },
                to: [{ mouse_key: { speed_multiplier: 0.3 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },

              //
              // change j/k/i/l to normal mouse left,down,up,right
              //
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { x: -1536 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { y: 1536 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'i', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { y: -1536 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { x: 1536 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },

              //
              // change h/n/u/o to scroll up/down/left/right
              // (depends on "Scroll direction" in System Preferences)
              //
              {
                type: 'basic',
                from: { key_code: 'h', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { vertical_wheel: 64 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'n', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { vertical_wheel: -64 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'u', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { horizontal_wheel: -64 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'o', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { horizontal_wheel: 64 } }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },

              // buttons
              {
                type: 'basic',
                from: { key_code: 'w', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button1' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'g', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button1' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'm', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button1' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button2' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button2' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'v', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button3' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'slash', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button3' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'semicolon', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button4' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'quote', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button5' }],
                conditions: [{ type: 'variable_if', name: 'mousecursor_mode', value: 1 }],
              },
            ],
          },
          {
            description: 'Number Row Modifiers',
            manipulators: [
              //
              // Number row when tapped, and {1,2,3,0,-,=} to ⌥, and {4,5,6,7,8,9} to ⌘, when held
              //
              {
                type: 'basic',
                from: { key_code: '1', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: '1' }],
              },
              {
                type: 'basic',
                from: { key_code: '2', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: '2' }],
              },
              {
                type: 'basic',
                from: { key_code: '3', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: '3' }],
              },
              {
                type: 'basic',
                from: { key_code: '4', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '4' }],
              },
              {
                type: 'basic',
                from: { key_code: '5', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '5' }],
              },
              {
                type: 'basic',
                from: { key_code: '6', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '6' }],
              },
              {
                type: 'basic',
                from: { key_code: '7', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '7' }],
              },
              {
                type: 'basic',
                from: { key_code: '8', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '8' }],
              },
              {
                type: 'basic',
                from: { key_code: '9', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: '9' }],
              },
              {
                type: 'basic',
                from: { key_code: '0', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: '0' }],
              },
              {
                type: 'basic',
                from: { key_code: 'hyphen', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: 'hyphen' }],
              },
              {
                type: 'basic',
                from: { key_code: 'equal_sign', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: 'equal_sign' }],
              },
            ],
          },
          {
            description: 'Home Row Modifiers',
            manipulators: [
              //
              // Right Hand Pinky ⌘ and ⌥<; Tap for ;, hold for ⌘. Tap for ', hold for ⌥
              //
              {
                type: 'basic',
                from: { key_code: 'semicolon', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_command' }],
                to_if_alone: [{ key_code: 'semicolon' }],
              },
              {
                type: 'basic',
                from: { key_code: 'quote', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'vk_none' }, { key_code: 'left_option' }],
                to_if_alone: [{ key_code: 'quote' }],
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
