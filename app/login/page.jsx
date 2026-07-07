"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { moveGuestCartToCurrentUser } from "@/lib/cart";
import { loginOrCreateUser, signInUser } from "@/lib/user";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("create");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const result =
      mode === "create"
        ? loginOrCreateUser({
            username: username || "Customer",
            email,
            mobile,
            address,
            password
          })
        : signInUser({
            identifier,
            password
          });

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    moveGuestCartToCurrentUser();
    setErrorMessage("");
    router.push("/account");
    router.refresh();
  };

  return (
    <main className="page-shell">
      <Navbar active="login" />

      <section className="login-layout">
        <div className="login-card">
          <h1>Login to Your Account</h1>

          <div className="auth-switch">
            <button
              type="button"
              className={`auth-tab ${mode === "create" ? "active" : ""}`}
              onClick={() => {
                setMode("create");
                setErrorMessage("");
              }}
            >
              Create Account
            </button>
            <button
              type="button"
              className={`auth-tab ${mode === "signin" ? "active" : ""}`}
              onClick={() => {
                setMode("signin");
                setErrorMessage("");
              }}
            >
              Sign In
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {mode === "create" ? (
              <>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="identifier">Email or Mobile Number</label>
                <input
                  id="identifier"
                  type="text"
                  placeholder="Enter email or mobile number"
                  value={identifier}
                  onChange={(event) => setIdentifier(event.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {errorMessage ? <p className="error-text">{errorMessage}</p> : null}

            <button type="submit" className="full-button">
              {mode === "create" ? "Create Account" : "Sign In"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
