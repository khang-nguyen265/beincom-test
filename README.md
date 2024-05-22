
```markdown
# Next.js JSONPlaceholder Posts

This is a Next.js project that demonstrates how to handle posts using the JSONPlaceholder API. The application allows users to search, filter, paginate, view details of posts add comment.

## Features

- **Search Posts**: Search for posts by title.
- **Filter Posts**: Filter posts based on different criteria such as date and number of comments.
- **Sort Posts**: Sort posts in ascending or descending order.
- **Pagination**: Navigate through posts using pagination.
- **View Post Details**: Click on a post to view its details and comments.
- **Add Comments**: Add comments to a post.

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone  git@github.com:your-username/beincom-test.git
   cd beincom-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

Certainly! Here's the updated section for setting up the development server and adding a section to set up the local environment with an example .env.local file:

```markdown
### Starting the Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

### Setting Up Local Environment

1. Create a new file named `.env` in the root directory of the project.

2. Copy the contents from `.env.local.example` to `.env`.

3. Fill in the required environment variables in the `.env` file. These variables might include authentication tokens, or other sensitive information specific to your environment.

   Example `.env.` file:

   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   ```
   To have  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY
   use need to create Clerk app and follow document https://clerk.com/docs/quickstarts/nextjs

   To get the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, you can do the following:
   1. Goto https://clerk.com/
   2. Go to the Clerk Dashboard
   3. Select API Keys in the navigation sidebar
   4. Copy the Clerk publishable key in the Quick Copy section
   5. Paste the key into the .env.local file
   The final result should look like this: `.env.local. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY CLERK_SECRET_KEY=YOUR_SECRET_KEY

   Don't worry I have deploy for testing: https://beincom-test.vercel.app

   
   **Note**: Ensure that you don't commit the `.env` file to your version control system, as it may contain sensitive information.
```


### Running the Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production

1. Build the project for production:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

## Project Structure

- **components**: Contains React components used in the project.
  - **Post**: Components related to posts (e.g., `PostComponent`, `PostsMain`).
  - **Comment**: Components related to comments (e.g., `CommentItem`, `CommentsList`, `CommentInput`).
  - **Common**: Common components used across the application (e.g., `PaginationBar`, `CustomButton`).
- **hooks**: Custom hooks (e.g., `usePosts`, `useComments`).
- **lib**: Utility functions and API functions (e.g., `fetchPosts`, `fetchComments`).
- **app**: Next.js pages
- **public**: Static assets (e.g., images, favicon).
- **styles**: CSS files for styling.
- **types**: TypeScript type definitions.

## API Integration

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch posts and comments. Below are the key endpoints used:

- **Get Posts**: `GET /posts`
- **Get Post Details**: `GET /posts/{id}`
- **Get Comments**: `GET /posts/{id}/comments`

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the fake online REST API.
- [Next.js](https://nextjs.org/) for the awesome React framework.
- [React](https://reactjs.org/) for the UI library.

### Testing the Application

In case use not familiar with Clerk, I have deployed project to https://beincom-test.vercel.app  for testing in production mode

#### 1. Authentication

To test the authentication functionality, follow these steps:

1. Navigate to [https://beincom-test.vercel.app/](https://beincom-test.vercel.app/).
2. Attempt to access a protected route or perform an action that requires authentication, such as creating a new post or adding a comment.
3. Verify that the application redirects you to the login page or prompts you to sign in.
4. Log in with valid credentials.
5. After successful authentication, ensure that you can access the protected routes and perform the actions.

#### 2. Posts List, Search, Filter, and Pagination

To test the functionality related to posts list, search, filter, and pagination, follow these steps:

1. Navigate to [https://beincom-test.vercel.app/](https://beincom-test.vercel.app/).
2. Explore the posts list displayed on the home page.
3. Use the search bar to search for posts by title .
4. Apply filters to sort the posts based on different criteria (e.g., date, number of comments).
5. Verify that the posts list updates accordingly based on the search query and applied filters.
6. Test the pagination functionality by navigating through multiple pages of posts.

#### 3. Post Detail

To test the post detail functionality, follow these steps:

1. Navigate to [https://beincom-test.vercel.app/](https://beincom-test.vercel.app/).
2. Click on a post title or any link that leads to the post detail page.
3. Ensure that you are redirected to the post detail page displaying the selected post.
4. Verify that the post title, content, and any other relevant information are displayed correctly.

#### 4. Comment

To test the comment functionality, follow these steps:

1. Navigate to a post detail page.
2. Scroll down to the comments section.
3. Add a new comment by entering text in the comment input field and submitting it.
4. Verify that the new comment appears in the comments list.

