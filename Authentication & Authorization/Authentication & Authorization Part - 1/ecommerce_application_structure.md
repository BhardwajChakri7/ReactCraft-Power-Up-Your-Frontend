```markdown
# 4. E-Commerce Application Overview

### Authentication Handling
- **LoginForm**: 
  - Sends API request
  - Handles success & failure
  - Stores JWT token
  - Redirects on success using `history.push('/home')`

### App Structure (React)

#### File: `src/App.js`
- Sets up routes using `React Router`
- Handles protected and public routes
- Contains a `Switch` for route-based rendering

#### File: `src/components/LoginForm/index.js`
- Contains login UI
- API request logic
- On success: stores token and redirects

#### File: `src/components/Home/index.js`
- Landing page after login
- Fetches product or user data using token

#### File: `src/components/Cart/index.js`
- Displays user's cart items
- Requires user to be authenticated

#### File: `src/components/Header/index.js`
- Navigation bar
- Shows user info and logout button

#### File: `src/components/Products/index.js`
- Lists all available products
- Adds product to cart functionality

#### File: `src/components/NotFound/index.js`
- Renders 404 message for undefined routes
