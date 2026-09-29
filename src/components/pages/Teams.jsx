import React from "react";
import Navbar from "../Navbar";
import "./Teams.css";
import Teamsdata from "../../data/Teamsdata";
import abhishek_sir_pic from "../../assets/Abhishek sir pic.jpeg";
import priyanka_mam_pic from "../../assets/priyanka mam pic.jpeg";
import Cardslider from "../Cardslider";
import Footer from "../Footer";
const Teams = () => {
  return (
    <div className="teams-main-container">
      <Navbar></Navbar>
      <div className="team-container">
        <p>TEAM</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Alone we can do so little;</h2>
        <h2 className="quote quote-part2">Together we can do so much.</h2>
        <h4 className="quote author">- Helen Keller</h4>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="team-content-container">
        <div className="team-leader">
          <h1 className="tl-head-no">01</h1>
          <h1 className="tl-heading">Founder and Principle Investigator</h1>
          <div className="tl-section">
            <div className="tl-image"> 
              <img
                className="tl-img1"
                src={abhishek_sir_pic}
                alt="Abhishek Sir"
              />
              <h2 className="tl-name">Dr Abhishek Sengupta</h2>
              <p className="tl-desg">Founder and Principle Investigator</p>
              <div className="tl-sm-profile">
                <a href="https://www.linkedin.com/in/drabhisheksengupta83/">
                  <div className="tl-linkedin"></div>
                </a>
              </div>
            </div>
<div className="tl-about" style={{textAlign: "justify"}}>
        <p>
          I am an <strong>Associate Professor and Research Scientist in
          Bioinformatics and Systems Biology</strong> at Amity University, Noida,
          with over 20 years of experience in higher education, research
          supervision, and academic leadership across undergraduate, postgraduate,
          and doctoral levels.
        </p>

        <p>
          My background spans biotechnology, healthcare data, and pharmaceutical
          market data. I am driven by data, high-throughput technologies, and
          mathematical modelling. I have been a Visiting Researcher at the Medical
          College of Wisconsin, USA, and EMBL-EBI, Cambridge, UK, supported by a
          2016 Wellcome Trust/DST Travel Fellowship.
        </p>

        <p>
          <strong>Research areas:</strong> reproductive health and medicine;
          microbes, the microbiome, and human health; metabolomics; epigenomics;
          mental health informatics and wellbeing; sexually transmitted and
          reproductive tract infections; and vitiligo pathogenesis and therapeutics.
          As a vitiligo survivor and advocate, I also work to advance research and
          awareness.
        </p>

        <p>
          I use computational and systems biology, data science, mathematical
          modelling, and AI/ML to analyse multi-omics, molecular, and clinical data.
          My work combines biological network construction and integration with
          logical, kinetic, and constraint-based modelling, machine learning, and
          graph theory.
        </p>

        <p>
          <strong>Our lab studies</strong> metabolic, signalling, and gene-regulatory
          disease networks, disease progression, and molecular mechanisms. We map
          key biological functions and pathways, analyse network communities and
          topology, generate data-driven hypotheses, and identify biomarkers and
          targetable genes, proteins, and metabolites.
        </p>

        <p>
          We develop clinical predictive models and personalized,
          condition-specific genome-scale metabolic models using transcriptomic,
          proteomic, and metabolomic data. Our work also includes clinical and
          biological databases, interactive and static web tools, network
          pharmacology and drug repurposing, molecular modelling, docking, and
          molecular-dynamics simulations. Our models span complex systems from
          molecules through tissues, organs, and organisms to populations.
        </p>

        <p>
          I have published widely in peer-reviewed, high-impact journals and
          presented at international conferences, earning recognition in
          computational biology and translational research.
        </p>

        <p>
          At Amity, I chair the Bioinformatics Club and coordinate placements and
          internships for Bioinformatics, Data Science, and Biosciences. I lead a
          DBT-funded reproductive-health data analytics lab with Sir Ganga Ram
          Hospital, New Delhi, and two ICMR-funded collaborative grants with NIMHANS,
          Bangalore; AIIMS, Delhi; MAMC, New Delhi; and PGIMER, Chandigarh, on
          epigenomics and AI-integrated mental health.
        </p>

        <p>
          I also collaborate on an
          IBRO–Wellcome-funded NCAMH 2026 International Grant with
          NIMHANS, Bengaluru, and University College Cork, Ireland, studying gut
          microbiome–metabolome signatures and predictive modelling in schizophrenia.
        </p>

        <p>
          My lab works with clinicians, embryologists and IVF specialists, mental
          health specialists, geneticists, neurochemists, and other healthcare
          professionals. I welcome research collaboration, consulting, academic
          partnerships, and high-throughput project design and execution.
        </p>

        <p>
          We aim to deliver meaningful models and analyses that turn biological data
          into actionable knowledge.
        </p>

        <p>
          <strong>Outside work:</strong> I enjoy time with family and friends,
          networking, reading science fiction and health-technology books, and art
          and painting.
        </p>
      </div>
    </div>
  </div>

        {/* the below section is for priyanka mam.. containers classname is same cause no change in css is required. */}
      
        <div className="team-leader">
          <h1 className="tl-head-no">02</h1>
          <h1 className="tl-heading">Co-Founder & Scientific Advisor | Former Principal Investigator
          </h1>
          <div className="tl-section">
            <div className="founder-image">
              <img
                className="founder-img"
                src={priyanka_mam_pic}
                alt="Abhishek Sir"
              />
              <h2 className="tl-name">Dr Priyanka Narad</h2>
              <p className="tl-desg">Co-Founder & Scientific Advisor | Former Principal Investigator
              </p>
              <div className="tl-sm-profile">
                <a href="https://www.linkedin.com/in/priyanka-narad-phd-b35320b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <div className="tl-linkedin"></div>
                </a>
              </div>
            </div>
            <div className="tl-about">
              <p style ={{ textAlign:"justify" } }>
              I am an experienced bioinformatics professional with PhD in Biotechnology and a specialization in Network Modelling and Analysis. 
              With proficiency in bioinformatics tools, techniques, and R & Python programming, I have gained a diversified portfolio as an Assistant Professor, Academic Administrator,
               and founding member of SBDA research lab
               in my previous professional experience at Amity University Uttar Pradesh.
              </p>
              
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              Currently, I am working as a scientist and researcher in the Bioinformatics Division,
               Indian Council of Medical Research (ICMR), Department of Health Research (DHR), 
               Ministry of Health & Family Welfare (MoH&FW), New Delhi. 
               Here, I am handling the research projects undertaken by the division 
               and building policies and guidelines in bioinformatics and artificial intelligence. 
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              I have more than 50 published research and review articles in high-impact factor
               peer-reviewed national/international journals like Scientific Reports, Journal
                of Biomolecular Structure and Dynamics, and Human Gene to name a few. I have 
                3 copyrights registered and 1 technology transferred to industry.
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              As an individual, I am upbeat, enthusiastic, and have a problem-solving attitude. 
              My exceptional communication skills, commitment, and ownership of assigned work 
              allow me to work efficiently in a fast-paced environment.
              </p>
              <p style={{ textAlign: "justify", marginTop: "1.5rem" }}>
              Feel free to connect with me to learn more about my work interests and mutual collaborations.
              </p>

              
            </div>
          </div>
        </div>
        <div className="team-members">
          <h1 className="tm-head-no">03</h1>
          <h1 className="tm-heading">Team Members</h1>
          <div className="team-memb-slider">
            <Cardslider
              slideWidth="200px"
              slideHeight="200px"
              Data={Teamsdata}
              slides={2}
              speed={3500}
            ></Cardslider>
          </div>
        </div>
        
        <h2 className="teams-ch-text">Do you have a project?</h2>
        <div className="teams-ch-link">
          
          <a className="team-link-contact" href="./#/contact">
            LET'S DISCUSS
          </a>
          <a className="team-link-research" href="./#/research">
           OUR RESEARCH
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Teams;
