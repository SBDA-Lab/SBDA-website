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
    Dr. Abhishek Sengupta is an{" "}
    <strong>
      Associate Professor and Research Scientist in Bioinformatics and
      Systems Biology
    </strong>{" "}
    at Amity University, Noida, with over 20 years of experience in higher
    education, research supervision, and academic leadership across
    undergraduate, postgraduate, and doctoral levels.
  </p>

  <p>
    His background spans biotechnology, healthcare data, and pharmaceutical
    market data. He is driven by data, high-throughput technologies, and
    mathematical modelling. He has been a Visiting Researcher at the Medical
    College of Wisconsin, USA, and EMBL-EBI, Cambridge, UK, supported by a
    2016 Wellcome Trust/DST Travel Fellowship.
  </p>

  <p>
    <strong>Research areas:</strong> reproductive health and medicine;
    microbes, the microbiome, and human health; metabolomics; epigenomics;
    mental health informatics and wellbeing; sexually transmitted and
    reproductive tract infections; and vitiligo pathogenesis and therapeutics.
    As a vitiligo survivor and advocate, he also works to advance research and
    awareness.
  </p>

  <p>
    He uses computational and systems biology, data science, mathematical
    modelling, and AI/ML to analyse multi-omics, molecular, and clinical data.
    His work combines biological network construction and integration with
    logical, kinetic, and constraint-based modelling, machine learning, and
    graph theory.
  </p>

  <p>
    <strong>His lab studies</strong> metabolic, signalling, and gene-regulatory
    disease networks, disease progression, and molecular mechanisms. The lab
    maps key biological functions and pathways, analyses network communities
    and topology, generates data-driven hypotheses, and identifies biomarkers
    and targetable genes, proteins, and metabolites.
  </p>

  <p>
    The lab develops clinical predictive models and personalised,
    condition-specific genome-scale metabolic models using transcriptomic,
    proteomic, and metabolomic data. Its work also includes clinical and
    biological databases, interactive and static web tools, network
    pharmacology and drug repurposing, molecular modelling, docking, and
    molecular-dynamics simulations. The models span complex systems from
    molecules through tissues, organs, and organisms to populations.
  </p>

  <p>
    He has published widely in peer-reviewed, high-impact journals and
    presented at international conferences, earning recognition in
    computational biology and translational research.
  </p>

  <p>
    At Amity, he chairs the Bioinformatics Club and coordinates placements and
    internships for Bioinformatics, Data Science, and Biosciences. He leads a
    DBT-funded reproductive-health data analytics lab with Sir Ganga Ram
    Hospital, New Delhi, and two ICMR-funded collaborative grants with NIMHANS,
    Bangalore; AIIMS, Delhi; MAMC, New Delhi; and PGIMER, Chandigarh, on
    epigenomics and AI-integrated mental health.
  </p>

  <p>
    He also collaborates on an IBRO–Wellcome-funded NCAMH 2026 International
    Grant with NIMHANS, Bengaluru, and University College Cork, Ireland,
    studying gut microbiome–metabolome signatures and predictive modelling in
    schizophrenia.
  </p>

  <p>
    His lab works with clinicians, embryologists and IVF specialists, mental
    health specialists, geneticists, neurochemists, and other healthcare
    professionals. He welcomes research collaboration, consulting, academic
    partnerships, and high-throughput project design and execution.
  </p>

  <p>
    The lab aims to deliver meaningful models and analyses that turn biological
    data into actionable knowledge.
  </p>

  <p>
    <strong>Outside work:</strong> He enjoys time with family and friends,
    networking, reading science-fiction and health-technology books, and art
    and painting.
  </p>
</div>
    </div>
  </div>

        {/* the below section is for priyanka mam.. containers classname is same cause no change in css is required. */}
      
        <div className="team-leader">
          <h1 className="tl-head-no">02</h1>
          <h1 className="tl-heading">Founding Member
          </h1>
          <div className="tl-section">
            <div className="founder-image">
              <img
                className="founder-img"
                src={priyanka_mam_pic}
                alt="Abhishek Sir"
              />
              <h2 className="tl-name">Dr Priyanka Narad</h2>
              <p className="tl-desg">Founding Member
              </p>
              <div className="tl-sm-profile">
                <a href="https://www.linkedin.com/in/priyanka-narad-phd-b35320b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <div className="tl-linkedin"></div>
                </a>
              </div>
            </div>
            <div className="tl-about" style={{textAlign: "justify"}}>
  <p>
    Dr. Priyanka Narad is a{" "}
    <strong>
      Scientist C at the Indian Council of Medical Research (ICMR)
      Headquarters, New Delhi
    </strong>
    , in the Division of Development Research. Her professional experience
    spans bioinformatics research, higher education, academic administration,
    research project management, and healthcare applications of artificial
    intelligence. Her areas of work include bioinformatics, genomics,
    transcriptomics, network biology, and AI for healthcare data.
  </p>

  <p>
    She holds a PhD in Bioinformatics from Amity University and a master’s
    degree in Bioinformatics from Birla Institute of Technology and Science,
    Pilani. With a specialisation in network modelling and analysis, she
    combines biological knowledge with computational methods, bioinformatics
    tools, and programming in R and Python to investigate complex biological
    questions.
  </p>

  <p>
    Before joining ICMR in October 2023, she spent more than fourteen years at
    Amity University Uttar Pradesh, Noida, as an Assistant Professor and
    academic administrator. A founding member of the Systems Biology and Data
    Analytics (SBDA) Research Laboratory, she contributed to its research
    activities alongside teaching, student mentoring, curriculum development,
    programme leadership, academic quality assurance, and alumni engagement.
  </p>

  <p>
    <strong>
      Her research brings together systems biology, biological network
      analysis, and machine learning.
    </strong>{" "}
    She has co-authored research on modelling human pluripotency, integrating
    gene-regulatory networks with RNA-sequencing data to examine how changes in
    key genes influence stem-cell states and differentiation. Her work also
    includes Net2Align, an algorithm developed for the pairwise global
    alignment of biological networks.
  </p>

  <p>
    <strong>Reproductive health and AI-assisted prediction</strong> form
    another substantial part of her research portfolio. At Amity, she served
    as an investigator on a DBT-funded project exploring artificial
    intelligence for reproductive medicine. Her collaborative publications
    include Deep Inception–ResNet, a deep-learning approach for predicting
    cumulative pregnancy outcomes in IVF, and a subsequent study applying
    Bayesian-optimised ensemble learning to IVF outcome prediction in an
    Indian patient population.
  </p>

  <p>
    She also contributed to <strong>FertilitY Predictor</strong>, a
    machine-learning-based web tool developed to estimate assisted reproduction
    outcomes in men with Y-chromosome microdeletions. The published work
    addresses sperm retrieval, fertilisation, clinical pregnancy, and live-birth
    probabilities. The associated technology was transferred to industry for
    commercialisation, extending this collaborative research into software
    development and technology translation.
  </p>

  <p>
    Her contributions to computational research resources extend to vitiligo.
    She is a co-author and corresponding author of the{" "}
    <strong>Vitiligo Information Resource database v3</strong>, which
    integrates transcriptomic datasets, disease-associated genes, protein
    interaction networks, and compound information. The platform supports
    pathway analysis, biomarker exploration, and the generation of hypotheses
    for further therapeutic research.
  </p>

  <p>
    At ICMR, her responsibilities include research project management and
    contributions to policies and guidelines concerning bioinformatics,
    genomics, and artificial intelligence. Her work connects computational
    research with strategic planning and the responsible application of
    emerging technologies in health research.
  </p>

  <p>
    Her academic profile includes more than fifty research and review
    publications, three registered copyrights, and one technology transfer to
    industry. She also contributes to scientific training and knowledge
    exchange.
  </p>

  <p>
    She welcomes research collaborations and academic partnerships in
    bioinformatics, systems biology, genomics, reproductive health, and
    artificial intelligence for healthcare.
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
