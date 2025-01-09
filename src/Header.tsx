import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <a href="/">
            <b className="logo-bold">luc</b>rousseau
          </a>
        </h1>
        <div className="spacer"></div>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/lucrousseau21"
              className="social-button"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.257.793-.57v-2.01c-3.338.725-4.043-1.415-4.043-1.415-.547-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.837 1.238 1.837 1.238 1.07 1.835 2.81 1.306 3.493.997.107-.774.42-1.306.763-1.606-2.667-.307-5.466-1.333-5.466-5.93 0-1.31.468-2.383 1.236-3.222-.12-.305-.537-1.533.117-3.195 0 0 1.007-.323 3.3 1.23a11.495 11.495 0 013.003-.404c1.02.004 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.657 1.662.24 2.89.12 3.195.774.84 1.236 1.913 1.236 3.222 0 4.606-2.803 5.617-5.476 5.914.426.367.804 1.097.804 2.21v3.277c0 .317.19.687.8.57C20.566 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luc-rousseau/"
              className="social-button"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.415c0-1.268-.025-2.898-1.767-2.898-1.768 0-2.036 1.38-2.036 2.805v5.508h-3v-11h2.882v1.507h.041c.401-.759 1.381-1.558 2.846-1.558 3.043 0 3.605 2.003 3.605 4.605v6.446z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
