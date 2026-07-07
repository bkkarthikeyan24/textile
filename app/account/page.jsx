"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import {
  getCurrentUser,
  logoutUser,
  updateCurrentUserProfile,
  updateCurrentUserProfileImage
} from "@/lib/user";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    address: ""
  });

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);
    setFormData({
      username: currentUser.username || "",
      email: currentUser.email || "",
      mobile: currentUser.mobile || "",
      address: currentUser.address || ""
    });
  }, [router]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      updateCurrentUserProfileImage(reader.result);
      setUser(getCurrentUser());
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    const updatedUser = updateCurrentUserProfile(formData);

    if (updatedUser) {
      setUser(updatedUser);
      setIsEditing(false);
      window.alert("Profile updated successfully");
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
    router.refresh();
  };

  if (!user) {
    return null;
  }

  return (
    <main className="page-shell">
      <Navbar active="account" />

      <section className="section-stack">
        <div className="account-layout">
          <aside className="account-sidebar">
            <div className="profile-card">
              <div className="profile-row">
                <div className="avatar-wrap">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.username} className="avatar-image" />
                  ) : (
                    <div className="avatar-placeholder" aria-label="Default user avatar">
                      <svg viewBox="0 0 80 80" className="avatar-icon" aria-hidden="true">
                        <circle cx="40" cy="28" r="14" fill="currentColor" />
                        <path
                          d="M18 66c2-14 12-22 22-22s20 8 22 22"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div>
                  <h1>{user.username}</h1>
                  <p className="account-email">{user.email}</p>
                </div>
              </div>

              <label className="secondary-button upload-button">
                {user.profileImage ? "Update Image" : "Set User Image"}
                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
              </label>

              <Link href="/orders" className="secondary-button upload-button">
                View Orders
              </Link>

              <button type="button" className="full-button logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </aside>

          <div className="orders-panel">
            <div className="collection-intro profile-header-card">
              <div>
                <span className="eyebrow">Account</span>
                <h1>Profile Details</h1>
              </div>

              <button
                type="button"
                className={`edit-profile-button ${isEditing ? "active" : ""}`}
                onClick={() => setIsEditing((current) => !current)}
                aria-label="Edit profile"
              >
                <svg viewBox="0 0 24 24" className="edit-icon" aria-hidden="true">
                  <path
                    d="M4 20h4l10-10-4-4L4 16v4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 5.5l4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="profile-form-grid">
              <div className="form-group">
                <label htmlFor="account-username">Username</label>
                <input
                  id="account-username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="account-email">Email</label>
                <input
                  id="account-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="account-mobile">Mobile Number</label>
                <input
                  id="account-mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group profile-address">
                <label htmlFor="account-address">Address</label>
                <input
                  id="account-address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing ? (
              <button
                type="button"
                className="full-button profile-save-button"
                onClick={handleSaveProfile}
              >
                Save Profile
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
