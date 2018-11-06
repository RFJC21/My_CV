import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import eu from "./eu.jpeg";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="about-grid">
          <Cell col={6}>
            <img
              src={eu}
              alt="eu"
              style={{
                width: 300,
                height: 300,
                borderRadius: "200px"
              }}
            />
            <div className="about-text">
              <h2>Brief Introduction:</h2>
              <p>
                {" "}
                My name is Rui Cabeça, I'm 26 years old, I was born in Évora,
                and I have a Master’s Degree in Materials Engineering, from the
                FCT/UNL University. Currently I am working as a Planning
                Engineer at OGMA, integrated in the Aerostructures area, being
                part of the team who is responsible for the implementation of
                the Oracle's Module ASCP. Although I have no background related
                to Computer Engineering, I am passionate with front-end web
                development, with particular interest for ReactJS. I am also
                enthusiast about Oracle applications, production planning and
                very commited to meet deadlines. Resilience is a key word, and
                each problem is an opportunity for improvement.{" "}
              </p>
              <p>This app was built with ReactJS.</p>
              <hr
                style={{
                  borderTop: "3px solid black",
                  width: "40%",
                  margin: "auto"
                }}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
