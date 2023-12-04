import cqsa_cert from "./imgs/certs/aws/aws-cloud-quest-solutions-architect.png"
import cqml_cert from "./imgs/certs/aws/aws-cloud-quest-machine-learning.png"
import cqsd_cert from "./imgs/certs/aws/aws-cloud-quest-serverless-developer.png"
import cqcp_cert from "./imgs/certs/aws/aws-cloud-quest-cloud-practitioner.png"
import l7iml_cert from "./imgs/certs/L7 AI/80d9954b-66f1-4e92-9a4b-a0a7e434fa3c.png"
import l7ea_cert from "./imgs/certs/L7 AI/213afba9-287e-4a9a-a073-f91919133f1a.png"
import l7de_cert from "./imgs/certs/L7 AI/fe80ea64-ebd6-4d96-93d9-05156709a049.png"
import l7mle_cert from "./imgs/certs/L7 AI/488bce01-3e93-4572-b2c5-102924b6c85f.png"
import l7nndl_cert from "./imgs/certs/L7 AI/57bc02f3-d1f9-45ed-9782-b45192676ca9.png"
import l7dsf_cert from "./imgs/certs/L7 AI/b895d889-6dd0-4041-b7c3-28dd0f375cd0.png"
import l7mlf_cert from "./imgs/certs/L7 AI/d7fc595f-3a4f-4076-b0d8-ea869a8b9b2e.png"

import "./badges.css"

function Badges() {
  return (
    <div id="Badges" class="section">
        <h3 class="title section">Certifications</h3>

        <div class="cert" id="aws-cloud-quest-solutions-architect">
          <a
            href="https://www.credly.com/badges/ad16d679-79fe-4190-a7c2-3738f039c97c/public_url"
            target="_blank"
            >AWS Cloud Quest: Solutions Architect</a
          ><img
            title="aws-cloud-quest-solutions-architect"
            src={cqsa_cert}
          />
        </div>

        <div class="cert" id="aws-cloud-quest-machine-learning">
          <a
            href="https://www.credly.com/badges/465d8370-4fb4-4140-8e3a-694b5d2edeca/public_url"
            target="_blank"
            >AWS Cloud Quest: Machine Learning</a
          ><img
            title="aws-cloud-quest-machine-learning"
            src={cqml_cert}
          />
        </div>

        <div class="cert" id="aws-cloud-quest-serverless-developer">
          <a
            href="https://www.credly.com/badges/3cef629f-40f7-4bf2-b0b1-83f8ed7134b2/public_url"
            target="_blank"
            >AWS Cloud Quest: Serverless Developer</a
          ><img
            title="aws-cloud-quest-serverless-developer"
            src={cqsd_cert}
          />
        </div>

        <div class="cert" id="aws-cloud-quest-cloud-practitioner">
          <a
            href="https://www.credly.com/badges/34baf15d-9392-4ce8-8dc0-3a8657ec1b96/public_url"
            target="_blank"
            >AWS Cloud Quest: Cloud Practitioner</a
          ><img
            title="aws-cloud-quest-cloud-practitioner"
            src={cqcp_cert}
          />
        </div>

        <div class="cert" id="Intermediate_Machine_Learning">
          <a
            href="https://www.credential.net/fa0cdaea-f0b0-4734-ae44-d9ce210218fc"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - Intermediate Machine
            Learning</a
          ><img
            title="Intermediate_Machine_Learning"
            src={l7iml_cert}
          />
        </div>

        <div class="cert" id="Explainable_AI">
          <a
            href="https://www.credential.net/3cb81e09-61b3-4208-bbec-46c4e5fea31e"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - Explainable AI</a
          ><img
            title="Explainable_AI"
            src={l7ea_cert}
          />
        </div>

        <div class="cert" id="Data_Engineer">
          <a
            href="https://www.credential.net/57a23bb3-18e8-411b-a4c9-6291cd371aad"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - Data Engineer</a>
            <img
            title="Data_Engineer"
            src={l7de_cert}
          />
        </div>

        <div class="cert" id="MLOps_Engineer">
          <a
            href="https://www.credential.net/41bd4172-1dc6-4597-adc2-33ca6868ca12"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - MLOps Engineer</a
          ><img
            title="MLOps_Engineer"
            src={l7mle_cert}
          />
        </div>

        <div class="cert" id="Neural_Networks_&_Deep_Learning">
          <a
            href="https://www.credential.net/62f52b13-4d7c-4b75-a453-fb6e0a7128fc"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - Neural Networks & Deep
            Learning</a
          ><img
            title="Neural_Networks_&_Deep_Learning"
            src={l7nndl_cert}
          />
        </div>

        <div class="cert" id="Data_Science_Foundations">
          <a
            href="https://www.credential.net/65d6994d-931e-4cad-b1fb-f2be87a1e00c"
            target="_blank"
          >
            L7 AI & Data Science Apprenticeship - Data Science Foundations</a
          ><img
            title="Data_Science_Foundations"
            src={l7dsf_cert}
          />
        </div>

        <div class="cert" id="Machine_Learning_Foundations">
          <a
            href="https://www.credential.net/97550202-90ec-4fed-8e84-126e831a9e3b"
            target="_blank"
            >L7 AI & Data Science Apprenticeship - Machine Learning
            Foundations</a
          ><img
            title="Machine_Learning_Foundations"
            src={l7mlf_cert}
          />
        </div>
        </div>

  );
}

export default Badges