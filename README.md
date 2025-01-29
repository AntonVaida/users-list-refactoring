# User management refactoring task

The goal of this task is to refactor the code from running, but riddled with anti-patterns into good code that adheres to best practices and makes use of React's features to achieve a good architecture.

The focus of this task should be to improve code quality. Do not add or remove features, and make sure the app still works after the refactoring. This also means that changing folder structure or project configuration is not part of this goal.

# Changes in the Code:
- Removed unnecessary global variables for the user list and selected user.

- Eliminated unnecessary useEffect hooks and local states to improve code readability and application performance.

- Moved all logic into custom hooks to encapsulate component logic from the UI returned by the component.

- Instead of manually creating users with new objects, introduced a User class for user creation.

- Restructured the project files for better readability.

- Added index.ts files in the types, utils, and classes folders for better import organization within components.

- Added helper functions to extract reusable logic.

- Renamed state variables for better clarity and readability.

- Improved code formatting for better readability.