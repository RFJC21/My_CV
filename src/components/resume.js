import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import eu from "./eu.jpeg";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <img
            src={eu}
            alt="logo"
            style={{
              width: 300,
              height: 300,
              borderRadius: "200px",
              margin: "auto"
            }}
          />
          <h2 style={{ paddingLeft: "200pm" }}>Rui Cabeça</h2>
          <h4>Planning Engineer / ReactJS Developer</h4>
          <hr style={{ borderTop: "3px solid black", width: "60%" }} />
          <h5>Actual position:</h5>
          <p>
            Planning Engineer at OGMA - Indústria Aeronáutica de Portugal S.A,
            Embraer Group
          </p>
          <h5>Address:</h5>
          <p>Rua Jose Lopes nº6 r/c dir, Alverca do Ribatejo</p>
          <h5>Phone:</h5>
          <p>+351 93 050 21 27</p>
          <h5>Email:</h5>
          <p>rfj.cabeca@gmail.com</p>
          <hr style={{ borderBottom: "3px solid black", width: "60%" }} />
          <h5>Achievements:</h5>
          <p>
            Trainee Program, project “Sequencing models integrated with planning
            models in MRP”, Planning Engineer at OGMA
          </p>
          <p>Internship in Université Paris-Sud, Paris, France</p>
          Presence in International Fair - IDS 2017, Cologne, Germany <p />
          <hr style={{ borderBottom: "3px solid black", width: "60%" }} />
          <h4>Languages:</h4>
          <Skills skills="Portuguese" progress={95} />
          <Skills skills="English" progress={85} />
          <Skills skills="Spanish" progress={30} />
          <Skills skills="French" progress={30} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education
            startYear={"Sep 2010"}
            endYear={"May 2017"}
            schoolName="Faculdade de Ciencias e Tecnologias, Universidade Nova de Lisboa"
            schoolDescription="Master's Degree in Materials Engineering"
          />
          <hr style={{ borderTop: "3px solid white", width: "60%" }} />
          <h2>Experience</h2>
          <Experience
            startYear="Aug 2018"
            endYear="Present"
            jobName="Planning Engineer at OGMA - Indústria Aeronáutica de Portugal S.A, Embraer Group"
            jobDescription="Oracle: Implementation of ASCP, constrained plans.
            BOM, Inventory and Engineering module parametrizations.
            
            Finite capacity tests and parametrizations.
            Supplier restrictions; setups dependent setup and batchable resources.
            
            Development of views in Power BI."
          />

          <Experience
            startYear="Nov 2017"
            endYear="Aug 2018"
            jobName="Trainee Program at OGMA - Indústria Aeronáutica de Portugal S.A, Embraer Group"
            jobDescription="Project “Sequencing Models integrated with planning
            models in MRP”, Production Planning in Aerostructures;
            Flow mapping and identification of bottleneck workstations;
            Study and definition of the best dispatching rules for each
            workstation, regarding their restrictions;
            Development of a pilot solution in VBA;
            Conducting tests with the pilot solution in the composites area,
            Aerostructures, replication to other areas;
            Development of a test organization in Oracle (ASCP), creation of
            Items, Routings, BOM... Integration and simulation with Production
            Scheduling, Oracle"
          />

          <Experience
            startYear="Mar 2017"
            endYear="Sep 2017"
            jobName="Export Product Manager at Medbone - Medical Devices"
            jobDescription="Dental Sales Engineer, responsible for the Gulf region, Asia and
            Africa;
            Company representative in IDS 2017, Colónia, Germany,
            internacional dental fair; Prospecting new clients, and negotiation with the actual ones;
            Presentation of new solutions for the sales model;
            Clients management with PHC software."
          />
          <hr style={{ borderTop: "3px solid white", width: "60%" }} />
          <h2>Skills</h2>
          <Skills skills="Oracle Applications " progress={60} />
          <Skills skills="Production Planning " progress={50} />
          <Skills skills="Materials Engineering" progress={70} />
          <Skills skills="Microsoft Office" progress={90} />
          <Skills skills="VBA" progress={70} />
          <Skills skills="Linux" progress={60} />
          <Skills skills="ReactJS" progress={20} />
          <Skills skills="React-Native" progress={10} />
          <Skills skills="Latex" progress={20} />
          <Skills skills="JavaScript" progress={10} />
          <Skills skills="HTML/CSS" progress={10} />
          <Skills skills="Power BI" progress={30} />
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
