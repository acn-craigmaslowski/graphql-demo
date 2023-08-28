import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ActivityFeed} from "../activity-feed";
import {UserProfile} from "../user-profile";
import {PostDetail} from "../post-detail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PostDetail} path="/post/:postId" />
        <Route Component={UserProfile} path="/profile/:userId" />
        <Route Component={ActivityFeed} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
