import React from "react";

export const Auth0Feature = ({ title, description, url, thumbnail_url }) => (
  <a
    href={url}
    className="auth0-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="auth0-feature__thumbnail-container">
      <img
        className="auth0-feature__thumbnail"
        src={thumbnail_url}
        alt={`${title} thumbnail`}
      />
    </div>
    <h3 className="auth0-feature__headline">{title}</h3>
    <p className="auth0-feature__description">{description}</p>
  </a>
);
