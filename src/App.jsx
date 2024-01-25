import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Clients,
  GetStarted,
  FeedbackCard,
  Footer,
  Hero,
  Navbar,
  States,
  Testomonial,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <States />
        <Business />
        <Billing />
        <CardDeal />
        <Testomonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
