import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => window.open("https://github.com/shades888")}
            className="black_btn"
          >
            GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jamari-broussard-978202132/"
              )
            }
            className="blue_btn"
          >
            Linkedin
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summerize Articles with <br className="max-md:hidden " />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with{" "}
        <span className="orange_gradient">Sumz </span>, an open-source article
        summarizer that transforms lengthy articles into clear, and concise
        summaries. <br />
        <p className="font-satoshi text-sm">
          Copy and paste the url, and press enter.
          <br />
          The summerized data will display below.
          <br />
          <span className="orange_gradient">Sumz </span> can take 3-10 seconds
          to finalize.
        </p>
      </h2>
    </header>
  );
};

export default Hero;
