# React spring SSR issue example

## How to use

To reproduce the issue clone the project, then `yarn` to install everything and then `yarn start` to start it up.

When you have it running, you can access the node.js's profiler tool in Chrome on `localhost:7776`. (you can find it at `chrome://inspect`)
Take a first heap snapshot after the app starts up and you'll see that it's pretty clean.

Then to simulate some load on the server download a tool like siege (that's what I'm testing with) and let it swarm the server for around 45 seconds (if you download `siege` then commad is `siege http://localhost:3005`). You can watch live how the server's heap size is growing to end up at least twice as big, mostly clogged by FrameLoop.
