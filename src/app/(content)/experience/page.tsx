export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28">
      {/* 标题 */}
      <h1 className="text-4xl font-semibold mb-16 tracking-tight">Experience</h1>

      {/* 时间线主容器 */}
      <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-4 pl-8 space-y-20">
        
        {/* ================= JHA ================= */}
        <article className="relative /* 增加背景色和磨砂感 */
  bg-white/50 dark:bg-black/40 
  backdrop-blur-md 
  /* 增加内边距让文字不贴边 */
  p-6 md:p-8 
  /* 圆角和极细边框增加精致感 */
  rounded-3xl 
  border border-white/30 dark:border-white/10 
  shadow-sm">
          {/* 时间线圆点 */}
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-900 bg-teal-500 ring-4 ring-teal-500/20 shadow-sm" />

          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Just Horizons Alliance (JHA)
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-teal-600 dark:text-teal-400">Benchmark Research Assistant</span>
              <span className="text-neutral-500 italic">June 2025 – January 2026 · Boston, MA</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {['AI Governance', 'AI Benchmark', 'API'].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
              Worked on the development of an ethics-oriented LLM evaluation framework, the <strong>AI Ethics Index (AIEI)</strong>, addressing limitations in existing benchmarks regarding ethical behavior and governance compliance, covering safety, model design, environment impact, fairness, transparency, etc. using a tree architecture.
            </p>
            <p>
              Built end-to-end evaluation pipelines supporting both local (LLaMA) and API-based (Gemini) models, automating prompt testing and data analysis. See the following flow chart for detailed procedure. Additional temperature-tiered testing are executed to enhance the richness and adding robustness.
            </p>
            <p className="mt-4">
            For additional analysis and existing reports regarding financial coercion and
              doxxing patterns,{" "}
              <a
                href="/experience/aiei-benchmark"
                className="w-full md:w-4/5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm mix-blend-multiply dark:mix-blend-screen opacity-90 hover:opacity-100 transition-opacity"
              >
                click here
              </a>.
            </p>
            <div className="pt-4">
                <img
                    src="/experience/pipeline.png"
                    alt="Evaluation pipeline"
                    className="w-full md:w-4/5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
                />
            </div>
          </div>
        </article>

        {/* ================= CAS ================= */}
        <article className="relative /* 增加背景色和磨砂感 */
  bg-white/50 dark:bg-black/40 
  backdrop-blur-md 
  /* 增加内边距让文字不贴边 */
  p-6 md:p-8 
  /* 圆角和极细边框增加精致感 */
  rounded-3xl 
  border border-white/30 dark:border-white/10 
  shadow-sm">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--background)] bg-neutral-300 dark:bg-neutral-700" />
          
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Institute of Automation, Chinese Academy of Sciences
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-teal-600 dark:text-teal-400">NLP Research Assistant</span>
              <span className="text-neutral-500 italic">Sept 2023 – March 2024 · Beijing, China</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {['LLM Finetuning', 'Langchain', 'RAG', 'Prompt Engineering'].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-neutral-700 dark:text-neutral-300">

              <p>Worked in a <strong> Multi-modal Biological Experiment Agent </strong> project, with a focus on <strong> natural language processing </strong> and system integration. The system was designed to support both automated experiment execution and knowledge-assisted searching in laboratory workflows</p>
              <p>
                Developed a <strong>Knowledge Base QA</strong> system with 20,000+ biological protocols using BeautifulSoup and Markdown for efficient retrieval. 
                The answering system enables querying of protocol procedures, step-specific guidance, and contextual recommendations on experimental focus and execution details. It was integrated into a complete web-based user interface.
              </p>
              <p>
                Engineered a <strong>LangChain-based Agent</strong> translating CV outputs into robotic commands. To improve robustness and controllability, an action–task mapping dictionary is designed to constrain model outputs and reduce hallucinations. Through <strong> model fine-tuning, prompt engineering, few-shot learning, chain-of-thought prompting </strong>, and the constrained mapping layer, the system achieved 98% execution stability and a 57% reduction in end-to-end latency.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src="/experience/multimodal.png"
                alt="System UI"
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
              />
            </div>
          </div>
        </article>

        {/* ================= Snowball ================= */}
        <article className="relative /* 增加背景色和磨砂感 */
  bg-white/50 dark:bg-black/40 
  backdrop-blur-md 
  /* 增加内边距让文字不贴边 */
  p-6 md:p-8 
  /* 圆角和极细边框增加精致感 */
  rounded-3xl 
  border border-white/30 dark:border-white/10 
  shadow-sm">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--background)] bg-neutral-300 dark:bg-neutral-700" />
          
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Snowball</h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-teal-600 dark:text-teal-400">Big Data Development Intern</span>
              <span className="text-neutral-500 italic">Feb 2023 – May 2023 · Beijing, China</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 text-neutral-700 dark:text-neutral-300">
          <p>
            Identified and corrected data integrity issues across 10 warehouse tables and 68 sensitive fields using SQL, while optimizing warehouse logic by removing redundant dependencies.
          </p>

          <p>Reviewed 211 ODS tables and 681 downstream tables, identifying two unnecessary dependencies and more than one hundred instances of redundant logic.</p>
            </div>
        </article>

        {/* ================= Bianlifeng ================= */}
        <article className="relative /* 增加背景色和磨砂感 */
  bg-white/50 dark:bg-black/40 
  backdrop-blur-md 
  /* 增加内边距让文字不贴边 */
  p-6 md:p-8 
  /* 圆角和极细边框增加精致感 */
  rounded-3xl 
  border border-white/30 dark:border-white/10 
  shadow-sm">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--background)] bg-neutral-300 dark:bg-neutral-700" />
          
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Bianlifeng Technology</h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-teal-600 dark:text-teal-400">HRIS & Data Analytics Intern</span>
              <span className="text-neutral-500 italic">June 2021 – Sept 2021 · Beijing, China</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 text-neutral-700 dark:text-neutral-300">
          <p>
            Developed <strong>RPA workflows</strong> improving operational efficiency by 95% and processed large-scale employee data using SQL window functions for multi-department reporting. In one project, the system automatically extracted and exported information for more than 8,400 retired employees for Uber billing coverage.
          </p>
          <p>Conducted data analysis using SQL to extract information from the data warehouse and applied window functions to process and categorize employee work data, supporting recurring monthly reporting needs for more than 10 departments over multiple reporting cycles.</p>
          </div>
        </article>

      </div>
    </section>
  );
}