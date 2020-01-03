# Pomodoro Clock
A simple pomodoro clock timer, built using React :heart:

User stories, as per [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock):

- [ ] An element with `id="break-label"` that contains string "Break Length".
- [ ] An element with `id="session-label"` that contains string "Session Length".
- [ ] Two clickable elements: `id="break-decrement"` and `id="session-decrement"`.
- [ ] Two clickable elements: `id="break-increment"` and `id="session-increment"`.
- [ ] An element with `id="break-length"`, which by default (on load) displays a value of 5.
- [ ] An element with `id="session-length"`, which by default (on load) displays a value of 25.
- [ ] An element with `id="timer-label"` that contains a string indicating a session is initialized (e.g. "Session", "Break").
- [ ] An element with `id="time-left"`. The value of this field should always be displayed regardless of pause or running. Format `mm:ss`.
- [ ] A clickable elemetn with `id="start_stop"`.
- [ ] A clickable element with `id="reset"`.
- [ ] When the element with id `reset` is clicked, any running time should be stopped, the value of `id="break-length"` should return to `5`, 
      the value within `id="session-length"` should return to `25` and the element with `id="time-left"` should reset to its default state.
- [ ] When the element with id `break-decrement` is clicked, the value within `id="break-length"` decrements by a value of 1.
- [ ] When the element with id `break-increment` is clicked, the value within `id="break-length"` decrements by a value of 1.
- [ ] When the element with id `session-decrement` is clicked, the value within `id="session-length"` decrements by a value of 1.
- [ ] When the element with id `session-increment` is clicked, the value within `id="session-length"` decrements by a value of 1.
- [ ] Break and session length should not be able to be set to <=0.
- [ ] Break and session length should not be able to be set to > 60.
- [ ] When element with id `start_stop` is clicked, the timer should begin running from the value currently displayed
      in `id="session-length"`, even if the value has been incremented or decremented from the original value of `25`.
- [ ] If the timer is running, the element with the id of `time-left` should display the time `mm:ss` format (decrementing
      by a value of `1` and updating the display every `1000ms`).
- [ ] If the timer is running and the element with id `start_stop` is clicked, the countdown should pause.
- [ ] If the timer is paused and the element with id `start_stop` is clicked, the countdown should resume running from the 
      point at which it was paused.
- [ ] When a session countdown reaches `0` (NOTE: timer MUST reach 00:00), a new break countdown should begin, the element with the
      id of `timer-label` should display a string indicating a break has begun.
- [ ] When a session countdown reaches `0`, a new break countdown begins, counting down from the value currently displayed 
      in the `id="session-length"` element.
- [ ] When a count down reaches `0`, a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have 
      a corresponding `id="beep"`.
- [ ] The audio element with `id="beep"` must be 1 second or longer.
- [ ] The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.
