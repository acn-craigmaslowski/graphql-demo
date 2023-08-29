import {ApolloSandbox} from "@apollo/sandbox/react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {MainFeed} from "../main-feed";
import {UserProfile} from "../user-profile";
import {PostDetail} from "../post-detail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PostDetail} path="/post/:postId" />
        <Route Component={UserProfile} path="/profile/:userId" />
        <Route
          Component={() => (
            <ApolloSandbox initialEndpoint="http://localhost:4000/graphql" />
          )}
          path="/sandbox"
        />
        <Route Component={MainFeed} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
