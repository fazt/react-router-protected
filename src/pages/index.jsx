import { Navigate } from "react-router-dom";

export const Landing = () => <h2>Landing Page (Public)</h2>;

export const Home = () => <h2>Home Page (Private)</h2>;

export const Dashboard = () => <h2>Dashboard (Private)</h2>;

export const Analytics = () => (
  <h2>Profile (Private & permission 'analize')</h2>
);

export const Admin = () => <h2>Admin (Private & permission 'admin')</h2>;
