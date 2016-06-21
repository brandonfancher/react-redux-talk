# react-redux-talk
**just another react redux talk**
_but with counters and colors!_

We'll review state, props, react-router, and more.  
We'll talk about the pain redux aims to alleviate.  
We'll talk about how it alleviates that pain.  
We'll alleviate that pain.

## Commands to get started

**Clone this repo**
```
git clone https://github.com/brandonfancher/react-redux-talk.git
```

**Install**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**To follow along with the talk, check out the first commit**
```
git checkout cd897cd
```

**Then follow along!**

# Some documentation

**What each commit covers**

* `cd897cd`: Initial Commit. The Counter and Color components work, but the CounterHistory and ColorHistory components aren't hooked up yet.
* `de2819d`: Get the CounterHistory and ColorHistory components to work by pushing the Counter and Color state higher and passing down props.
* `b781afd`: The CounterHistory and ColorHistory components are working with the Counter and Color components properly now, but those dashboards
lose their state if you leave them. We want state to persist when changing routes. This is where we set the foundation to push the state even higher.
* `4cc7ba2`: Push all app state and handlers (actionCreators) higher into parent App component that doesn't unmount. Stuff starts getting weird. Maybe there's a better way?
* `d730f06`: Enter redux. Configure and migrate to react-redux.
* `774a9e9`: Check out the redux dev tools chrome browser extension!
* `e5ef1d8`: Separate out concerns a bit: Separate state for each dashboard into separate reducer files.

**Mapping out our initial component hierarchy, state and props**

Component | Has State | Receives Props
--- | --- | ---
**Root** | -- | `history` (object)
-->**Routes** | -- | --
-->-->**App** | -- | `children` (object)
-->-->-->**Header** | -- | --
-->-->-->**Home** | -- | --
-->-->-->**DashboardCounter** | `countEntries` (array) | --
-->-->-->-->**Counter** | `counter` (number) | --
-->-->-->-->**CounterHistory** | -- | `countEntries` (array)
-->-->-->**DashboardColor** | `colorEntries` (array) | --
-->-->-->-->**Color** | `color` (string) | --
-->-->-->-->**ColorHistory** | -- | `colorEntries` (array)


# Resources

* Free course from redux' creator--Dan Abramov (30 videos): https://github.com/tayiorbeii/egghead.io_redux_course_notes
* Community notes on that course on github: https://github.com/tayiorbeii/egghead.io_redux_course_notes
* New course (27 videos) from Dan: [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
* Redux documentation: http://redux.js.org/index.html
* Redux documentation for react specifically: http://redux.js.org/docs/basics/UsageWithReact.html
* Boilerplate for quickly getting a react project started. See Below.


# Cool stuff from the boilerplate that serves as the foundation for this app:

I started this app by cloning another repository, _react-kickstart_, which is a react + webpack boilerplate.
That way, I didn't have to spend a ton of time getting everything set up the way I wanted it.

## This boilerplate has lots of cool features
* webpack + vanilla hot-module-replacement
* Stateless functional components
* redux
* [css-modules](https://github.com/css-modules/css-modules/) + [PostCSS](https://github.com/postcss/postcss)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([ava](https://github.com/sindresorhus/ava) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [nyc](https://github.com/bcoe/nyc)
* development and production build

If you want to use the boilerplate repo as the foundation for another project, check out the README here: https://github.com/vesparny/react-kickstart
