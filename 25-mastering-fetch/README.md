# Mastering Fetch

## Objectives

- Talk about why DOMContentLoaded and other events are not to be ignored and why flamboyance doesn't pay off
  - analytics
  - third-party scripts
  - dom updates
  - querying the dom on non-existing elements does not result in errors
    - instead, the errors thrown are in the genre of `cannot find method foo on undefined`
- READ the dog from the server
- UPDATE the data about the dog and make changes to UI on the response

## If time allows

- DELETE and CREATE dogs
- Abstract the `fetch()` logic to a separate interface, or maybe not - [AHA programming](https://kentcdodds.com/blog/aha-programming/)
