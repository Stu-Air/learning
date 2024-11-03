# Certification Project 4 of 5

## Build a 25 + 5 Clock

Note: React 18 has known incompatibilities with the tests for this project (see issue)

Objective: Build an app that is functionally similar to this: https://25--5-clock.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

x User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").

x User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").

x User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

x User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".

x User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.

x User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

X User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").

x User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

x User Story #9: I can see a clickable element with a corresponding id="start_stop".

x User Story #10: I can see a clickable element with a corresponding id="reset".

x User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.

x User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.

x User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.

x User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

x User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.

x User Story #16: I should not be able to set a session or break length to <= 0.

x User Story #17: I should not be able to set a session or break length to > 60.

x User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

x User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

User Story #27: The audio element with id="beep" must be 1 second or longer.

User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

#Technology Stack

#Content

    8. I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

    time-left is not formatted correctly: expected '25' to equal '60'
    a@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:82:477
    FCC_Global</e.exports/o.prototype.assert@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:516:1451
    h@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:531:2123
    u@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:407:130
    FCC_Global</e.exports/n.strictEqual@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:556:655
    FCC_Global</test/</</e/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:171534
    p@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94539
    FCC_Global</n/H/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:95877
    FCC_Global</n/O/</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94902
    r@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1169
    s@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1381

    var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function s(e){r(i,n,o,s,u,"next",e)}function u(e){r(i,n,o,s,u,"throw",e)}s(void 0)}))

#Timer

    1. When I click the element with the id of "reset", any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.

    Timeout of 100000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    2. When I click the element with the id of "break-decrement", the value within id="break-length" decrements by a value of 1, and I can see the updated value.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    3. When I click the element with the id of "break-increment", the value within id="break-length" increments by a value of 1, and I can see the updated value.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    4. When I click the element with the id of "session-decrement", the value within id="session-length" decrements by a value of 1, and I can see the updated value.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    5. When I click the element with the id of "session-increment", the value within id="session-length" increments by a value of 1, and I can see the updated value.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    6. I should not be able to set a session or break length to <= 0.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    7. I should not be able to set a session or break length to > 60.

    Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    8. When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

    expected '49' to equal '25'
    a@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:82:477
    FCC_Global</e.exports/o.prototype.assert@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:516:1451
    h@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:531:2123
    u@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:407:130
    FCC_Global</e.exports/n.strictEqual@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:556:655
    FCC_Global</test/</</e/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:176990
    p@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94539
    FCC_Global</n/H/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:95877
    FCC_Global</n/O/</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94902
    r@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1169
    s@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1381

    10. If the timer is running and I click the element with id="start_stop", the countdown should pause.

    25 + 5 clock has paused but time continued elapsing: expected '10' to equal '12'
    a@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:82:477
    FCC_Global</e.exports/o.prototype.assert@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:516:1451
    h@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:531:2123
    u@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:407:130
    FCC_Global</e.exports/n.strictEqual@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:556:655
    FCC_Global</test/</</e/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:178286
    p@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94539
    FCC_Global</n/H/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:95877
    FCC_Global</n/O/</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94902
    r@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1169
    s@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1381

    11. If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

    Bad time string 49:5
    c@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:167757
    FCC_Global</test/</</e/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:178793
    p@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94539
    FCC_Global</n/H/<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:95877
    FCC_Global</n/O/</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:94902
    r@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1169
    s@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1381

    12. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a break has begun.

    Timeout of 100000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    13. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

    Timeout of 100000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    14. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a session has begun.

    Timeout of 200000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234

    15. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

    Timer has not reached 00:00.
    FCC_Global</test/f/</i<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:581:168082

#Audio

    1. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <audio> tag and have a corresponding id="beep".

    Timeout of 100000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
    createTimeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:261902
    FCC_Global</</a/Kb.prototype._timeoutError@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:266162
    FCC_Global</</a/Kb.prototype.resetTimeout/this.timer<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:575:264234
