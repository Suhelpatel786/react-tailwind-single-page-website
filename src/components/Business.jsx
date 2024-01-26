import React from "react";

import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = (feature, index) => (
  <div
    className={`flex flex-row sm:p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-0" : "mb-6"
    } feature-card`}
  >
    <div
      className={`rounded-full ${styles.flexCenter} bg-dimBlue w-[64px] h-[64px]`}
    >
      <img
        src={feature.icon}
        alt="icon"
        className={`w-[50%] h[50%] object-contain`}
      />
    </div>

    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white">
        {feature.title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] mb-1 text-dimWhite">
        {feature.content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          buillding credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={"mt-10"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
