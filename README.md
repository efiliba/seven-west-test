# Seven West Test Submission

## NextJS template configured with TypeScript, Jest and Styled Components

## Based on create-next-app
### --example with-jest-typescript

## Live version
https://seven-west.efiliba.now.sh

## Setup / run
```bash
yarn
yarn dev
```

## Design Choices

My first decision was to use Next.js.
- The alternative was to use create react app or build it from scratch with WebPack.
- I hadn't had an opportunity to use Next.js before and I was keen to try it out for its server side rendering benefits.
- I used this as a learning opportunity and created a base template for future projects.

Template
- Not much choice as they as were part of the requirements, but this is what I would want in my web seed.

Folder Structure
- Basically as provided by the with-jest-typescript example template but again this aligned with my practices.
- I removed some of the nesting as this was a small project and didn't need subfolders within the components.

Tests
- Jest and Enzyme as this is the industry standard and what I am comfortable with.
- Testing pattern I developed myself, based on React Testing Library, as it helps organise my tests.

## Improvements

I used Next.js to get some experience with ssr but I didn't have time to fix the flash of the caption text on load.
- The page still loads when javascript is disabled so I believe ssr is working correctly.
- I assume the text position is caused by the delay in loading the image and css.

I was unable to deploy to Github Pages. I found numerous sources on configuring Next.js for Github Pages, but it was taking too long.
- Problems were caused by Github Pages not handling files with _ as in _document.tsx. This is supposedly resolved by adding an empty .nojekyll file.
- Next.js does not create a build directory by default, but this could be configured with a next.config.js file.
- Even after publishing to Github Pages in a gh-pages branch I was unable to access the index.html file as it seems bundled by Next.js.

I did manage to publish my project to https://seven-west.efiliba.now.sh using 'now' a library provided by Next.js.
