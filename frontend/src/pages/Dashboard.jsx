import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../services/authService";

const Dashboard = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        setProfile(data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          logout();
          navigate("/login", { replace: true });
        } else {
          setError("Unable to load profile");
        }
      }
    };

    if (token) fetchProfile();
  }, [token, logout, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard!</h1>

      {error && <p className="error">{error}</p>}

      {profile && (
        <div className="profile-card">
          <h2>Hello, {profile.name} 👋</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>User ID:</strong> {profile._id}</p>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;