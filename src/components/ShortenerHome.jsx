import React, { useEffect, useState } from "react";
import Button from "./common/Button";

const data = [
  {
    long: "http://google.com/account/settings",
    short: "http://goog.le1",
  },
  {
    long: "http://google.com/account/settings",
    short: "http://goog.le2",
  },
];

function ShortenerHome(props) {
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setLinks(data);
  }, []);

  function handleCopyToClipboard(link) {
    navigator.clipboard.writeText(link.short);
  }

  function handleChangeInput({ target }) {
    setInput(target.value);
  }

  function handleShortenLink() {
    if (input.length <= 0) return setError(true);
    setError(false);

    const linksCopy = [...links];
    linksCopy.push({
      long: input,
      short: "http://goog.le" + Math.round(Math.random() * 1000),
    });

    setLinks(linksCopy);
  }

  function getInputClasses() {
    let classes = "input shortener-home__input ";
    return (classes += error ? classes + "input--error" : "");
  }

  return (
    <section className="section section-shortener-home">
      <div className="container">
        <div className="shortener-home">
          <div className="input-group shortener-home__input-group">
            <input
              className={getInputClasses()}
              type="text"
              placeholder="Shorten a link here..."
              value={input}
              onChange={handleChangeInput}
            />
            {error && <p className="error-text">please add a link</p>}
          </div>
          <Button onClick={handleShortenLink} text="Shorten it" />
        </div>

        <div className="shortened-link-container">
          {links.map((link) => (
            <div key={Math.random().toString()} className="shortened-link">
              <p className="shortener-url long-url">{link.long}</p>
              <hr className="shortened-link__separator" />
              <div className="short-url-group">
                <p className="shortener-url short-url">{link.short}</p>
                <Button
                  onClick={() => handleCopyToClipboard(link)}
                  text="copy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShortenerHome;
