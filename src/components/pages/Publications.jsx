import Droparticle from "./Droparticle";
import "./Publications.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import sysbio from "../../assets/sysbio.jpg"
import datadriven from "../../assets/datadriven.jpg"
const Publications = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elementsToAnimate = document.querySelectorAll(".ppr-animate");
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="main-publication-container">
      <Navbar />
      <div className="publication-container">
        <p>PUBLICATIONS</p>
        <p>SYSTEMS BIOLOGY AND DATA ANALYTICS LAB</p>
        <h2 className="quote quote-part1">Somewhere Something Incredible</h2>
        <h2 className="quote quote-part2">Is waiting to be Known.</h2>
        <h4 className="quote author">- Carl Sagan</h4>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <div className="papers">
        <div className="papers1">
          <h2 className="ppr-head-no ppr-animate">01</h2>
          <h2 className="papers1-heading ppr-animate">Papers</h2>
          <p className="ppr-animate">Our published articles in a chronological order.</p>
          <div className="drp-articles ppr-animate">
            <Droparticle />
          </div>
        </div>

<div className="book-ch">
  <div className="papers1">
    <h2 className="ppr-head-no ppr-animate">02</h2>
    <h2 className="papers1-heading ppr-animate">Book Chapters</h2>
  </div>

  <li className="ppr-animate">
    Syed, M., Gupta, A., Narad, P., &amp; Sengupta, A. (2026). Feature Extraction and Selection Methods and Bioinformatics Approach on Omics Data to Identify Molecular Signatures for Specific Diseases. In S. Mallik, Z. Zhao, S. Seth, A. Li, K. Borah, &amp; H. S. Das (Eds.), Feature Selection and Feature Extraction on Omics Data (pp. 147–193). Chapman &amp; Hall/CRC. Print ISBN: 978-1-032-96767-7; eBook ISBN: 978-1-003-59165-8. https://doi.org/10.1201/9781003591658-6
  </li>

  <li className="ppr-animate">
    Choudhury, P. R., Syed, M., Choudhury, A., Kumari, S., Sengupta, A., Narad, P., Agarwal, S., &amp; Garg, M. C. (2025). Utilization of Artificial Intelligence (AI) for Modernization of Wastewater Treatment and Resource Recovery. In A. K. Mungray, A. A. Mungray, A. Arkatkar, &amp; M. A. Abdelkareem (Eds.), Wastewater to Resource Recovery: Applying the Circular Economy Toward Sustainable Development (pp. 533–560). Wiley. Print ISBN: 9781394274284; Online ISBN: 9781394274314. https://doi.org/10.1002/9781394274314.ch23
  </li>

  <li className="ppr-animate">
    Roy, K., Syed, M., Narad, P., &amp; Sengupta, A. (2025). Genetic and epigenetic drivers of neurodegenerative disorders. Progress in Brain Research, 297, 53–130. Elsevier. ISBN: 978-0-443-43011-4. https://doi.org/10.1016/bs.pbr.2025.08.002
  </li>

  <li className="ppr-animate">
    Kulshrestha, S., Gupta, P., Chikara, A., Kapoor, K., Syed, M., Narad, P., &amp; Sengupta, A. (2024). Reproductive Health Data Mining: Case Studies. In A. Sengupta, P. Narad, G. Majumdar, &amp; D. Modi (Eds.), Data-Driven Reproductive Health: Role of Bioinformatics and Machine Learning Methods (pp. 189–203). Springer Singapore. Hardcover ISBN: 978-981-97-7450-0; eBook ISBN: 978-981-97-7451-7. https://doi.org/10.1007/978-981-97-7451-7_11
  </li>

  <li className="ppr-animate">
    Sharma, P., Gupta, T., Kulshrestha, S., Gupta, P., Choudhury, A., Modi, D., &amp; Sengupta, A. (2024). Time Series Analysis in Reproductive Health Data. In A. Sengupta, P. Narad, G. Majumdar, &amp; D. Modi (Eds.), Data-Driven Reproductive Health: Role of Bioinformatics and Machine Learning Methods (pp. 157–170). Springer Singapore. Hardcover ISBN: 978-981-97-7450-0; eBook ISBN: 978-981-97-7451-7. https://doi.org/10.1007/978-981-97-7451-7_9
  </li>

  <li className="ppr-animate">
    Choudhury, P. R., Karki, P., Choudhury, A., Narad, P., &amp; Sengupta, A. (2024). Economic Implications and Cost–Benefit Analysis of AI in Wastewater Treatment. In M. C. Garg (Ed.), The AI Cleanse: Transforming Wastewater Treatment Through Artificial Intelligence (pp. 337–361). Springer Cham. Hardcover ISBN: 978-3-031-67236-1; eBook ISBN: 978-3-031-67237-8. https://doi.org/10.1007/978-3-031-67237-8_14
  </li>

  <li className="ppr-animate">
    Gupta, P., Bhardwaj, G., Dubey, S., Tayal, T., Sengupta, A., &amp; Narad, P. (2024). AI-Enabled Process Optimization for Sustainable Wastewater Treatment Solutions. In M. C. Garg (Ed.), The AI Cleanse: Transforming Wastewater Treatment Through Artificial Intelligence (pp. 141–164). Springer Cham. Hardcover ISBN: 978-3-031-67236-1; eBook ISBN: 978-3-031-67237-8. https://doi.org/10.1007/978-3-031-67237-8_6
  </li>

  <li className="ppr-animate">
    Jain, N., Gupta, P., Sengupta, A., Chaurasia, A., &amp; Narad, P. (2024). Deciphering Stem Cell Pluripotency Using a Machine Learning Clustering Approach. In H. Sharma, A. Chakravorty, S. Hussain, &amp; R. Kumari (Eds.), Artificial Intelligence: Theory and Applications (Lecture Notes in Networks and Systems, Vol. 844, pp. 375–388). Springer Singapore. eBook ISBN: 978-981-99-8479-4. https://doi.org/10.1007/978-981-99-8479-4_28
  </li>

  <li className="ppr-animate">
    Narad, P., Gupta, R., Kulshrestha, S., &amp; Sengupta, A. (2024). Systems Biology in Understanding the Human Gut Microbiome and Related Diseases Highlighting Metabolic Modeling and Analysis. In S. Joshi, R. R. Ray, M. Nag, &amp; D. Lahiri (Eds.), Systems Biology Approaches: Prevention, Diagnosis, and Understanding Mechanisms of Complex Diseases (pp. 437–465). Springer Singapore. Hardcover ISBN: 978-981-99-9461-8; eBook ISBN: 978-981-99-9462-5. https://doi.org/10.1007/978-981-99-9462-5_17
  </li>

  <li className="ppr-animate">
    Narad, P., Gupta, R., Gupta, I., &amp; Sengupta, A. (2023). Protein Engineering Methods to Design Protein Therapeutics. In D. B. Singh &amp; T. Tripathi (Eds.), Protein-based Therapeutics (pp. 49–100). Springer Singapore. Hardcover ISBN: 978-981-19-8248-4; eBook ISBN: 978-981-19-8249-1. https://doi.org/10.1007/978-981-19-8249-1_3
  </li>

  <li className="ppr-animate">
    Narad, P., Gupta, R., &amp; Sengupta, A. (2022). Plant Metabolomics: A New Era in the Advancement of Agricultural Research. In P. Sharma, D. Yadav, &amp; R. K. Gaur (Eds.), Bioinformatics in Agriculture: Next Generation Sequencing Era (pp. 139–160). Academic Press/Elsevier. Print ISBN: 978-0-323-89778-5; eBook ISBN: 978-0-323-88599-7. https://doi.org/10.1016/B978-0-323-89778-5.00008-8
  </li>

  <li className="ppr-animate">
    Narad, P., Gupta, R., Mohanty, S., Sharma, R., Abbasi, N., &amp; Sengupta, A. (2022). Systems Biology Paradigm for Exploring the Relation Between Obesity and Ovarian Cancer with a Focus on Their Genome-Scale Metabolic Models. In P. Dutta, S. Chakrabarti, A. Bhattacharya, S. Dutta, &amp; C. Shahnaz (Eds.), Emerging Technologies in Data Mining and Information Security: Proceedings of IEMIS 2022, Volume 2 (pp. 613–624). Springer Singapore. eBook ISBN: 978-981-19-4052-1. https://doi.org/10.1007/978-981-19-4052-1_61
  </li>

  <li className="ppr-animate">
    Narad, P., Sengupta, A., Gupta, P., Priyadarshini, P., Kulshrestha, S., &amp; Chaurasia, A. (2022). Integrating Artificial Intelligence Techniques for Analysis of Next-Generation Sequencing Data. In A. Saxena &amp; N. Brault (Eds.), Artificial Intelligence and Computational Dynamics for Biomedical Research (pp. 67–96). De Gruyter. Print ISBN: 978-3-11-076199-3; eBook ISBN: 978-3-11-076204-4. https://doi.org/10.1515/9783110762044-005
  </li>

  <li className="ppr-animate">
    Narad, P., Naresh, G., &amp; Sengupta, A. (2022). Metabolomics and Flux Balance Analysis. In D. B. Singh &amp; R. K. Pathak (Eds.), Bioinformatics (pp. 337–365). Academic Press/Elsevier. ISBN: 978-0-323-89775-4. https://doi.org/10.1016/B978-0-323-89775-4.00008-0
  </li>

  <li className="ppr-animate">
    Chaurasia, A., Vats, S., Sengupta, A., Bansal, A., &amp; Narad, P. (2021). Practical Applications of Artificial Intelligence for Disease Prognosis and Management. In A. Saxena &amp; S. Chandra (Eds.), Artificial Intelligence and Machine Learning in Healthcare (pp. 1–36). Springer Singapore. Hardcover ISBN: 978-981-16-0810-0; eBook ISBN: 978-981-16-0811-7. https://doi.org/10.1007/978-981-16-0811-7_1
  </li>

  <li className="ppr-animate">
    Sengupta, A., Naresh, G., Mishra, A., Parashar, D., &amp; Narad, P. (2021). Proteome Analysis Using Machine Learning Approaches and Its Applications to Diseases. Advances in Protein Chemistry and Structural Biology, 127, 161–216. Elsevier. Volume ISBN: 978-0-323-85319-4. https://doi.org/10.1016/bs.apcsb.2021.02.003
  </li>

  <li className="ppr-animate">
    Sengupta, A., &amp; Narad, P. (2018). Metabolomics. In P. Arivaradarajan &amp; G. Misra (Eds.), Omics Approaches, Technologies and Applications: Integrative Approaches for Understanding OMICS Data (pp. 75–97). Springer Singapore. Print ISBN: 978-981-13-2924-1; eBook ISBN: 978-981-13-2925-8. https://doi.org/10.1007/978-981-13-2925-8_5
  </li>

  <li className="ppr-animate">
    Narad, P., &amp; Kirthanashri, S. V. (2018). Introduction to Omics. In P. Arivaradarajan &amp; G. Misra (Eds.), Omics Approaches, Technologies and Applications: Integrative Approaches for Understanding OMICS Data (pp. 1–10). Springer Singapore. Print ISBN: 978-981-13-2924-1; eBook ISBN: 978-981-13-2925-8. https://doi.org/10.1007/978-981-13-2925-8_1
  </li>

  <li className="ppr-animate">
    Biology of Useful Plants and Microbes (2013). ISBN-13: 978-8184872644.
  </li>
</div>
        <section className="bookk">
          <div className="papers1">
            <h2 className="ppr-head-no ppr-animate">03</h2>
            <h2 className="papers1-heading ppr-animate">Books</h2>
          </div>

          <div className="bookk-grid">
            <article className="bookk-card ppr-animate">
              <img
                src={sysbio}
                alt="Systems Biology and Machine Learning Methods in Reproductive Health book cover"
              />

              <h3>
                Systems Biology and Machine Learning Methods in Reproductive Health
              </h3>

              <p>
                Edited by Abhishek Sengupta, Priyanka Narad, Dinesh Gupta, and Deepak Modi.
                <br />
                Chapman &amp; Hall/CRC.
                <br />
              Hardcover ISBN: 978-103-27-5551-9 <br />
              eBook ISBN: 978-100-34-8754-8<br />
              Book DOI: 10.1201/9781003487548 <br />
              </p>

              <div className="bookk-links">
                <a
                  href="https://www.amazon.in/s?k=9781032755519"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>

                <a
                  href="https://www.routledge.com/Systems-Biology-and-Machine-Learning-Methods-in-Reproductive-Health/Gupta-Modi-Narad-Sengupta/p/book/9781003487548"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Publisher
                </a>
              </div>
            </article>

            <article className="bookk-card ppr-animate">
              <img
                src={datadriven}
                alt="Data-Driven Reproductive Health book cover"
              />

              <h3>
                Data-Driven Reproductive Health: Role of Bioinformatics and
                Machine Learning Methods
              </h3>

              <p>
                Edited by Abhishek Sengupta, Priyanka Narad, Gaurav Majumdar,
                and Deepak Modi.
                <br />
                Springer Nature, 2024.
              </p>
                <p className="book-isbn">
                Hardcover ISBN: 978-981-97-7450-0<br />
                eBook ISBN: 978-981-97-7451-7<br />
                Softcover ISBN: 978-981-97-7453-1
              </p>

              <div className="bookk-links">
                <a
                  href="https://www.amazon.in/s?k=Data-Driven+Reproductive+Health+Role+of+Bioinformatics+and+Machine+Learning+Methods"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>

                <a
                  href="https://link.springer.com/book/10.1007/978-981-97-7451-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Publisher
                </a>
              </div>
            </article>
          </div>
        </section>
        <div className="checkout-pg-publication">
          <h2 className="ppr-animate">That's not it.</h2>
          <p className="ppr-animate">Check out our Publications and Products</p>
        </div>
        <div className="checkout-links ppr-animate">
          <a className="work-link-project" href="./#/projects">
            PROJECTS
          </a>
          <a className="work-link-publication" href="./#/products">
            PRODUCTS
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
