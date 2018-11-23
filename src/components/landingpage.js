import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import eu from "./eu.jpeg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={eu}
              alt="logo3"
              style={{
                width: 375,
                height: 375,
                borderRadius: "200px"
              }}
            />
            <div className="banner-text">
              <h1>Planning Engineer & ReactJS Developer</h1>
              <p>Rui Cabeça</p>
              <hr />

              <p>
                {" "}
                ReactJS | React-Native | Linux | Oracle Applications | VBA |
                Latex | Production Planning | Power BI{" "}
              </p>

              <div className="social-links">
                <a href>
                  <i className="fab fa-react" />
                </a>

                <a href>
                  <i class="fab fa-linux" />
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
