import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import eu from "./eu.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Rui Cabeça</h2>
            <img
              src={eu}
              alt="logo"
              style={{ height: "375px", borderRadius: "200px" }}
            />
            <p
              style={{
                width: "75%",
                textalign: "center",
                margin: "auto",
                paddingTop: "3em"
              }}
            />
          </Cell>
          <Cell col={6}>
            <h2>Contact me:</h2>
            <hr
              style={{
                borderTop: "3px solid black",
                width: "70%",
                margin: "auto"
              }}
            />

            <div className="contact-icons">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      textAlign: "center"
                    }}
                  >
                    <i className="fas fa-mobile-alt" /> +351 93 050 21 27
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i class="far fa-envelope" /> rfj.cabeca@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      textAlign: "center"
                    }}
                  >
                    <i className="fab fa-linkedin" />
                    https://www.linkedin.com/in/ruicabeca
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
