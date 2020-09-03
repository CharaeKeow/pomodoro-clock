# Pomodoro Clock
A simple pomodoro clock timer, built using React :heart:

User stories, as per [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock):

- [x] An element with `id="break-label"` that contains string "Break Length".
- [x] An element with `id="session-label"` that contains string "Session Length".
- [x] Two clickable elements: `id="break-decrement"` and `id="session-decrement"`.
- [x] Two clickable elements: `id="break-increment"` and `id="session-increment"`.
- [x] An element with `id="break-length"`, which by default (on load) displays a value of 5.
- [x] An element with `id="session-length"`, which by default (on load) displays a value of 25.
- [x] An element with `id="timer-label"` that contains a string indicating a session is initialized (e.g. "Session", "Break").
- [x] An element with `id="time-left"`. The value of this field should always be displayed regardless of pause or running. Format `mm:ss`.
- [x] A clickable elemetn with `id="start_stop"`.
- [x] A clickable element with `id="reset"`.
- [x] When the element with id `reset` is clicked, any running time should be stopped, the value of `id="break-length"` should return to `5`, 
      the value within `id="session-length"` should return to `25` and the element with `id="time-left"` should reset to its default state.
- [x] When the element with id `break-decrement` is clicked, the value within `id="break-length"` decrements by a value of 1.
- [x] When the element with id `break-increment` is clicked, the value within `id="break-length"` decrements by a value of 1.
- [x] When the element with id `session-decrement` is clicked, the value within `id="session-length"` decrements by a value of 1.
- [x] When the element with id `session-increment` is clicked, the value within `id="session-length"` decrements by a value of 1.
- [x] Break and session length should not be able to be set to <=0.
- [x] Break and session length should not be able to be set to > 60.
- [x] When element with id `start_stop` is clicked, the timer should begin running from the value currently displayed
      in `id="session-length"`, even if the value has been incremented or decremented from the original value of `25`.
- [x] If the timer is running, the element with the id of `time-left` should display the time `mm:ss` format (decrementing
      by a value of `1` and updating the display every `1000ms`).
- [x] If the timer is running and the element with id `start_stop` is clicked, the countdown should pause.
- [x] If the timer is paused and the element with id `start_stop` is clicked, the countdown should resume running from the 
    point at which it was paused.
- [x] When a session countdown reaches `0` (NOTE: timer MUST reach 00:00), a new break countdown should begin, the element with the
      id of `timer-label` should display a string indicating a break has begun.
- [x] When a session countdown reaches `0`, a new break countdown begins, counting down from the value currently displayed 
      in the `id="session-length"` element.
- [ ] When a count down reaches `0`, a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have 
      a corresponding `id="beep"`.
- [ ] The audio element with `id="beep"` must be 1 second or longer.
- [ ] The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.
