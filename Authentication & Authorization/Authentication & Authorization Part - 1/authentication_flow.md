# 2. Authentication Flow

Steps involved:
1. **Make an Authentication Request** to the Login API.
2. **Handle the Login API Response**.
3. **On Login Success**:
   - Store the **JWT Token**.
   - Redirect the user to the home page (or appropriate route).
4. **On Login Failure**:
   - Show error message to the user.

> Note: If the response status code is `2XX`, then `response.ok` is `true`; otherwise, it is `false`.
