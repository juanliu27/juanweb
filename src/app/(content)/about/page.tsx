export default function AboutPage() {
  return (
    // 毛玻璃感和软阴影的容器
    <section className="mx-auto max-w-5xl px-1 pt-15 pb-15">
      <div className="bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
        
        {/* 标题：增加渐变色或更深的字重 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
          About Me
        </h1>

        <div className="flex flex-col-reverse md:flex-row gap-16 items-start">
          
          {/* 左侧：文字 - 提高字号并增加段落间距 */}
          <div className="md:w-3/5 space-y-8 text-lg leading-loose text-neutral-800 dark:text-neutral-200">
            <p>
              I am an <span className="font-semibold text-teal-600 dark:text-teal-400">interdisciplinary researcher</span> working at the intersection of 
              <span className="italic"> Data Science and Sociology</span>. 
              My primary research interests focus on the influence of AI, including 
              <strong> AI Governance, AI policy, LLM and Social Media </strong>.
            </p>

            <p>
              Meanwhile, I also work in the field of culture, particularly 
              <strong> the formation and development of fan community of cult films</strong>. 
              Broadly speaking, I am fascinated by networks and relationships among human and AI.
            </p>

            <p>
            I just finished my Master degree at <strong className="font-medium text-neutral-900 dark:text-white">Boston University</strong> and plan to 
            continue my academic journey with a PhD in sociology in the future. Before that, I wish to gain more ground-based understanding on real-world senarios,
            so I am actively looking for AI-related work, internships and RA right now.
            </p>

            <p>
              Beyond research, I am deeply attracted by arts and the nature. I also love photography and traveling, 
              enjoying visiting different tribes and exploring ancient cultures around the world.
            </p>
          </div>

          {/* 右侧：头像 - 优化阴影和边框，使其更有质感 */}
          <div className="md:w-2/5 flex flex-col items-center md:items-end gap-6">
            <div className="relative group">
              {/* 图片背后的装饰性阴影 */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="/profile.jpg"
                alt="Profile photo"
                className="
                  relative
                  w-full max-w-[320px] 
                  aspect-[3/4]
                  object-cover
                  rounded-2xl
                  grayscale-[20%] hover:grayscale-0
                  transition duration-500
                  shadow-2xl
                "
              />
            </div>

            <a
              href="/cv.pdf"
              target="_blank"
              className="
                group
                flex items-center gap-2
                text-sm font-medium
                px-6 py-3
                bg-neutral-900 text-white
                dark:bg-white dark:text-neutral-900
                rounded-full
                hover:scale-105 active:scale-95
                transition-all duration-300
                shadow-lg
              "
            >
              <span>Download CV</span>
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>

            <p className="bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-2xl border-l-4 border-teal-500 italic">
            "Neither the life of an individual nor the history of a society can be understood without understanding both."
            <br />
            <br />
            -- Mills, C. Wright. The Sociological Imagination. 1959.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}