export default function ExperiencePage() {
    return (
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-28">
        
        {/* 标题 */}
        <h1 className="text-4xl font-semibold mb-14">Experience</h1>
  
        <div className="space-y-6 leading-relaxed text-neutral-700 dark:text-[var(--foreground)]">
  
          {/* ================= JHA ================= */}
          <article className="space-y-4">
            <h2 className="text-2xl font-medium">
              Just Horizons Alliance (JHA)
            </h2>

            <p className="italic text-sm text-neutral-500">
              Benchmark Research Assistant · June 2025 – January 2026 · Boston, MA
              <br />
              AI Gorvernanve, AI benchmark, API
            </p>
  
            <p>
              At Just Horizons Alliance, I worked as a Benchmark Research Assistant on the
              development of an ethics-oriented large language model evaluation framework,
              the <strong>AI Ethics Index (AIEI)</strong>. The project addressed a core
              limitation of existing benchmarks: ethical behavior is often omitted, obscuring value trade-offs, governance constraints. 
              A hierarchical, tree-based benchmark architecture inspired by
              HELM is being developed under the supervision of Professor Wesley Wildman to evaluate model behavior across dimensions such as ethical alignment,
              transparency, fairness, safety, and environment, etc.
            </p>
  
            <p>
            I also built end-to-end evaluation pipelines integrating both <strong> prompt testing and document analysis </strong>. It is able to support both local open-source
              models (e.g. LLaMA) and API-based models (e.g. Gemini), automating prompt
              execution, response parsing, and score aggregation for scalable and
              reproducible cross-model comparison.
            </p>

            <p className="mt-4">
            For additional analysis and existing reports regarding financial coercion and
              doxxing patterns,{" "}
              <a
                href="/experience/aiei-benchmark"
                className="underline underline-offset-4 hover:opacity-80"
              >
                click here
              </a>.
            </p>

            <div className="my-6">
                <img
                    src="/experience/pipeline.png"
                    alt="Evaluation pipeline"
                    className="w-3/4 rounded-lg border border-neutral-200"
                />
            </div>
          </article>
  
          {/* ================= CAS ================= */}
          <article className="space-y-4">
            <h2 className="text-2xl font-medium">
              Institute of Automation, Chinese Academy of Sciences
            </h2>
  
            <p className="italic text-sm text-neutral-500">
            NLP Research Assistant · September 2023 – March 2024 · Beijing, China
            <br />
            LLM finetuning, Prompt Engineering, 
            <br />
            Langchain, Information Retrieval, Natural Language Processing
            </p>
  
            <p>
            At the Institute of Automation, Chinese Academy of Sciences, I worked in a 
            <strong> Multi-modal Biological Experiment Agent </strong> project, with a focus on natural language processing
            and system integration. The system was designed to support both automated experiment execution
            and knowledge-assisted searching in laboratory workflows.
            </p>
            <div className="flex flex-col md:flex-row gap-10 items-start"> 
              <div className="md:w-2/3 space-y-6 leading-relaxed">
                <p>
                I developed an end-to-end <strong> Knowledge Base Question Answering </strong> system built on a large-scale corpus of
                biological experiment protocols. Over 20,000 protocols were crawled from academic journal
                websites using BeautifulSoup and converted into structured Markdown format to support efficient
                retrieval. The answering system enables natural language querying of protocol procedures, step-specific guidance, and contextual
                recommendations on experimental focus and execution details. It was integrated into a complete web-based user interface, enabling interactive
                protocol querying, agent-driven command generation, and report creation within a unified workflow.
                </p>
                <p>
                In parallel, I engineered a <strong> LangChain-based Protocol Generation Agent </strong> that translates upstream
                computer vision outputs into structured robotic execution commands, effectively bridging visual
                perception and physical laboratory action. To improve robustness and controllability, I designed
                an action–task mapping dictionary to constrain model outputs and reduce hallucinations. Through
                <strong> model fine-tuning, prompt engineering, few-shot learning, chain-of-thought prompting </strong>, and the
                constrained mapping layer, the system achieved 98% execution stability and a 57% reduction in
                end-to-end latency.
                </p>
                <p>
                Beyond command generation, the agent is also capable of producing welly-structured, full-length
                biological experiment reports, synthesizing experimental context, procedures, and outcomes.
                </p>
              
              </div>
            
              <div className="md:w-1/3 shrink-0">
                <img
                  src="/experience/multimodal.png"
                  alt="Multimodal Biological Experiment Agent System"
                  className="w-full rounded-lg border border-neutral-200"
                />
                <p className="mt-2 text-sm text-neutral-500">
                  Multi-modal biological experiment agent system (Protocol + command generation) (left)
                  <br />
                  & Protocol KBQA System (right).
                </p>
              </div>
            </div>
          </article>

          {/* ================= Snowball ================= */}
          <article className="space-y-4">
            <h2 className="text-2xl font-medium">Snowball</h2>
  
            <p className="italic text-sm text-neutral-500">
              Big Data Development Intern · February 2023 – May 2023 · Beijing, China
              <br />
              SQL, Database, Sensitive Information, Testing, Data Warehouse
            </p>
  
            <p>
              At Snowball, I worked in the R&D department on data quality assurance and
              warehouse optimization. </p>
            <p>I extracted and analyzed data using SQL and conducted integrity testing on 10 data warehouse tables covering 68 sensitive fields. Through reviewing and modifying underlying table logic, I identified and corrected issues in four problematic tables.
              <br />In addition, I analyzed table reuse and dependency patterns across the data warehouse. I reviewed 211 ODS tables and 681 downstream tables, identifying two unnecessary dependencies and more than one hundred instances of redundant logic.</p>
          </article>
  
          {/* ================= Bianlifeng ================= */}
          <article className="space-y-4">
            <h2 className="text-2xl font-medium">
              Bianlifeng Technology Co., Ltd.
            </h2>
  
            <p className="italic text-sm text-neutral-500">
              HRIS & Data Analytics Intern · June 2021 – September 2021 · Beijing, China
              <br />
              RPA, UIBOT, SQL, Visio, Data Warehouse
            </p>
  
            <p>
              I worked on automation and internal data workflows, developing RPA pipelines
              and SQL-based reporting systems in Bianlifeng.
            </p>
            <p>I developed <strong> Robotic Process Automation (RPA) </strong> workflows using UIBOT to automate web data scraping, classification, and computation tasks. These workflows enabled the automatic generation of monthly reports and streamlined data entry processes, improving operational efficiency by approximately 95%. In one major project, the system automatically extracted and exported information for more than 8,400 employees from deployment database for the Uber project.
            <br />
            I conducted data analysis using SQL to extract information from the data warehouse and applied window functions to process and categorize employee work data. This work supported recurring monthly reporting needs for more than 10 departments over multiple reporting cycles.
I configured and tested upstream and downstream workflows and deployed them to production environments. I contributed to nearly 30 process configurations and independently developed and launched multiple workflows, supporting the registration of more than 500 individual contractors within the organization.
<br />
To support documentation and communication, I created nearly 50 Visio process diagrams and uploaded them to internal systems. I also used Excel and PowerPoint to perform basic data processing and present analytical results to stakeholders.
            </p>
          </article>
  
        </div>
      </section>
    );
  }
  