import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import eu from "./eu.jpeg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={eu} alt="avatar" style={{ width: 400, height: 400 }} />
            <div className="banner-text">
              <h1>ReactJS Developer & Planning Engineer</h1>
              <p>Rui Cabeça</p>
              <hr />

              <p> React | NodeJS | ORACLE | VBA | Latex </p>

              <div className="social-links">
                <a
                  href="https://google.pt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-inkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
