export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-28">
      {/* 标题 */}
      <h1 className="text-4xl font-semibold mb-10">About Me</h1>

      {/* 主体：文字在左，头像在右 */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
        
        {/* 左侧：文字 */}
        <div className="md:w-2/3 space-y-6 leading-relaxed text-neutral-700 dark:text-[var(--foreground)]">
          <p>
            I am an interdisciplinary researcher working at the intersection of
            data science and sociology.
            My primary research interests focus on the influence of AI, including 
            AI ethics, AI policy, and social media.
            Meanwhile, I also work in the field of culture, particularly how fan
            communities form and spread around cult films. 
            Broadly speaking, I am fascinated by networks and relationships among human and AI.
          </p>

          <p>
            I just finished my Master degree in the Department of
            Computational and Data Sciences at Boston University and plan to
            continue my academic journey with a PhD in sociology. 
            Meanwhile, I am also interested in and looking for AI-related work and internships.
            To understand society, one must first
            get a basic knowledge of what is happening within it.</p>
          <p>As someone who
            has studied data science throughout both undergraduate and
            graduate education, I enjoy using quantitative methods and my
            understanding of AI to integrate sociology and ethics.
            With the guidance of my professor and related non-profit organization
            JHA, I am also exploring ways of developing new AI benchmarks that center
            on ethical dimensions.
          </p>

          <p>
          Beyond research, I am deeply attracted by arts, cult films, cinema, and
            the relationship between humans and nature, particularly in
            non-religious behaviors. 
            I also love photography and traveling, and I am especially drawn to
            different tribes and ancient cultures around the world.
          </p>
        </div>

        {/* 右侧：头像 + CV */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end gap-4">
        <img
          src="/profile.jpg"
          alt="Profile photo"
          className="
            w-90 h-120
            object-cover
            rounded-lg
            border border-neutral-300
            shadow-sm
          "
        />

          <a
            href="/cv.pdf"
            target="_blank"
            className="
              text-sm
              px-4 py-2
              border border-neutral-400
              rounded-md
              hover:bg-neutral-100
              dark:hover:bg-neutral-800
              transition
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
